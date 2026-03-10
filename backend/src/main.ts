// Express server with Socket.io

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const server = http.createServer(app);

const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';

const io = new Server(server, {
    cors: { origin: frontendUrl }
});

app.use(cors({ origin: frontendUrl }));
app.use(express.json());

// In-memory data for development
interface Vehicle {
    id: number;
    name: string;
    plate: string;
    status: 'available' | 'rented' | 'maintenance';
}

interface Contract {
    id: number;
    title: string;
    vehicleId: number;
    customer: string;
    startDate: string;
    endDate: string;
}

interface MaintenanceRecord {
    id: number;
    vehicleId: number;
    description: string;
    date: string;
    cost: number;
}

const vehicles: Vehicle[] = [
    { id: 1, name: 'Toyota Camry', plate: 'ABC-123', status: 'available' },
    { id: 2, name: 'Honda Civic', plate: 'XYZ-456', status: 'rented' },
    { id: 3, name: 'Nissan Altima', plate: 'DEF-789', status: 'maintenance' },
];

const contracts: Contract[] = [
    { id: 1, title: 'Contract #001', vehicleId: 2, customer: 'Ahmed Ali', startDate: '2024-01-01', endDate: '2024-01-07' },
    { id: 2, title: 'Contract #002', vehicleId: 1, customer: 'Sara Mohammed', startDate: '2024-01-10', endDate: '2024-01-15' },
];

const maintenanceRecords: MaintenanceRecord[] = [
    { id: 1, vehicleId: 3, description: 'Oil change', date: '2024-01-15', cost: 500 },
    { id: 2, vehicleId: 1, description: 'Tire rotation', date: '2024-01-20', cost: 200 },
];

// Routes
app.get('/', (_req, res) => {
    res.json({ message: 'Car Rental Management API' });
});

app.get('/api/vehicles', (_req, res) => {
    res.json(vehicles);
});

app.post('/api/vehicles', (req, res) => {
    const vehicle: Vehicle = { id: vehicles.length + 1, ...req.body };
    vehicles.push(vehicle);
    res.status(201).json(vehicle);
});

app.get('/api/contracts', (_req, res) => {
    res.json(contracts);
});

app.post('/api/contracts', (req, res) => {
    const contract: Contract = { id: contracts.length + 1, ...req.body };
    contracts.push(contract);
    res.status(201).json(contract);
});

app.get('/api/maintenance', (_req, res) => {
    res.json(maintenanceRecords);
});

app.post('/api/maintenance', (req, res) => {
    const record: MaintenanceRecord = { id: maintenanceRecords.length + 1, ...req.body };
    maintenanceRecords.push(record);
    res.status(201).json(record);
});

app.get('/api/analytics', (_req, res) => {
    res.json({
        totalVehicles: vehicles.length,
        availableVehicles: vehicles.filter(v => v.status === 'available').length,
        rentedVehicles: vehicles.filter(v => v.status === 'rented').length,
        maintenanceVehicles: vehicles.filter(v => v.status === 'maintenance').length,
        totalContracts: contracts.length,
        totalMaintenanceCost: maintenanceRecords.reduce((sum, r) => sum + r.cost, 0),
    });
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export { app, server };

