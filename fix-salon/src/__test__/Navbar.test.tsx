import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';

describe('Navbar component', () => {
  test('renders the Navbar component with logo, links, and icons', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Check if the logo is present
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();

    // Check for navigation links
    expect(screen.getByText('O nama')).toBeInTheDocument();
    expect(screen.getByText('Usluge')).toBeInTheDocument();
    expect(screen.getByText('Kontakt')).toBeInTheDocument();
  });
});
