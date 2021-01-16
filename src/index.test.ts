import { getByText } from '@testing-library/dom';
import { render } from './index';

it('renders form to container', () => {
  const container = document.createElement('div');
  render(container);

  getByText(container, 'Easy Form');
});
