import classes from "*.module.css";
import {
  Card,
  CardContent,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import { UploadFile } from "../../../generated/graphql";

export interface FileCardProps {
    file: UploadFile;
}

const useStyles = makeStyles((theme: Theme) => createStyles({}));
function FileCard({file}: FileCardProps) {
  const classes = useStyles();
  return (
    <Card id={file.fileId}>
      <CardContent>
        <Typography variant="h5" component="h2">
            {file.filename}
        </Typography>
        <Typography variant="body2" component="p">
            Some description
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FileCard;
