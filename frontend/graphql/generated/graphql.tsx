import gql from "graphql-tag"
import * as ApolloReactCommon from "@apollo/client"
import * as ApolloReactHooks from "@apollo/client"
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type Queries = {
  __typename?: "Queries"
  supplier?: Maybe<Supplier>
  user?: Maybe<User>
  suppliers: Array<Supplier>
  project?: Maybe<Project>
  projects: Array<Project>
  categories: Array<Category>
}

export type QueriesSupplierArgs = {
  id: Scalars["Int"]
}

export type QueriesSuppliersArgs = {
  location?: Maybe<LocationInput>
}

export type QueriesProjectArgs = {
  id: Scalars["Int"]
}

export type Supplier = {
  __typename?: "Supplier"
  id: Scalars["Int"]
  name: Scalars["String"]
  location: Location
}

export type Location = {
  __typename?: "Location"
  id: Scalars["Int"]
  city: Scalars["String"]
  street: Scalars["String"]
  postalCode: Scalars["String"]
  country: Scalars["String"]
  lat: Scalars["Float"]
  lng: Scalars["Float"]
}

export type User = {
  __typename?: "User"
  id: Scalars["Int"]
  email: Scalars["String"]
  projects: Array<Project>
}

export type Project = {
  __typename?: "Project"
  id: Scalars["Int"]
  name: Scalars["String"]
  description: Scalars["String"]
  allowedArea: Scalars["Int"]
  location: Location
  category: Category
  acceptedOffer?: Maybe<Offer>
  offers: Array<Offer>
  expectedPrice: Scalars["Int"]
  reviews: Array<Review>
}

export type ProjectOffersArgs = {
  limit?: Maybe<Scalars["Int"]>
}

export type Category = {
  __typename?: "Category"
  id: Scalars["Int"]
  name: Scalars["String"]
  description: Scalars["String"]
}

export type Offer = {
  __typename?: "Offer"
  id: Scalars["Int"]
  projectId: Scalars["Int"]
  price: Scalars["Int"]
  completionDate?: Maybe<Scalars["DateTime"]>
}

export type Review = {
  __typename?: "Review"
  id: Scalars["Int"]
  positive: Scalars["Boolean"]
  userId: Scalars["Int"]
  content: Scalars["String"]
}

export type LocationInput = {
  city: Scalars["String"]
  street: Scalars["String"]
  postalCode: Scalars["String"]
  country: Scalars["String"]
  area: Scalars["Int"]
}

export type Mutations = {
  __typename?: "Mutations"
  createProject: CreateProjectResult
  addOffer: AddOfferResult
  addReview: AddReviewResult
}

export type MutationsCreateProjectArgs = {
  data: ProjectDataInput
}

export type MutationsAddOfferArgs = {
  projectId: Scalars["Int"]
  price: Scalars["Int"]
  completionDate?: Maybe<Scalars["DateTime"]>
}

export type MutationsAddReviewArgs = {
  projectId: Scalars["Int"]
  content: Scalars["String"]
  positive: Scalars["Boolean"]
}

export type ProjectDataInput = {
  name: Scalars["String"]
  description: Scalars["String"]
  location: LocationInput
  categoryId: Scalars["Int"]
  expectedPrice: Scalars["Int"]
}

export enum CreateProjectResult {
  Success = "SUCCESS",
  Error = "ERROR",
  UnavailableSupplier = "UNAVAILABLE_SUPPLIER",
  Unauthorized = "UNAUTHORIZED",
}

export enum AddOfferResult {
  Success = "SUCCESS",
  Error = "ERROR",
  HasAcceptedOffer = "HAS_ACCEPTED_OFFER",
  Unauthorized = "UNAUTHORIZED",
}

export enum AddReviewResult {
  Success = "SUCCESS",
  Error = "ERROR",
  Duplicate = "DUPLICATE",
  Unauthorized = "UNAUTHORIZED",
}

export type AddOfferMutationVariables = Exact<{
  price: Scalars["Int"]
  projectId: Scalars["Int"]
  completionDate: Scalars["DateTime"]
}>

export type AddOfferMutation = { __typename?: "Mutations" } & Pick<
  Mutations,
  "addOffer"
>

export type AddReviewMutationVariables = Exact<{
  positive: Scalars["Boolean"]
  projectId: Scalars["Int"]
  content: Scalars["String"]
}>

export type AddReviewMutation = { __typename?: "Mutations" } & Pick<
  Mutations,
  "addReview"
>

export type CreateProjectMutationVariables = Exact<{
  projectData: ProjectDataInput
}>

