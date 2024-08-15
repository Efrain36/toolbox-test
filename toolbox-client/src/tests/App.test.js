import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';
import { getFilesData } from '../api/filesApi';

jest.mock('../api/filesApi');

describe('App', () => {
    it('fetches data and updates state', async () => {
        const mockData = [
            {
                file: 'file1.csv',
                lines: [
                    { text: 'testText', number: 1, hex: '0x123' },
                ],
            },

        ];
        getFilesData.mockResolvedValue(mockData);

        let getByText;
        await act(async () => {
            ({ getByText } = render(<App />));
        });

        expect(getByText('React Test App')).toBeInTheDocument();
        expect(getByText('file1.csv')).toBeInTheDocument();
        expect(getByText('testText')).toBeInTheDocument();
        expect(getByText('0x123')).toBeInTheDocument();
    });

    it('updates search input value when typing', () => {
        const { getByPlaceholderText } = render(<App />);
        const searchInput = getByPlaceholderText('Search by file name');
        fireEvent.change(searchInput, { target: { value: 'testInput' } });

        expect(searchInput.value).toBe('testInput');
    });

    it('displays loading spinner when isLoading is true', () => {
        const { getByRole } = render(<App />);
        const spinner = getByRole('status');
        expect(spinner).toBeInTheDocument();
    });
});
