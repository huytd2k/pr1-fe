import { render } from '@testing-library/react';
import React from 'react';
import FrontPage, { FrontPageProps } from './FrontPage';

describe('FrontPage', () => {
    const defaultProps: FrontPageProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<FrontPage {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('FrontPage')).toBeTruthy();
    });
});
