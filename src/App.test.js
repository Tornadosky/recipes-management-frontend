import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './pages/HomePage';
import Footer from './components/Footer/Footer';

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('should render the home page without crashing', () => {
    const homeComponent = screen.getByTestId('home');
    expect(homeComponent).toBeInTheDocument();
  });

  it('should render the TextImage component with the correct title', () => {
    expect(screen.getByText('Experience Cooking like no other')).toBeInTheDocument();
  });

  it('should render the category title correctly', () => {
    const categoryTitle = screen.getByText((_, node) => {
      const hasText = (node) => node.textContent === 'Our Popular Categories';
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every((child) => !hasText(child));

      return nodeHasText && childrenDontHaveText;
    });

    expect(categoryTitle).toBeInTheDocument();
    const categoryHighlight = within(categoryTitle).getByText('Categories');
    expect(categoryHighlight).toHaveStyle('color: red');
  });
});

test('should render the Footer component', () => {
  render(<Footer />);
  const footerElement = screen.getByText('Recipe list');
  expect(footerElement).toBeInTheDocument();

});

