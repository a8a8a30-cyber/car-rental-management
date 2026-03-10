import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import { app, server } from '../main';

afterAll(() => {
    server.close();
});

describe('GET /', () => {
    it('returns API welcome message', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Car Rental Management API');
    });
});

describe('GET /api/vehicles', () => {
    it('returns a list of vehicles', async () => {
        const res = await request(app).get('/api/vehicles');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('each vehicle has id, name, plate, and status fields', async () => {
        const res = await request(app).get('/api/vehicles');
        const vehicle = res.body[0];
        expect(vehicle).toHaveProperty('id');
        expect(vehicle).toHaveProperty('name');
        expect(vehicle).toHaveProperty('plate');
        expect(vehicle).toHaveProperty('status');
    });
});

describe('POST /api/vehicles', () => {
    it('creates a new vehicle and returns it', async () => {
        const newVehicle = { name: 'Ford Focus', plate: 'GHI-321', status: 'available' };
        const res = await request(app).post('/api/vehicles').send(newVehicle);
        expect(res.status).toBe(201);
        expect(res.body.name).toBe('Ford Focus');
        expect(res.body.plate).toBe('GHI-321');
        expect(res.body).toHaveProperty('id');
    });
});

describe('GET /api/contracts', () => {
    it('returns a list of contracts', async () => {
        const res = await request(app).get('/api/contracts');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('each contract has required fields', async () => {
        const res = await request(app).get('/api/contracts');
        const contract = res.body[0];
        expect(contract).toHaveProperty('id');
        expect(contract).toHaveProperty('title');
        expect(contract).toHaveProperty('customer');
    });
});

describe('POST /api/contracts', () => {
    it('creates a new contract', async () => {
        const newContract = {
            title: 'Contract #003',
            vehicleId: 1,
            customer: 'Khalid Omar',
            startDate: '2024-02-01',
            endDate: '2024-02-10',
        };
        const res = await request(app).post('/api/contracts').send(newContract);
        expect(res.status).toBe(201);
        expect(res.body.title).toBe('Contract #003');
        expect(res.body.customer).toBe('Khalid Omar');
        expect(res.body).toHaveProperty('id');
    });
});

describe('GET /api/maintenance', () => {
    it('returns a list of maintenance records', async () => {
        const res = await request(app).get('/api/maintenance');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('each record has id, description, date, and cost fields', async () => {
        const res = await request(app).get('/api/maintenance');
        const record = res.body[0];
        expect(record).toHaveProperty('id');
        expect(record).toHaveProperty('description');
        expect(record).toHaveProperty('date');
        expect(record).toHaveProperty('cost');
    });
});

describe('POST /api/maintenance', () => {
    it('creates a new maintenance record', async () => {
        const newRecord = { vehicleId: 2, description: 'Brake check', date: '2024-02-05', cost: 350 };
        const res = await request(app).post('/api/maintenance').send(newRecord);
        expect(res.status).toBe(201);
        expect(res.body.description).toBe('Brake check');
        expect(res.body).toHaveProperty('id');
    });
});

describe('GET /api/analytics', () => {
    it('returns analytics data', async () => {
        const res = await request(app).get('/api/analytics');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('totalVehicles');
        expect(res.body).toHaveProperty('availableVehicles');
        expect(res.body).toHaveProperty('rentedVehicles');
        expect(res.body).toHaveProperty('maintenanceVehicles');
        expect(res.body).toHaveProperty('totalContracts');
        expect(res.body).toHaveProperty('totalMaintenanceCost');
    });

    it('analytics values are numeric', async () => {
        const res = await request(app).get('/api/analytics');
        expect(typeof res.body.totalVehicles).toBe('number');
        expect(typeof res.body.totalContracts).toBe('number');
        expect(typeof res.body.totalMaintenanceCost).toBe('number');
    });
});
