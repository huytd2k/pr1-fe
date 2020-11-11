import { render } from '@testing-library/react';
import React from 'react';
import FilePage, { FilePageProps } from './FilePage';

describe('FilePage', () => {
    const defaultProps: FilePageProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<FilePage {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('FilePage')).toBeTruthy();
    });
});
