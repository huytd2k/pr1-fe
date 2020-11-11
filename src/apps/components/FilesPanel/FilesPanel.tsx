import { makeStyles, Theme } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useFilesQuery } from '../../../graphql/graphql';
import FileCard from '../FileCard';
export interface FilesPanelProps {}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(3),
    },
}));
function FilesPanel({ }: FilesPanelProps) {
    const classes = useStyles();
    const {loading, data, error, refetch} = useFilesQuery();
    useEffect(() => {
        refetch()    
    }, []);
    {loading ?? <p>Loading...</p>}
    data && console.log(data);

    error && console.log(error);
    return <div className={classes.root}>
    {loading ?? <p>Loading...</p>}
        { data &&
            data.findAllFile.map( (file) => <FileCard refetchCallback={refetch} file={file} />)
        }
    </div>
};

export default FilesPanel;
