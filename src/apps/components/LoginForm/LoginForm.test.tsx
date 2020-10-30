import { render } from '@testing-library/react';
import React from 'react';
import LoginForm, { LoginFormProps } from './LoginForm';

describe('LoginForm', () => {
    const defaultProps: LoginFormProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<LoginForm {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('LoginForm')).toBeTruthy();
    });
});
