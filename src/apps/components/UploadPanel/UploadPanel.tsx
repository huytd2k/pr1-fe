import { Button } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import React, { useState } from "react";
import {
    useUploadFileMutation
} from "../../../graphql/graphql";

export interface UploadPanelProps {}

function UploadPanel({}: UploadPanelProps) {
  const [key, setKey] = useState(0);
  const [files, setFiles] = useState<File[]>([]);
  const [uploadMutation, { loading, error, data }] = useUploadFileMutation();
  const handleUpload = () => {
    uploadMutation({
      variables: {
        file: files[0],
      },
    });
    setFiles([]);
    setKey(key+1);
  };
  data && console.log(data);
  error && console.log(error);
  const handleFile = (files: File[]) => setFiles(files);
  return (
    <div>
      <DropzoneArea key={key} filesLimit={1} onChange={handleFile} />
      <Button disabled={!files.length || loading} onClick={handleUpload} variant="contained" color="primary">
        {" "}
        Upload
      </Button>
    </div>
  );
}

export default UploadPanel;
