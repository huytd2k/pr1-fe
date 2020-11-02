import { render } from '@testing-library/react';
import React from 'react';
import FilesPanel, { FilesPanelProps } from './FilesPanel';

describe('FilesPanel', () => {
    const defaultProps: FilesPanelProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<FilesPanel {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('FilesPanel')).toBeTruthy();
    });
});
