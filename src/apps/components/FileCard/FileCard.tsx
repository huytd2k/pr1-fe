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
  TableCell,
  TableRow,
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
import { IconButton } from "@material-ui/core";
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import AttachFileIcon from '@material-ui/icons/AttachFile';
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
    <TableRow>
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
      <TableCell>
        <div style={{display: "flex", flexDirection: 'row'}}>
        <AttachFileIcon style={{width: 20, marginRight: 10}} />
          <Link style={{ textDecoration: 'none', color: 'black' }} to={`/file/${file.fileId}`}>
      
            {file.originalName}
          </Link>
        </div>
      </TableCell>

      <TableCell> {file.sizeInBytes} bytes</TableCell>
      <TableCell> {new Date(file.createdAt).toLocaleDateString()} </TableCell>
      <TableCell>
        <IconButton onClick={handleDownload}><GetAppIcon /></IconButton>
        <IconButton onClick={handleDelete}><DeleteIcon /></IconButton>
        <IconButton onClick={handleClickShare}><ShareIcon /></IconButton>
      </TableCell>
    </TableRow>
    // <div className={classes.root}>
    //   <Card id={file.fileId}>
    //     <CardContent>
    //       </Link>
    //       <Typography variant="body2" component="p">
    //         Size: {file.sizeInBytes} Bytes
    //       </Typography>
    //     </CardContent>
    //   </Card>
    // </div>
  );
}

export default FileCard;
