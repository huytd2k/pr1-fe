import { render } from '@testing-library/react';
import React from 'react';
import UploadPanel, { UploadPanelProps } from './UploadPanel';

describe('UploadPanel', () => {
    const defaultProps: UploadPanelProps = {};

    it('should render', () => {
        const props = { ...defaultProps };
        const { asFragment, queryByText } = render(<UploadPanel {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('UploadPanel')).toBeTruthy();
    });
});
