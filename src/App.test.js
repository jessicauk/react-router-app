import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import App from './Components/App';

/*it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});*/

test("renders learn react link", () => {
  const { getByText, debug } = render(<App />);
  // debug();
  const linkElement = getByText(/hola/i);
  expect(linkElement).toBeInTheDocument();
})
