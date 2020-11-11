import { render } from '@testing-library/react';
import React from 'react';
import AppLayout, { AppLayoutProps } from './AppLayout';

describe('AppLayout', () => {
    const defaultProps: AppLayoutProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<AppLayout {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('AppLayout')).toBeTruthy();
    });
});
