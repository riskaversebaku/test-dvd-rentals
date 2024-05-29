import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RentalDetailsCard } from '../DetailsCard';
import {RentalStatus} from '../../types/RentalStatus';

const mockRental = {
    id: '1',
    customer: {
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1990-01-01',
        emailAddress: 'john.doe@example.com',
    },
    rentedAt: '2024-05-29T14:30:00Z',
    status: RentalStatus.RENTED,
    dvd: {
        title: 'Inception',
        genre: 'Sci-Fi',
        cast: 'Leonardo DiCaprio, Joseph Gordon-Levitt',
        director: 'Christopher Nolan',
        notes: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
    },
} as any;

const mockOnClose = jest.fn();
const mockOnReturn = jest.fn();

describe('RentalDetailsCard', () => {
    test('renders rental details correctly', () => {
        render(
            <RentalDetailsCard
                rental={mockRental}
                onClose={mockOnClose}
                onReturn={mockOnReturn}
                isLoadingID=""
            />
        );

        expect(screen.getByText('Rental Details')).toBeInTheDocument();
        expect(screen.getByText('John')).toBeInTheDocument();
        expect(screen.getByText('Doe')).toBeInTheDocument();
        expect(screen.getByText('34')).toBeInTheDocument();
        expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
        expect(screen.getByText('Status')).toBeInTheDocument();
        expect(screen.getByText(RentalStatus.RENTED)).toBeInTheDocument();
        expect(screen.getByText('Inception')).toBeInTheDocument();
        expect(screen.getByText('Sci-Fi')).toBeInTheDocument();
        expect(screen.getByText('Leonardo DiCaprio, Joseph Gordon-Levitt')).toBeInTheDocument();
        expect(screen.getByText('Christopher Nolan')).toBeInTheDocument();
        expect(screen.getByText('A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.')).toBeInTheDocument();
    });

    test('calls onClose when the Close button is clicked', () => {
        render(
            <RentalDetailsCard
                rental={mockRental}
                onClose={mockOnClose}
                onReturn={mockOnReturn}
                isLoadingID=""
            />
        );

        fireEvent.click(screen.getByText('Close'));
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    test('calls onReturn when the Return DVD button is clicked', () => {
        render(
            <RentalDetailsCard
                rental={mockRental}
                onClose={mockOnClose}
                onReturn={mockOnReturn}
                isLoadingID=""
            />
        );

        fireEvent.click(screen.getByText('Return DVD'));
        expect(mockOnReturn).toHaveBeenCalledTimes(1);
        expect(mockOnReturn).toHaveBeenCalledWith('1');
    });

    test('does not render Return DVD button if the rental status is RETURNED', () => {
        const returnedRental = { ...mockRental, status: RentalStatus.RETURNED };

        render(
            <RentalDetailsCard
                rental={returnedRental}
                onClose={mockOnClose}
                onReturn={mockOnReturn}
                isLoadingID=""
            />
        );

        expect(screen.queryByText('Return DVD')).toBeNull();
    });
});
