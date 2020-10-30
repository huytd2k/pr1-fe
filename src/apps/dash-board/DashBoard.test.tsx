import { render } from '@testing-library/react';
import React from 'react';
import DashBoard, { DashBoardProps } from './DashBoard';

describe('DashBoard', () => {
    const defaultProps: DashBoardProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<DashBoard {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('DashBoard')).toBeTruthy();
    });
});
