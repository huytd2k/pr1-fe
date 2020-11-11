import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type User = {
  __typename?: 'User';
  userId: Scalars['Int'];
  username: Scalars['String'];
  files?: Maybe<Array<UploadFile>>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  fileId: Scalars['String'];
  filename: Scalars['String'];
  originalName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  serverLink: Scalars['String'];
  sizeInBytes: Scalars['Int'];
  shortenedLink?: Maybe<Scalars['String']>;
  uploadedUserId: Scalars['Int'];
  uploadedBy: User;
};


export type Query = {
  __typename?: 'Query';
  getUsers: Array<User>;
  me: User;
  findAllFile: Array<UploadFile>;
  findFileById: UploadFile;
};


export type QueryFindFileByIdArgs = {
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: Scalars['String'];
  login: Scalars['String'];
  deleteById: Scalars['Boolean'];
  uploadFile: User;
};


export type MutationRegisterArgs = {
  createUserDto: UserCreateDto;
};


export type MutationLoginArgs = {
  userLogin: UserLoginDto;
};


export type MutationDeleteByIdArgs = {
  id: Scalars['Int'];
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};

export type UserCreateDto = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type UserLoginDto = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'username'>
  ) }
);

export type LoginMutationVariables = Exact<{
  user: UserLoginDto;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'login'>
);

export type RegisterMutationVariables = Exact<{
  user: UserCreateDto;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'register'>
);

export type UploadFileMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type UploadFileMutation = (
  { __typename?: 'Mutation' }
  & { uploadFile: (
    { __typename?: 'User' }
    & Pick<User, 'userId'>
    & { files?: Maybe<Array<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'fileId' | 'filename'>
    )>> }
  ) }
);

export type FilesQueryVariables = Exact<{ [key: string]: never; }>;


export type FilesQuery = (
  { __typename?: 'Query' }
  & { findAllFile: Array<(
    { __typename?: 'UploadFile' }
    & Pick<UploadFile, 'fileId' | 'filename' | 'serverLink' | 'createdAt' | 'shortenedLink' | 'originalName' | 'sizeInBytes' | 'uploadedUserId'>
    & { uploadedBy: (
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'username'>
    ) }
  )> }
);

export type DeleteMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteById'>
);

export type FindFileByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindFileByIdQuery = (
  { __typename?: 'Query' }
  & { findFileById: (
    { __typename?: 'UploadFile' }
    & FileInfoFragment
  ) }
);

export type FileInfoFragment = (
  { __typename?: 'UploadFile' }
  & Pick<UploadFile, 'filename' | 'createdAt' | 'fileId' | 'originalName' | 'serverLink' | 'sizeInBytes' | 'shortenedLink' | 'uploadedUserId'>
  & { uploadedBy: (
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'username'>
  ) }
);

