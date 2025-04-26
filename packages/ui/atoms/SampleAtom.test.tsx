import React from 'react';
import { render, screen } from '@testing-library/react';
import { SampleAtom } from './SampleAtom';

describe('SampleAtom', () => {
  it('renders the label', () => {
    render(<SampleAtom label="Test Atom" />);
    expect(screen.getByText('Test Atom')).toBeInTheDocument();
  });

  it('applies className prop', () => {
    render(<SampleAtom label="Test Atom" className="bg-red-100" />);
    const span = screen.getByText('Test Atom');
    expect(span).toHaveClass('bg-red-100');
  });
});
