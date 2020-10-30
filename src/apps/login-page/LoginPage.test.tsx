import { render } from '@testing-library/react';
import React from 'react';
import LoginPage, { LoginPageProps } from './LoginPage';

describe('LoginPage', () => {
    const defaultProps: LoginPageProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<LoginPage {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('LoginPage')).toBeTruthy();
    });
});
