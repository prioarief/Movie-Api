const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('movie endpoint testing', () => {
	it('Should get movie by search', (done) => {
		chai
			.request(app)
			.get('/search?s=spiderman')
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body).to.have.property('Search').with.to.be.a('array');
				done();
			});
	});

	it('Should show error message if movie not found when get movie by search', (done) => {
		chai
			.request(app)
			.get('/search?s=qygssbus')
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body)
					.to.have.property('Response')
					.with.to.be.a('string')
					.equal('False');
				expect(res.body)
					.to.have.property('Error')
					.with.to.be.a('string')
					.equal('Movie not found!');
				done();
			});
	});

	it('Should get movie detail by id', (done) => {
		chai
			.request(app)
			.get('/detail/tt2705436')
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body).to.be.a("object")
				done();
			});
	});

	it('Should show error message if movie not found when get movie detail by id', (done) => {
		chai
			.request(app)
			.get('/detail/qygssbus')
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body)
					.to.have.property('Response')
					.with.to.be.a('string')
					.equal('False');
				expect(res.body)
					.to.have.property('Error')
					.with.to.be.a('string')
					.equal('Incorrect IMDb ID.');
				done();
			});
	});
});
