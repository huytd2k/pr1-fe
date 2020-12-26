import { Box, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Theme } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useFilesQuery } from '../../../graphql/graphql';
import FileCard from '../FileCard';
export interface FilesPanelProps { }

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(3),
    },
}));
function FilesPanel({ }: FilesPanelProps) {
    const classes = useStyles();
    const { loading, data, error, refetch } = useFilesQuery();
    useEffect(() => {
        refetch()
    }, []);
    { loading ?? <p>Loading...</p> }
    data && console.log(data);

    error && console.log(error);
    return <div className={classes.root}>
        {loading ?? <p>Loading...</p>}
        {data &&
            <Box boxShadow={3}>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>File name</TableCell>
                            <TableCell>Size</TableCell>
                            <TableCell>Uploaded At</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.findAllFile.map((file) => <TableRow>
                            <TableCell> {file.originalName} </TableCell>
                            <TableCell> {file.sizeInBytes} </TableCell>
                            <TableCell> {file.createdAt} </TableCell>
                            <TableCell> {file.filename} </TableCell>
                        </TableRow>)}
                    </TableBody>
                </Table>
            </Box>
        }
    </div>
};

export default FilesPanel;
