import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { NavbarComponent } from '../components/Navbar/Navbar';

describe('NavbarComponent', () => {
    it('renders the title correctly', () => {
        const title = 'test title';
        const { getByText } = render(<NavbarComponent title={title} />);
        const titleElement = getByText(title);
        expect(titleElement).toBeInTheDocument();
    });
});
