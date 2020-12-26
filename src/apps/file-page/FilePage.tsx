import { Box, Container } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import { AppParams } from "../../common/types/params";
import { useFindFileByIdQuery } from "../../graphql/graphql";
import FileInfo from "../components/FileInfo";
import AppLayout from "../layout/AppLayout";

interface FilePageProps { }

function FilePage({ }: FilePageProps) {
  const id = parseInt(useParams<AppParams>().id);
  const { loading, error, data } = useFindFileByIdQuery({
    variables: { id: id },
  });
  data && console.log(data);
  error && console.log(error);

  return (
    <AppLayout >
        <Container maxWidth='xs'>
          <Box style={{ marginTop: 50 ,textAlign: 'center' }}>
            {data && data.findFileById && <FileInfo file={data.findFileById} />}
          </Box>
        </Container>
    </AppLayout>
  );
}

export default FilePage;
