const sinon = require('sinon');
const { expect } = require('chai');
const { ObjectId } = require('mongodb');

const MoviesController = require('../../controllers/movieController');
const MoviesServices = require('../../services/movieService');

describe('Ao chamar o controller de getById', () => {
  describe('quando não encontra um filme', async () => {
    const request = {};
    const response = {};
    const ID = '604cb554311d68f491ba5781';
    
    before(async () => {
      request.params = { id: ID };    
      
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      
      sinon.stub(MoviesServices, 'getById').resolves(null);
    });
    
    after(() => {
      MoviesServices.getById.restore();
    });

    it('Espera receber o status 404', async () => {
      await MoviesController.getById(request, response);
      expect(response.status.calledWith(404)).to.be.equal(true);
    });

    it('Espera mensagem de erro "nao encontrado"', async () => {
      await MoviesController.getById(request, response);
      expect(response.json.calledWith({mensagem: 'nao encontrado'}));
    });
  });

  describe('quando o filme eh encontrado', () => {
    const request = {};
    const response = {};
    const ID = '604cb554311d68f491ba5781';
    const expectedMovie = {
      _id: ObjectId(ID),
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };
    
    before(async () => {
      request.params = { id: ID };    
      
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      
      sinon.stub(MoviesServices, 'getById').resolves(expectedMovie);
    });
    
    after(() => {
      MoviesServices.getById.restore();
    });

    it('Espera receber o status 404', async () => {
      await MoviesController.getById(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('Espera mensagem de erro "nao encontrado"', async () => {
      await MoviesController.getById(request, response);
      expect(response.json.calledWith(expectedMovie));
    });
  })
});