export type CreateProjectMutation = { __typename?: "Mutations" } & Pick<
  Mutations,
  "createProject"
>

export type CategoriesQueryVariables = Exact<{ [key: string]: never }>

export type CategoriesQuery = { __typename?: "Queries" } & {
  categories: Array<
    { __typename?: "Category" } & Pick<Category, "id" | "name" | "description">
  >
}

export type ProjectQueryVariables = Exact<{
  id: Scalars["Int"]
}>

export type ProjectQuery = { __typename?: "Queries" } & {
  project?: Maybe<
    { __typename?: "Project" } & Pick<
      Project,
      "id" | "name" | "description" | "allowedArea" | "expectedPrice"
    > & {
        location: { __typename?: "Location" } & Pick<
          Location,
          "id" | "city" | "street" | "postalCode" | "country" | "lat" | "lng"
        >
        category: { __typename?: "Category" } & Pick<
          Category,
          "id" | "name" | "description"
        >
        acceptedOffer?: Maybe<
          { __typename?: "Offer" } & Pick<
            Offer,
            "id" | "projectId" | "price" | "completionDate"
          >
        >
        offers: Array<
          { __typename?: "Offer" } & Pick<
            Offer,
            "id" | "projectId" | "price" | "completionDate"
          >
        >
        reviews: Array<
          { __typename?: "Review" } & Pick<
            Review,
            "id" | "positive" | "userId" | "content"
          >
        >
      }
  >
}

export type ProjectsQueryVariables = Exact<{ [key: string]: never }>

export type ProjectsQuery = { __typename?: "Queries" } & {
  projects: Array<
    { __typename?: "Project" } & Pick<
      Project,
      "id" | "name" | "description" | "allowedArea" | "expectedPrice"
    > & {
        location: { __typename?: "Location" } & Pick<
          Location,
          "id" | "city" | "street" | "postalCode" | "country" | "lat" | "lng"
        >
        category: { __typename?: "Category" } & Pick<
          Category,
          "id" | "name" | "description"
        >
        acceptedOffer?: Maybe<
          { __typename?: "Offer" } & Pick<
            Offer,
            "id" | "projectId" | "price" | "completionDate"
          >
        >
        offers: Array<
          { __typename?: "Offer" } & Pick<
            Offer,
            "id" | "projectId" | "price" | "completionDate"
          >
        >
        reviews: Array<
          { __typename?: "Review" } & Pick<
            Review,
            "id" | "positive" | "userId" | "content"
          >
        >
      }
  >
}

export type SupplierQueryVariables = Exact<{
  id: Scalars["Int"]
}>

export type SupplierQuery = { __typename?: "Queries" } & {
  supplier?: Maybe<
    { __typename?: "Supplier" } & Pick<Supplier, "id" | "name"> & {
        location: { __typename?: "Location" } & Pick<
          Location,
          "id" | "city" | "street" | "postalCode" | "country" | "lat" | "lng"
        >
      }
  >
}

export type SuppliersQueryVariables = Exact<{
  location: LocationInput
}>

export type SuppliersQuery = { __typename?: "Queries" } & {
  suppliers: Array<
    { __typename?: "Supplier" } & Pick<Supplier, "id" | "name"> & {
        location: { __typename?: "Location" } & Pick<
          Location,
          "id" | "city" | "street" | "postalCode" | "country" | "lat" | "lng"
        >
      }
  >
}

export type UserQueryVariables = Exact<{ [key: string]: never }>

export type UserQuery = { __typename?: "Queries" } & {
  user?: Maybe<
    { __typename?: "User" } & Pick<User, "id" | "email"> & {
        projects: Array<
          { __typename?: "Project" } & Pick<
            Project,
            "id" | "name" | "description" | "allowedArea" | "expectedPrice"
          > & {
              location: { __typename?: "Location" } & Pick<
                Location,
                | "id"
                | "city"
                | "street"
                | "postalCode"
                | "country"
                | "lat"
                | "lng"
              >
              category: { __typename?: "Category" } & Pick<
                Category,
                "id" | "name" | "description"
              >
              offers: Array<
                { __typename?: "Offer" } & Pick<
                  Offer,
                  "id" | "projectId" | "price" | "completionDate"
                >
              >
              reviews: Array<
                { __typename?: "Review" } & Pick<Review, "id" | "positive">
              >
            }
        >
      }
  >
}

