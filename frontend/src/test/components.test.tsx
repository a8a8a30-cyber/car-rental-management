import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Vehicles from '../pages/Vehicles';
import Contracts from '../pages/Contracts';
import Maintenance from '../pages/Maintenance';
import Analytics from '../pages/Analytics';

vi.mock('../services/api', () => ({
    getVehicles: vi.fn().mockResolvedValue([
        { id: 1, name: 'Toyota Camry', plate: 'ABC-123', status: 'available' },
        { id: 2, name: 'Honda Civic', plate: 'XYZ-456', status: 'rented' },
    ]),
    getContracts: vi.fn().mockResolvedValue([
        { id: 1, title: 'Contract #001', customer: 'Ahmed Ali' },
    ]),
    getMaintenanceRecords: vi.fn().mockResolvedValue([
        { id: 1, description: 'Oil change', date: '2024-01-15', cost: 500 },
    ]),
    getAnalyticsData: vi.fn().mockResolvedValue({
        totalVehicles: 3,
        availableVehicles: 1,
        rentedVehicles: 1,
        maintenanceVehicles: 1,
        totalContracts: 2,
        totalMaintenanceCost: 700,
    }),
}));

function createWrapper() {
    const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: false } },
    });
    const Wrapper = ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>{children}</MemoryRouter>
        </QueryClientProvider>
    );
    return Wrapper;
}

describe('Dashboard', () => {
    it('shows loading state initially', () => {
        const Wrapper = createWrapper();
        render(<Dashboard />, { wrapper: Wrapper });
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('shows total vehicle count after loading', async () => {
        const Wrapper = createWrapper();
        render(<Dashboard />, { wrapper: Wrapper });
        await waitFor(() => {
            expect(screen.getByText('Total Vehicles: 2')).toBeInTheDocument();
        });
    });

    it('renders Dashboard heading', async () => {
        const Wrapper = createWrapper();
        render(<Dashboard />, { wrapper: Wrapper });
        await waitFor(() => {
            expect(screen.getByText('Dashboard')).toBeInTheDocument();
        });
    });
});

describe('Vehicles', () => {
    it('shows vehicle names after loading', async () => {
        const Wrapper = createWrapper();
        render(<Vehicles />, { wrapper: Wrapper });
        await waitFor(() => {
            expect(screen.getByText('Toyota Camry')).toBeInTheDocument();
            expect(screen.getByText('Honda Civic')).toBeInTheDocument();
        });
    });

    it('renders Vehicles Management heading', async () => {
        const Wrapper = createWrapper();
        render(<Vehicles />, { wrapper: Wrapper });
        await waitFor(() => {
            expect(screen.getByText('Vehicles Management')).toBeInTheDocument();
        });
    });
});

describe('Contracts', () => {
    it('shows contract titles after loading', async () => {
        const Wrapper = createWrapper();
        render(<Contracts />, { wrapper: Wrapper });
        await waitFor(() => {
            expect(screen.getByText('Contract #001')).toBeInTheDocument();
        });
    });

    it('renders Contracts Management heading', async () => {
        const Wrapper = createWrapper();
        render(<Contracts />, { wrapper: Wrapper });
        await waitFor(() => {
            expect(screen.getByText('Contracts Management')).toBeInTheDocument();
        });
    });
});

describe('Maintenance', () => {
    it('shows maintenance descriptions after loading', async () => {
        const Wrapper = createWrapper();
        render(<Maintenance />, { wrapper: Wrapper });
        await waitFor(() => {
            expect(screen.getByText('Oil change')).toBeInTheDocument();
        });
    });

    it('renders Maintenance Tracking heading', async () => {
        const Wrapper = createWrapper();
        render(<Maintenance />, { wrapper: Wrapper });
        await waitFor(() => {
            expect(screen.getByText('Maintenance Tracking')).toBeInTheDocument();
        });
    });
});

describe('Analytics', () => {
    it('renders Analytics and Reports heading', async () => {
        const Wrapper = createWrapper();
        render(<Analytics />, { wrapper: Wrapper });
        await waitFor(() => {
            expect(screen.getByText('Analytics and Reports')).toBeInTheDocument();
        });
    });

    it('shows analytics data after loading', async () => {
        const Wrapper = createWrapper();
        render(<Analytics />, { wrapper: Wrapper });
        await waitFor(() => {
            expect(screen.getByText(/totalVehicles/)).toBeInTheDocument();
        });
    });
});
