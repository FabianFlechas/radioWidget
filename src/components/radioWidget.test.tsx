import * as React from 'react';
import { render, RenderResult, fireEvent, screen } from '@testing-library/react';
import RadioWidget from "./radioWidget";


let documentBody: RenderResult;

describe('<RadioWidget />', () => {

  beforeEach(() => {
    documentBody = render(<RadioWidget />);
  });
  
  
  it('shows initial messages', () => {
    const welcome = documentBody.getByText('STATIONS');
    expect(welcome).toBeInTheDocument();
  });
  
  it('shows radio when is clicked', () => {
    const lista = screen.getAllByTitle('Rax');
    const radio = screen.getAllByAltText('cover')
    fireEvent.click(lista[0]);

    expect(radio[0]).toBeInTheDocument();

  });
});