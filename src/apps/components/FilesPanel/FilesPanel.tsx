import { Box, Breadcrumbs, Button, Link, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Theme, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useFilesQuery } from '../../../graphql/graphql';
import FileCard from '../FileCard';
export interface FilesPanelProps { }

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(3),
    },
    preTable: {
        marginBottom: theme.spacing(5),
        display: 'flex',
    }
}));
function FilesPanel({ }: FilesPanelProps) {
    const classes = useStyles();
    const history = useHistory();
    const { loading, data, error, refetch } = useFilesQuery();
    useEffect(() => {
        refetch()
    }, []);
    const handleGoToDashboard = () => {
        history.push('/dashboard/upload')
    }
    { loading ?? <p>Loading...</p> }
    data && console.log(data);

    error && console.log(error);
    return <div className={classes.root}>
        <div className={classes.preTable}>
            <Breadcrumbs>
                <Link color="inherit" href="/getting-started/installation/" >
                    Dashboard
            </Link>
                <Typography color="textPrimary">Your files</Typography>
            </Breadcrumbs>
            <Button variant='contained' color='primary' style={{marginLeft: 'auto'}} onClick={handleGoToDashboard}>
                Upload file
            </Button>
        </div>
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
                        {data.findAllFile.map((file) => <FileCard refetchCallback={refetch} file={file} />)}
                    </TableBody>
                </Table>
            </Box>
        }
    </div>
};

export default FilesPanel;
