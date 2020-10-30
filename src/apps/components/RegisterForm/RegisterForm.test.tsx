import { render } from '@testing-library/react';
import React from 'react';
import RegisterForm, { RegisterFormProps } from './RegisterForm';

describe('RegisterForm', () => {
    const defaultProps: RegisterFormProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<RegisterForm {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('RegisterForm')).toBeTruthy();
    });
});
