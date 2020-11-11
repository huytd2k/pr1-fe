import { render } from '@testing-library/react';
import React from 'react';
import Alert, { AlertProps } from './Alert';

describe('Alert', () => {
    const defaultProps: AlertProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<Alert {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Alert')).toBeTruthy();
    });
});
