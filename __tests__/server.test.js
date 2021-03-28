'use strict';

const superTest = require('supertest');
const server = require('../server.js');
const request = superTest(server.app);

describe('========SERVER========',() => {

    it('handle invalid routes', async () => {
        const res = await request.get('/foo');
        expect(res.status).toEqual(404);
    });

    it('handle server errors', async () => {
        const res = await request.get('/bad');
        expect(res.status).toEqual(500);
    });

    it('handle valid routes', async () => {
        const res = await request.get('/');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hello world');
    });
});