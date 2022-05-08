import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders out Main component', () => {
  let selectedGenre = 'death-metal';

  const onClickUpdate = (val: any) => {
    return val;
  };

  render(<Main selectedGenre={selectedGenre} onClickUpdate={onClickUpdate('all')} />);

  const linkElement = screen.getByText(/Genres/i);

  expect(linkElement).toBeInTheDocument();
});
