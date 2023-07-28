import { screen, render } from '@testing-library/react';
import App from './App';

describe('App Integration Test', () => {
  test('should render without crashing', () => {
    render(<App />);
    expect(screen.getAllByText(/Recipe List/i).length).toBeGreaterThan(0);
  });

  test('should render navigation links', () => {
    render(<App />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    const categoryLink = screen.getByRole('link', { name: /category/i });
    const foodTypeLink = screen.getByRole('link', { name: /food type/i });

    expect(homeLink).toBeInTheDocument();
    expect(categoryLink).toBeInTheDocument();
    expect(foodTypeLink).toBeInTheDocument();
  });
});
