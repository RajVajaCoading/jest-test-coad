import { logRoles, render, screen } from '@testing-library/react';
import App from './App';

// .test.js, .spec.js, .js(__tests__)

// note:- {exact:false} is use for case sensitive

test('renders learn react link', () => {
  render(<App />);
  logRoles(screen.getByTestId("maindiv"))
  // const buttonele = screen.getByRole("button",{exact:false})
  // for button not show in document ⬇️
  const buttonele = screen.queryByRole("button",{name:"test button",exact:false})
  expect(buttonele).toBeInTheDocument()
});
