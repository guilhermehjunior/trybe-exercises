const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const MoviesService = require('../../services/movieService');
const MoviesModel = require('../../models/movieModel');

describe('Service getByID', async () => {
  const ID = '604cb554311d68f491ba5781';
  const expectedMovie = {
    _id: ObjectId(ID),
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };
  

  describe('O filme nao foi encontrado', () => {
    before(async () => {
      sinon.stub(MoviesModel, 'getById').resolves(null);
    });
  
    after(async () => {
      MoviesModel.getById.restore();
    });

    it('espera retornar um array vazio', async () => {
      const movie = await MoviesService.getById('604cb554311d68f491ba5781');
      expect(movie).to.be.null;
    });
  });


  describe('O filme foi encontrado', async () => {
    
    before(async () => {
      sinon.stub(MoviesModel, 'getById').resolves(expectedMovie);
    });
  
    after(async () => {
      MoviesModel.getById.restore();
    });

    it('espera retornar um array com 1 filme', async () => {
      const movie = await MoviesService.getById(ID);
      expect(movie).to.include.all.keys('_id','title', 'releaseYear', 'directedBy');
    });

  });
});