export const AddOfferDocument = gql`
  mutation addOffer(
    $price: Int!
    $projectId: Int!
    $completionDate: DateTime!
  ) {
    addOffer(
      price: $price
      projectId: $projectId
      completionDate: $completionDate
    )
  }
`
export type AddOfferMutationFn = ApolloReactCommon.MutationFunction<
  AddOfferMutation,
  AddOfferMutationVariables
>

/**
 * __useAddOfferMutation__
 *
 * To run a mutation, you first call `useAddOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOfferMutation, { data, loading, error }] = useAddOfferMutation({
 *   variables: {
 *      price: // value for 'price'
 *      projectId: // value for 'projectId'
 *      completionDate: // value for 'completionDate'
 *   },
 * });
 */
export function useAddOfferMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddOfferMutation,
    AddOfferMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    AddOfferMutation,
    AddOfferMutationVariables
  >(AddOfferDocument, baseOptions)
}
export type AddOfferMutationHookResult = ReturnType<typeof useAddOfferMutation>
export type AddOfferMutationResult = ApolloReactCommon.MutationResult<AddOfferMutation>
export type AddOfferMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddOfferMutation,
  AddOfferMutationVariables
>
export const AddReviewDocument = gql`
  mutation addReview($positive: Boolean!, $projectId: Int!, $content: String!) {
    addReview(positive: $positive, projectId: $projectId, content: $content)
  }
`
export type AddReviewMutationFn = ApolloReactCommon.MutationFunction<
  AddReviewMutation,
  AddReviewMutationVariables
>

/**
 * __useAddReviewMutation__
 *
 * To run a mutation, you first call `useAddReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReviewMutation, { data, loading, error }] = useAddReviewMutation({
 *   variables: {
 *      positive: // value for 'positive'
 *      projectId: // value for 'projectId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useAddReviewMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddReviewMutation,
    AddReviewMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    AddReviewMutation,
    AddReviewMutationVariables
  >(AddReviewDocument, baseOptions)
}
export type AddReviewMutationHookResult = ReturnType<
  typeof useAddReviewMutation
>
export type AddReviewMutationResult = ApolloReactCommon.MutationResult<AddReviewMutation>
export type AddReviewMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddReviewMutation,
  AddReviewMutationVariables
>
export const CreateProjectDocument = gql`
  mutation createProject($projectData: ProjectDataInput!) {
    createProject(data: $projectData)
  }
`
export type CreateProjectMutationFn = ApolloReactCommon.MutationFunction<
  CreateProjectMutation,
  CreateProjectMutationVariables
>

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      projectData: // value for 'projectData'
 *   },
 * });
 */
export function useCreateProjectMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >(CreateProjectDocument, baseOptions)
}
export type CreateProjectMutationHookResult = ReturnType<
  typeof useCreateProjectMutation
>
export type CreateProjectMutationResult = ApolloReactCommon.MutationResult<CreateProjectMutation>
export type CreateProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateProjectMutation,
  CreateProjectMutationVariables
>
export const CategoriesDocument = gql`
  query categories {
    categories {
      id
      name
      description
    }
  }
`

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    CategoriesQuery,
    CategoriesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<CategoriesQuery, CategoriesQueryVariables>(
    CategoriesDocument,
    baseOptions
  )
}
export function useCategoriesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CategoriesQuery,
    CategoriesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    CategoriesQuery,
    CategoriesQueryVariables
  >(CategoriesDocument, baseOptions)
}
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>
export type CategoriesLazyQueryHookResult = ReturnType<
  typeof useCategoriesLazyQuery
>
export type CategoriesQueryResult = ApolloReactCommon.QueryResult<
  CategoriesQuery,
  CategoriesQueryVariables
>
export const ProjectDocument = gql`
  query project($id: Int!) {
    project(id: $id) {
      id
      name
      description
      allowedArea
      location {
        id
        city
        street
        postalCode
        country
        lat
        lng
      }
      category {
        id
        name
        description
      }
      acceptedOffer {
        id
        projectId
        price
        completionDate
      }
      offers {
        id
        projectId
        price
        completionDate
      }
      expectedPrice
      reviews {
        id
        positive
        userId
        content
      }
    }
  }
`

