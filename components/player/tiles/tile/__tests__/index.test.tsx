import userEvent from '@testing-library/user-event';
import { act, render, screen, waitFor } from '@testing-library/react';

import { TileValue } from '@lib/game/types';

import Tile from '..';

const renderWrapper = ({ value = 1 as TileValue, flipped = false } = {}) =>
  render(<Tile value={value} color="red" isInitiallyFlipped={flipped} />);

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

  it('can be flipped initially', () => {
    renderWrapper({ value: 2, flipped: true });

    expect(screen.getAllByTestId('diamond')).toHaveLength(4);
  });
});
