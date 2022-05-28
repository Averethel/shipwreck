import userEvent from '@testing-library/user-event';
import { act, render, screen, waitFor } from '@testing-library/react';

import { TileValue } from '@lib/game/types';

import Tile from '..';

const renderWrapper = ({ value = 1 as TileValue } = {}) =>
  render(<Tile value={value} color="red" />);

describe('<Tile />', () => {
  it('flips', () => {
    const user = userEvent.setup();
    renderWrapper({ value: 2 });

    act(() => {
      user.click(screen.getByText(2));
    });

    return waitFor(() => {
      expect(screen.getAllByTestId('diamond')).toHaveLength(4);
    });
  });
});
