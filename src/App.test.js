import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/toast exercise/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders title', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Liked Form Submissions/i);
  expect(title).toBeInTheDocument();
})

test('renders table', () => {
  const { getByText } = render(<App />);
  const table = getByText(/Form ID/i);
  expect(table).toBeInTheDocument();
})
