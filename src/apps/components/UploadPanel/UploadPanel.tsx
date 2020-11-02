import { Button } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import React, { useState } from "react";

export interface UploadPanelProps {}

function UploadPanel({}: UploadPanelProps) {
    const [files, setFiles] = useState<File[]>([]);
    const handleFile = (files : File[]) => setFiles(files);
    return <div>
        <DropzoneArea onChange={handleFile} />
        <Button variant="contained" color="primary"> Upload</Button>
    </div>
}

export default UploadPanel;
