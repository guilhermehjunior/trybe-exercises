const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describre('Procura filme por ID no DB', async () => {
  let connectionMock; 
  const DBServer = new MongoMemoryServer();
  
  before(async () => {
    const URLMock = await DBServer.getUri();  
    connectionMock = await MongoClient.connect(URLMock, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('model_example'));
    
    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });
  
  after(() => {
    mongoConnection.getConnection.restore();
  });

  describe('O filme nao foi encontrado', () => {
    it('espera retornar um array vazio', async () => {
      const movie = await MoviesModel.getById({id: '604cb554311d68f491ba5781'});
      expect(movie).to.be.empty;
    });
  });


  describre('O filme foi encontrado', async () => {
    const expectedMovie = {
      id: '604cb554311d68f491ba5781',
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };  
    
    before(async () => {
      await connectionMock.collection('movies').insertOne({ ...expectedMovie });
    });

    after(async () => {
      await connectionMock.collection('movies').drop();
    });

    it('espera retornar um array com 1 filme', async () => {
      const [movie] = await MoviesModel.getById({id: '604cb554311d68f491ba5781'});
      expect(movie).to.be.deep.equal(expectedMovie);
    });

  });
});