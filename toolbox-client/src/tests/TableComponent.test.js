import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { TableComponent } from '../components/Table/index';


describe('TableComponent', () => {
    it('displays loading spinner when isLoading is true', () => {
        render(<TableComponent data={[]} isLoading={true} />);
        const spinner = screen.getByRole('status');
        expect(spinner).toBeInTheDocument();
    });

    it('renders table rows with data', () => {
        const mockData = [
            {
                file: 'file1.csv',
                lines: [
                    { text: 'testText', number: 1, hex: '0x123' },
                ],
            },

        ];

        const { getByText } = render(<TableComponent data={mockData} isLoading={false} />);
        ``
        expect(getByText('file1.csv')).toBeInTheDocument();
        expect(getByText('testText')).toBeInTheDocument();
        expect(getByText('0x123')).toBeInTheDocument();
    });

    it('displays "No se encontraron registros..." message when data is empty', () => {
        const { getByText } = render(<TableComponent data={[]} isLoading={false} />);
        expect(getByText('No se encontraron registros...')).toBeInTheDocument();
    });
});