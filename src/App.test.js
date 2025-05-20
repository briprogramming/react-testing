/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

/**
 * Verify something should render
 */
test('App should render', () => {
  render(<App />);

  expect(screen.getByText('Welcome, party people!')).toBeInTheDocument();
});

test('Button should render', () => {
  render(<App />
  );
  const button= screen.getByRole('button', {name:/theme:/i});
  expect(button).toBeInTheDocument();
});

// /**
//  * Verify clicking button should change theme
//  * hint: use fireEvent.click(element) to trigger a click event on an element
//  */
test('theme button should update button text', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /theme:/i });
  const initialText = button.textContent;
  fireEvent.click(button);
  expect(button.textContent).not.toBe(initialText);
});

// // BONUS
// // hint: there is a `.toHaveStyle` method.
// // e.g.: expect(element).toHaveStyle('color: #FFF');

test('theme button should toggle styles', () => {
  render(<App />);
  const themeButton = screen.getByRole('button', {name: /theme:/i });
   fireEvent.click(themeButton);
   expect(themeButton).toHaveStyle('color: ButtonText');
});


// /**
//  * Verify clicking button should toggle hidden content
//  *
//  * hint: you can check if something does not exist by using .not
//  * e.g. expect(element).not.toBeInTheDocument()
//  *
//  * hint: use `queryByText` instead of `getByText` to check if something is _not_ rendered
//  * (getByText will throw an error if it is not rendered)
//  */
   test('hidden button should toggle hidden content', () => {
    render(<App />);
    const hiddenButton = screen.getByRole('button', {name: /theme:/i });
    fireEvent.click(hiddenButton);

   expect(hiddenButton).toBeInTheDocument();
                });

it('should check for the presence of a specific element, like the paragraph containing the text Click the button to toggle the theme', ()=> {
  render(<App />);
  const element = screen.getByText(/Click the button to toggle the theme/i);

  expect(element).toBeInTheDocument();
});


it('should check for the class name .container on the surrounding div', () => {
  const { container } = render(<App />);
  

  expect(container.firstChild).toHaveClass('container');

});

// /**
//  * Want more? Try these:
//  *   - check for the presence of a specific element, like the paragraph containing the text "Click the button to toggle the theme"
//  *   - check the for the class name .container on the surrounding div
//  *   - after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"
//  */