export const FileInfoFragmentDoc = gql`
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
export const MeDocument = gql`
    query me {
  me {
    userId
    username
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const LoginDocument = gql`
    mutation login($user: UserLoginDTO!) {
  login(userLogin: $user)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation register($user: UserCreateDTO!) {
  register(createUserDto: $user)
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UploadFileDocument = gql`
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
export type UploadFileMutationFn = Apollo.MutationFunction<UploadFileMutation, UploadFileMutationVariables>;

/**
 * __useUploadFileMutation__
 *
 * To run a mutation, you first call `useUploadFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFileMutation, { data, loading, error }] = useUploadFileMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadFileMutation(baseOptions?: Apollo.MutationHookOptions<UploadFileMutation, UploadFileMutationVariables>) {
        return Apollo.useMutation<UploadFileMutation, UploadFileMutationVariables>(UploadFileDocument, baseOptions);
      }
export type UploadFileMutationHookResult = ReturnType<typeof useUploadFileMutation>;
export type UploadFileMutationResult = Apollo.MutationResult<UploadFileMutation>;
export type UploadFileMutationOptions = Apollo.BaseMutationOptions<UploadFileMutation, UploadFileMutationVariables>;
export const FilesDocument = gql`
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

/**
 * __useFilesQuery__
 *
 * To run a query within a React component, call `useFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFilesQuery(baseOptions?: Apollo.QueryHookOptions<FilesQuery, FilesQueryVariables>) {
        return Apollo.useQuery<FilesQuery, FilesQueryVariables>(FilesDocument, baseOptions);
      }
export function useFilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilesQuery, FilesQueryVariables>) {
          return Apollo.useLazyQuery<FilesQuery, FilesQueryVariables>(FilesDocument, baseOptions);
        }
export type FilesQueryHookResult = ReturnType<typeof useFilesQuery>;
export type FilesLazyQueryHookResult = ReturnType<typeof useFilesLazyQuery>;
export type FilesQueryResult = Apollo.QueryResult<FilesQuery, FilesQueryVariables>;
export const DeleteDocument = gql`
    mutation delete($id: Int!) {
  deleteById(id: $id)
}
    `;
export type DeleteMutationFn = Apollo.MutationFunction<DeleteMutation, DeleteMutationVariables>;

/**
 * __useDeleteMutation__
 *
 * To run a mutation, you first call `useDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMutation, { data, loading, error }] = useDeleteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMutation, DeleteMutationVariables>) {
        return Apollo.useMutation<DeleteMutation, DeleteMutationVariables>(DeleteDocument, baseOptions);
      }
export type DeleteMutationHookResult = ReturnType<typeof useDeleteMutation>;
export type DeleteMutationResult = Apollo.MutationResult<DeleteMutation>;
export type DeleteMutationOptions = Apollo.BaseMutationOptions<DeleteMutation, DeleteMutationVariables>;
export const FindFileByIdDocument = gql`
    query findFileById($id: Int!) {
  findFileById(id: $id) {
    ...FileInfo
  }
}
    ${FileInfoFragmentDoc}`;

/**
 * __useFindFileByIdQuery__
 *
 * To run a query within a React component, call `useFindFileByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindFileByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindFileByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindFileByIdQuery(baseOptions?: Apollo.QueryHookOptions<FindFileByIdQuery, FindFileByIdQueryVariables>) {
        return Apollo.useQuery<FindFileByIdQuery, FindFileByIdQueryVariables>(FindFileByIdDocument, baseOptions);
      }
export function useFindFileByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindFileByIdQuery, FindFileByIdQueryVariables>) {
          return Apollo.useLazyQuery<FindFileByIdQuery, FindFileByIdQueryVariables>(FindFileByIdDocument, baseOptions);
        }
export type FindFileByIdQueryHookResult = ReturnType<typeof useFindFileByIdQuery>;
export type FindFileByIdLazyQueryHookResult = ReturnType<typeof useFindFileByIdLazyQuery>;
export type FindFileByIdQueryResult = Apollo.QueryResult<FindFileByIdQuery, FindFileByIdQueryVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  User: ResolverTypeWrapper<User>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UploadFile: ResolverTypeWrapper<UploadFile>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  UserCreateDTO: UserCreateDto;
  UserLoginDTO: UserLoginDto;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  User: User;
  Int: Scalars['Int'];
  String: Scalars['String'];
  UploadFile: UploadFile;
  DateTime: Scalars['DateTime'];
  Query: {};
  Mutation: {};
  Boolean: Scalars['Boolean'];
  UserCreateDTO: UserCreateDto;
  UserLoginDTO: UserLoginDto;
  Upload: Scalars['Upload'];
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  files?: Resolver<Maybe<Array<ResolversTypes['UploadFile']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadFile'] = ResolversParentTypes['UploadFile']> = {
  fileId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  serverLink?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sizeInBytes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  shortenedLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uploadedUserId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uploadedBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  findAllFile?: Resolver<Array<ResolversTypes['UploadFile']>, ParentType, ContextType>;
  findFileById?: Resolver<ResolversTypes['UploadFile'], ParentType, ContextType, RequireFields<QueryFindFileByIdArgs, 'id'>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  register?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'createUserDto'>>;
  login?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'userLogin'>>;
  deleteById?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteByIdArgs, 'id'>>;
  uploadFile?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUploadFileArgs, 'file'>>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  User?: UserResolvers<ContextType>;
  UploadFile?: UploadFileResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
