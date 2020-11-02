export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
  __typename?: 'User';
  userId: Scalars['Int'];
  username: Scalars['String'];
  files: Array<UploadFile>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  fileId: Scalars['String'];
  filename: Scalars['String'];
  uploadedBy: User;
  createdAt: Scalars['String'];
  serverLink: Scalars['String'];
  shortenedLink: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
  me: User;
  findAllFile: Array<UploadFile>;
};


export type QueryFindAllFileArgs = {
  userId: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: User;
  login: Scalars['String'];
};


export type MutationRegisterArgs = {
  createUserDto: UserCreateDto;
};


export type MutationLoginArgs = {
  userLogin: UserLoginDto;
};

export type UserCreateDto = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type UserLoginDto = {
  username: Scalars['String'];
  password: Scalars['String'];
};