/**
 * __useProjectQuery__
 *
 * To run a query within a React component, call `useProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProjectQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ProjectQuery,
    ProjectQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<ProjectQuery, ProjectQueryVariables>(
    ProjectDocument,
    baseOptions
  )
}
export function useProjectLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ProjectQuery,
    ProjectQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<ProjectQuery, ProjectQueryVariables>(
    ProjectDocument,
    baseOptions
  )
}
export type ProjectQueryHookResult = ReturnType<typeof useProjectQuery>
export type ProjectLazyQueryHookResult = ReturnType<typeof useProjectLazyQuery>
export type ProjectQueryResult = ApolloReactCommon.QueryResult<
  ProjectQuery,
  ProjectQueryVariables
>
export const ProjectsDocument = gql`
  query projects {
    projects {
      id
      name
      description
      allowedArea
      location {
        id
        city
        street
        postalCode
        country
        lat
        lng
      }
      category {
        id
        name
        description
      }
      acceptedOffer {
        id
        projectId
        price
        completionDate
      }
      offers {
        id
        projectId
        price
        completionDate
      }
      expectedPrice
      reviews {
        id
        positive
        userId
        content
      }
    }
  }
`

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ProjectsQuery,
    ProjectsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<ProjectsQuery, ProjectsQueryVariables>(
    ProjectsDocument,
    baseOptions
  )
}
export function useProjectsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ProjectsQuery,
    ProjectsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(
    ProjectsDocument,
    baseOptions
  )
}
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>
export type ProjectsLazyQueryHookResult = ReturnType<
  typeof useProjectsLazyQuery
>
export type ProjectsQueryResult = ApolloReactCommon.QueryResult<
  ProjectsQuery,
  ProjectsQueryVariables
>
export const SupplierDocument = gql`
  query supplier($id: Int!) {
    supplier(id: $id) {
      id
      name
      location {
        id
        city
        street
        postalCode
        country
        lat
        lng
      }
    }
  }
`

/**
 * __useSupplierQuery__
 *
 * To run a query within a React component, call `useSupplierQuery` and pass it any options that fit your needs.
 * When your component renders, `useSupplierQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSupplierQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSupplierQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    SupplierQuery,
    SupplierQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<SupplierQuery, SupplierQueryVariables>(
    SupplierDocument,
    baseOptions
  )
}
export function useSupplierLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    SupplierQuery,
    SupplierQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<SupplierQuery, SupplierQueryVariables>(
    SupplierDocument,
    baseOptions
  )
}
export type SupplierQueryHookResult = ReturnType<typeof useSupplierQuery>
export type SupplierLazyQueryHookResult = ReturnType<
  typeof useSupplierLazyQuery
>
export type SupplierQueryResult = ApolloReactCommon.QueryResult<
  SupplierQuery,
  SupplierQueryVariables
>
export const SuppliersDocument = gql`
  query suppliers($location: LocationInput!) {
    suppliers(location: $location) {
      id
      name
      location {
        id
        city
        street
        postalCode
        country
        lat
        lng
      }
    }
  }
`

/**
 * __useSuppliersQuery__
 *
 * To run a query within a React component, call `useSuppliersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSuppliersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSuppliersQuery({
 *   variables: {
 *      location: // value for 'location'
 *   },
 * });
 */
export function useSuppliersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    SuppliersQuery,
    SuppliersQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<SuppliersQuery, SuppliersQueryVariables>(
    SuppliersDocument,
    baseOptions
  )
}
export function useSuppliersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    SuppliersQuery,
    SuppliersQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<SuppliersQuery, SuppliersQueryVariables>(
    SuppliersDocument,
    baseOptions
  )
}
export type SuppliersQueryHookResult = ReturnType<typeof useSuppliersQuery>
export type SuppliersLazyQueryHookResult = ReturnType<
  typeof useSuppliersLazyQuery
>
export type SuppliersQueryResult = ApolloReactCommon.QueryResult<
  SuppliersQuery,
  SuppliersQueryVariables
>
export const UserDocument = gql`
  query user {
    user {
      id
      email
      projects {
        id
        name
        description
        allowedArea
        location {
          id
          city
          street
          postalCode
          country
          lat
          lng
        }
        category {
          id
          name
          description
        }
        offers {
          id
          projectId
          price
          completionDate
        }
        expectedPrice
        reviews {
          id
          positive
        }
      }
    }
  }
`

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>
) {
  return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    baseOptions
  )
}
export function useUserLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    UserQuery,
    UserQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    baseOptions
  )
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>
export type UserQueryResult = ApolloReactCommon.QueryResult<
  UserQuery,
  UserQueryVariables
>
export const namedOperations = {
  Query: {
    categories: "categories",
    project: "project",
    projects: "projects",
    supplier: "supplier",
    suppliers: "suppliers",
    user: "user",
  },
  Mutation: {
    addOffer: "addOffer",
    addReview: "addReview",
    createProject: "createProject",
  },
}

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
}
export default result
