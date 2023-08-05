import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';
import '@testing-library/jest-dom/extend-expect';

describe('Navigation', () => {
  it('renders navigation bar with correct elements', () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );

    const homeLink = getByText('Top News');
    const backButton = getByTestId('back-button');
    const voiceIcon = getByTestId('voice-icon');
    const gearIcon = getByTestId('gear-icon');

    expect(homeLink).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(voiceIcon).toBeInTheDocument();
    expect(gearIcon).toBeInTheDocument();
  });
});
