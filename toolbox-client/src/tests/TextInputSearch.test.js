import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { TextInputSearch } from '../components/TextInputSearch/TextInputSearch';

describe('TextInputSearch', () => {
    it('calls onSubmit when the form is submitted', () => {
        const mockOnSubmit = jest.fn();
        const { getByRole } = render(
            <TextInputSearch
                placeholder="Search something"
                value=""
                setValue={() => { }}
                onSubmit={mockOnSubmit}
            />
        );

        const searchButton = getByRole('button', { name: /Search/i });
        fireEvent.click(searchButton);

        expect(mockOnSubmit).toHaveBeenCalled();
    });

    it('updates the input value when typing', () => {
        const mockSetValue = jest.fn();
        const { getByPlaceholderText } = render(
            <TextInputSearch
                placeholder="Search something"
                value=""
                setValue={mockSetValue}
                onSubmit={() => { }}
            />
        );

        const searchInput = getByPlaceholderText('Search something');
        fireEvent.change(searchInput, { target: { value: 'hello' } });

        expect(mockSetValue).toHaveBeenCalledWith('hello');
    });

    it('renders the correct placeholder text', () => {
        const { getByPlaceholderText } = render(
            <TextInputSearch
                placeholder="Search something"
                value=""
                setValue={() => { }}
                onSubmit={() => { }}
            />
        );

        const searchInput = getByPlaceholderText('Search something');
        expect(searchInput).toBeInTheDocument();
    });
});
