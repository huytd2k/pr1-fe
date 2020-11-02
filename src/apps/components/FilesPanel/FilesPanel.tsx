import { Card } from '@material-ui/core';
import React from 'react';
import FileCard from '../FileCard';
import mockFiles from './mockFiles'
export interface FilesPanelProps {}

function FilesPanel({ }: FilesPanelProps) {
    return <div>
        {
            mockFiles.map( (file) => <FileCard file={file} />)
        }
    </div>
};

export default FilesPanel;
