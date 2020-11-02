import { render } from '@testing-library/react';
import React from 'react';
import FileCard, { FileCardProps } from './FileCard';

describe('FileCard', () => {
    const defaultProps: FileCardProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<FileCard {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('FileCard')).toBeTruthy();
    });
});
