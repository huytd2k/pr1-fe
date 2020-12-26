import {
  Box,
  Button,
  Card,
  CardContent,
  createStyles,
  Divider,
  List,
  ListItem,
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
    <Card >
      <CardContent >
        <Typography variant="h4">{file.originalName}</Typography>
        <InsertDriveFileIcon style={{marginTop: 20}} className={classes.fileLogo} />
        <List>
          <ListItem>
            <Typography style={{margin: 'auto'}} align="center">Uploaded by: {file.uploadedBy.username}</Typography>
          </ListItem>
          <Divider />
          <ListItem>
            <Typography style={{margin: 'auto'}} align="center">
              Uploaded on: {new Date(file.createdAt).toLocaleDateString()}
            </Typography>
          </ListItem>
          <Divider />
          <ListItem>
            <Typography style={{margin: 'auto'}} align="center">{`Size: ${file.sizeInBytes} bytes `}</Typography>
          </ListItem>
          <Divider />
          <ListItem>
            <Button fullWidth variant='contained' color='primary' onClick={handleDownload}>Download</Button>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
  return <Card>FileInfo</Card>;
}

export default FileInfo;
