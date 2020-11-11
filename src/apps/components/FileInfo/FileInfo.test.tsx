import { render } from '@testing-library/react';
import React from 'react';
import FileInfo, { FileInfoProps } from './FileInfo';

describe('FileInfo', () => {
    const defaultProps: FileInfoProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<FileInfo {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('FileInfo')).toBeTruthy();
    });
});
