import { render, screen } from '@testing-library/react';

import { TileValue } from '@lib/game/types';

import Content from '../content';

const renderWrapper = ({ value = 1 as TileValue }) =>
  render(<Content value={value} />);

describe('<Content />', () => {
  describe('diamonds', () => {
    it('renders 1 diamond for a 1', () => {
      renderWrapper({ value: 1 });

      expect(screen.getAllByTestId('diamond')).toHaveLength(1);
    });

    it('renders 1 diamond for a 2', () => {
      renderWrapper({ value: 2 });

      expect(screen.getAllByTestId('diamond')).toHaveLength(1);
    });

    it('renders 1 diamond for a 3', () => {
      renderWrapper({ value: 3 });

      expect(screen.getAllByTestId('diamond')).toHaveLength(1);
    });

    it('renders 2 diamonds for a 4', () => {
      renderWrapper({ value: 4 });

      expect(screen.getAllByTestId('diamond')).toHaveLength(2);
    });

    it('renders 2 diamonds for a 5', () => {
      renderWrapper({ value: 5 });

      expect(screen.getAllByTestId('diamond')).toHaveLength(2);
    });

    it('renders 2 diamonds for a 6', () => {
      renderWrapper({ value: 6 });

      expect(screen.getAllByTestId('diamond')).toHaveLength(2);
    });

    it('renders 3 diamonds for a 7', () => {
      renderWrapper({ value: 7 });

      expect(screen.getAllByTestId('diamond')).toHaveLength(3);
    });
  });
});
