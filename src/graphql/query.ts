import { gql } from "@apollo/client";

const ME_QUERY = gql`
  query me {
    me {
      userId
      username
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation login($user: UserLoginDTO!) {
    login(userLogin: $user)
  }
`;

const REGISTER_MUTATION = gql`
  mutation register($user: UserCreateDTO!) {
    register(createUserDto: $user)
  }
`;

const UPLOAD_MUTATION = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file) {
      userId
      files {
        fileId
        filename
      }
    }
  }
`;

const FILES_QUERY = gql`
  query files {
    findAllFile {
      fileId
      filename
      serverLink
      createdAt
      shortenedLink
      originalName
      sizeInBytes
      uploadedBy {
          userId
          username
      }
      uploadedUserId
    }
  }
`;

const DELETE_MUTATION = gql`
  mutation delete($id: Int!) {
    deleteById(id: $id)
  }
`;

const FIND_FILE_BY_ID = gql`
  query findFileById($id: Int!) {
    findFileById(id: $id) {
        ...FileInfo
    }
  }
`;

const FILE_ALL_FIELDS_FRAGMENT = gql`
  fragment FileInfo on UploadFile {
    filename
    createdAt
    fileId
    originalName
    serverLink
    sizeInBytes
    shortenedLink
    uploadedBy {
        userId
        username
    }
    uploadedUserId
  }
`;
