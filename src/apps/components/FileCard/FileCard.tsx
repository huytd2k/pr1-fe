import classes from "*.module.css";
import {
  Button,
  Card,
  CardContent,
  createStyles,
  Dialog,
  List,
  ListItem,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { UploadFile, useDeleteMutation } from "../../../graphql/graphql";
import FileDownload from "js-file-download";
import { BitlyClient } from "bitly";
import { Link } from "react-router-dom";
const bitly = new BitlyClient("de0241b463e646fd27f92153ba0dc7e640cefe99", {});
export interface FileCardProps {
  file: UploadFile;
  refetchCallback: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(1),
    },
    linkField: {
      marginLeft: theme.spacing(1),
    },
  })
);
function FileCard({ file, refetchCallback }: FileCardProps) {
  const [shortenLink, setShortenLink] = useState("");
  const [loadingSLink, setLoadingSlink] = useState(false);
  const [loadedSLink, setLoadedSLink] = useState(false);
  const [open, setOpen] = useState(false);
  const [deleteMutation, { loading, error, data }] = useDeleteMutation();
  const classes = useStyles();
  const handleDownload = async () => {
    const res = await Axios.get(`http://localhost:3000/file/${file.fileId}`, {
      responseType: "arraybuffer",
    });
    FileDownload(res.data, file.originalName);
  };
  const handleDelete = async () => {
    await deleteMutation({ variables: { id: parseInt(file.fileId) } });
    await refetchCallback();
  };
  const handleClickShare = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleGenerateLink = async () => {
    try {
      setLoadedSLink(true);
      bitly
        .shorten(`http://hust.share/file/${file.fileId}`)
        .then((result) => {
          setShortenLink(result.link);
          setLoadedSLink(true);
        });
      setLoadedSLink(true);
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className={classes.root}>
      <Card id={file.fileId}>
        <Dialog onClose={handleCloseDialog} open={open}>
          <List>
            <ListItem>
              Copy this link and share : {"   "}
              <TextField
                className={classes.linkField}
                value={`hust.share/file/${file.fileId}`}
              />
            </ListItem>
            <ListItem>
              Or generate a shortened link
              {loadedSLink ? (
                <TextField className={classes.linkField} value={shortenLink} />
              ) : (
                <Button onClick={handleGenerateLink}> Generate</Button>
              )}
            </ListItem>
          </List>
        </Dialog>
        <CardContent>
          <Link style={{textDecoration: 'none'}} to={`/file/${file.fileId}`}>
            <Typography variant="h5" component="h2">
              {file.originalName}
            </Typography>
          </Link>
          <Typography variant="body2" component="p">
            Size: {file.sizeInBytes} Bytes
          </Typography>
          <Button onClick={handleDownload}>Download</Button>
          <Button onClick={handleDelete}>Delete</Button>
          <Button onClick={handleClickShare}>Share</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default FileCard;
