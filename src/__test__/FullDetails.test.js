import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FullDetails from '../components/FullDetails';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      sectionName: 'Mock Section',
      webPublicationDate: '2023-08-05T12:34:56Z',
      webTitle: 'Mock Title',
      pillarName: 'Mock Pillar',
      webUrl: 'https://example.com/mock-news',
    },
  }),
}));

describe('FullDetails Component', () => {
  it('renders details correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <FullDetails />
      </MemoryRouter>,
    );

    const sectionNameElement = getByText(/news section name/i);
    expect(sectionNameElement).toBeInTheDocument();

    const publicationDateElement = getByText(/publication date/i);
    expect(publicationDateElement).toBeInTheDocument();

    const webTitleElement = getByText(/web title/i);
    expect(webTitleElement).toBeInTheDocument();

    const pillarNameElement = getByText(/new pillar name/i);
    expect(pillarNameElement).toBeInTheDocument();

    const readNewsLink = getByText(/read the news/i);
    expect(readNewsLink).toBeInTheDocument();
    expect(readNewsLink).toHaveAttribute('href', 'https://example.com/mock-news');
  });
});
