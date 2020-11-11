import {
    Button,
  Card,
  CardContent,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import { UploadFile } from "../../../graphql/graphql";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import FileDownload from 'js-file-download'
import Axios from "axios";
export interface FileInfoProps {
  file: UploadFile;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fileLogo: {
      fontSize: theme.spacing(10),
    },
  })
);
function FileInfo({ file }: FileInfoProps) {
  const classes = useStyles();
  const handleDownload = async () => {
    const res = await Axios.get(`http://localhost:3000/file/${file.fileId}`, {
      responseType: "arraybuffer",
    });
    FileDownload(res.data, file.originalName);
  };
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{file.filename}</Typography>
        <InsertDriveFileIcon className={classes.fileLogo} />
        <Typography>Uploaded by: {file.uploadedBy.username}</Typography>
        <Typography>
          Uploaded on: {new Date(file.createdAt).toLocaleDateString()}
        </Typography>
        <Typography>{`Size: ${file.sizeInBytes} bytes `}</Typography>
        <Button onClick={handleDownload}>Download</Button>
      </CardContent>
    </Card>
  );
  return <Card>FileInfo</Card>;
}

export default FileInfo;
