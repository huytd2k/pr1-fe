import { render } from '@testing-library/react';
import React from 'react';
import RegisterPage, { RegisterPageProps } from './RegisterPage';

describe('RegisterPage', () => {
    const defaultProps: RegisterPageProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<RegisterPage {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('RegisterPage')).toBeTruthy();
    });
});
