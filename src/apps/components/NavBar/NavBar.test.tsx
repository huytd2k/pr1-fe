import { render } from '@testing-library/react';
import React from 'react';
import NavBar, { NavBarProps } from './NavBar';

describe('NavBar', () => {
    const defaultProps: NavBarProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<NavBar {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('NavBar')).toBeTruthy();
    });
});
