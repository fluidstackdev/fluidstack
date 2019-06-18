import gql from 'graphql-tag'
import * as React from 'react'
import * as ReactApollo from 'react-apollo'
export type Maybe<T> = T | null
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type IAttribute = {
  __typename?: 'Attribute'
  id: Scalars['ID']
  key: Scalars['String']
  products?: Maybe<Array<IProduct>>
  value: Scalars['String']
}

export type IAttributeProductsArgs = {
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IAttributeCreateManyWithoutAttributesInput = {
  create?: Maybe<Array<IAttributeCreateWithoutProductsInput>>
  connect?: Maybe<Array<IAttributeWhereUniqueInput>>
}

export type IAttributeCreateWithoutProductsInput = {
  id?: Maybe<Scalars['ID']>
  key: Scalars['String']
  value: Scalars['String']
}

export type IAttributePayload = {
  __typename?: 'AttributePayload'
  name: Scalars['String']
  values: Array<IAttributeValue>
}

export type IAttributeValue = {
  __typename?: 'AttributeValue'
  id: Scalars['ID']
  value: Scalars['String']
}

export type IAttributeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type IBrand = {
  __typename?: 'Brand'
  id: Scalars['ID']
  name: Scalars['String']
  products?: Maybe<Array<IProduct>>
}

export type IBrandProductsArgs = {
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IBrandCreateOneWithoutBrandInput = {
  create?: Maybe<IBrandCreateWithoutProductsInput>
  connect?: Maybe<IBrandWhereUniqueInput>
}

export type IBrandCreateWithoutProductsInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
}

export type IBrandWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type ICollection = {
  __typename?: 'Collection'
  id: Scalars['ID']
  name: Scalars['String']
  products: Array<IProduct>
  options: Array<IOption>
  brands: Array<IBrand>
  attributes: Array<IAttributePayload>
}

export type ICollectionProductsArgs = {
  optionsValuesIds?: Maybe<Array<Scalars['ID']>>
  brandsIds?: Maybe<Array<Scalars['ID']>>
  attributesIds?: Maybe<Array<Scalars['ID']>>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type ICollectionCreateManyWithoutCollectionsInput = {
  create?: Maybe<Array<ICollectionCreateWithoutProductsInput>>
  connect?: Maybe<Array<ICollectionWhereUniqueInput>>
}

export type ICollectionCreateWithoutProductsInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  rules?: Maybe<ICollectionRuleSetCreateOneWithoutRulesInput>
}

export type ICollectionInput = {
  name: Scalars['String']
  ruleSet?: Maybe<ICollectionRuleSetInput>
  productsIds?: Maybe<Array<Scalars['String']>>
}

export type ICollectionRuleCreateManyWithoutRulesInput = {
  create?: Maybe<Array<ICollectionRuleCreateWithoutCollectionRuleSetInput>>
  connect?: Maybe<Array<ICollectionRuleWhereUniqueInput>>
}

export type ICollectionRuleCreateWithoutCollectionRuleSetInput = {
  id?: Maybe<Scalars['ID']>
  field: ICollectionRuleField
  relation: ICollectionRuleRelation
  value: Scalars['String']
}

export enum ICollectionRuleField {
  Type = 'TYPE',
  Title = 'TITLE',
  Price = 'PRICE',
}

export enum ICollectionRuleRelation {
  Contains = 'CONTAINS',
  EndsWith = 'ENDS_WITH',
  Equals = 'EQUALS',
  GreaterThan = 'GREATER_THAN',
  LessThan = 'LESS_THAN',
  NotContains = 'NOT_CONTAINS',
  NotEquals = 'NOT_EQUALS',
  StartsWith = 'STARTS_WITH',
}

export type ICollectionRuleSetCreateOneWithoutRulesInput = {
  create?: Maybe<ICollectionRuleSetCreateWithoutCollectionInput>
  connect?: Maybe<ICollectionRuleSetWhereUniqueInput>
}

export type ICollectionRuleSetCreateWithoutCollectionInput = {
  id?: Maybe<Scalars['ID']>
  appliesDisjunctively: Scalars['Boolean']
  rules?: Maybe<ICollectionRuleCreateManyWithoutRulesInput>
}

export type ICollectionRuleSetInput = {
  applyDisjunctively: Scalars['Boolean']
  rules: Array<IRulesInput>
}

export type ICollectionRuleSetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type ICollectionRuleWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type ICollectionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type ICreateProductInput = {
  name: Scalars['String']
  slug: Scalars['String']
  brand: IUniqueInput
  attributesIds: Array<IUniqueInput>
  variants: Array<ICreateVariantInput>
}

export type ICreateVariantInput = {
  availableForSale: Scalars['Boolean']
  price: Scalars['Int']
  optionsValueIds: Array<IUniqueInput>
}

export type IImage = {
  __typename?: 'Image'
  id: Scalars['ID']
  url: Scalars['String']
}

export type IImageCreateManyWithoutImagesInput = {
  create?: Maybe<Array<IImageCreateWithoutVariantInput>>
  connect?: Maybe<Array<IImageWhereUniqueInput>>
}

export type IImageCreateOneWithoutThumbnailInput = {
  create?: Maybe<IImageCreateWithoutProductInput>
  connect?: Maybe<IImageWhereUniqueInput>
}

export type IImageCreateWithoutProductInput = {
  id?: Maybe<Scalars['ID']>
  url: Scalars['String']
  variant?: Maybe<IVariantCreateOneWithoutVariantInput>
}

export type IImageCreateWithoutVariantInput = {
  id?: Maybe<Scalars['ID']>
  url: Scalars['String']
  product?: Maybe<IProductCreateOneWithoutProductInput>
}

export type IImageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type IMutation = {
  __typename?: 'Mutation'
  createOneProduct: IProduct
  productCreate: IProduct
  productDelete: IProduct
  productUpdate: IProduct
  collectionCreate: ICollection
  collectionAddProducts: ICollection
  collectionRemoveProducts: ICollection
  collectionUpdate: ICollection
}

export type IMutationCreateOneProductArgs = {
  data: IProductCreateInput
}

export type IMutationProductCreateArgs = {
  data: ICreateProductInput
}

export type IMutationProductDeleteArgs = {
  productId: Scalars['ID']
}

export type IMutationProductUpdateArgs = {
  data: IUpdateProductInput
}

export type IMutationCollectionCreateArgs = {
  collection: ICollectionInput
}

export type IMutationCollectionAddProductsArgs = {
  productIds: Array<Scalars['ID']>
  collectionId: Scalars['ID']
}

export type IMutationCollectionRemoveProductsArgs = {
  productIds: Array<Scalars['ID']>
  collectionId: Scalars['ID']
}

export type IMutationCollectionUpdateArgs = {
  id: Scalars['ID']
  collection: ICollectionInput
}

export type IOption = {
  __typename?: 'Option'
  id: Scalars['ID']
  name: Scalars['String']
  values?: Maybe<Array<IOptionValue>>
  isColor?: Maybe<Scalars['Boolean']>
}

export type IOptionValuesArgs = {
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IOptionCreateOneWithoutOptionInput = {
  create?: Maybe<IOptionCreateWithoutValuesInput>
  connect?: Maybe<IOptionWhereUniqueInput>
}

export type IOptionCreateWithoutValuesInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  isColor?: Maybe<Scalars['Boolean']>
}

export type IOptionValue = {
  __typename?: 'OptionValue'
  id: Scalars['ID']
  name: Scalars['String']
  option: IOption
  variant?: Maybe<IVariant>
}

export type IOptionValueCreateManyWithoutOptionValuesInput = {
  create?: Maybe<Array<IOptionValueCreateWithoutVariantInput>>
  connect?: Maybe<Array<IOptionValueWhereUniqueInput>>
}

export type IOptionValueCreateWithoutVariantInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  option: IOptionCreateOneWithoutOptionInput
}

export type IOptionValueWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type IOptionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type IProduct = {
  __typename?: 'Product'
  id: Scalars['ID']
  brand: IBrand
  thumbnail?: Maybe<IImage>
  name: Scalars['String']
  variants?: Maybe<Array<IVariant>>
  slug: Scalars['String']
  attributes?: Maybe<Array<IAttribute>>
}

export type IProductVariantsArgs = {
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IProductAttributesArgs = {
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IProductCreateInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  slug: Scalars['String']
  description: Scalars['String']
  brand: IBrandCreateOneWithoutBrandInput
  thumbnail?: Maybe<IImageCreateOneWithoutThumbnailInput>
  type?: Maybe<IProductTypeCreateOneWithoutTypeInput>
  variants?: Maybe<IVariantCreateManyWithoutVariantsInput>
  collections?: Maybe<ICollectionCreateManyWithoutCollectionsInput>
  attributes?: Maybe<IAttributeCreateManyWithoutAttributesInput>
}

export type IProductCreateOneWithoutProductInput = {
  create?: Maybe<IProductCreateWithoutVariantsInput>
  connect?: Maybe<IProductWhereUniqueInput>
}

export type IProductCreateWithoutVariantsInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  slug: Scalars['String']
  description: Scalars['String']
  brand: IBrandCreateOneWithoutBrandInput
  thumbnail?: Maybe<IImageCreateOneWithoutThumbnailInput>
  type?: Maybe<IProductTypeCreateOneWithoutTypeInput>
  collections?: Maybe<ICollectionCreateManyWithoutCollectionsInput>
  attributes?: Maybe<IAttributeCreateManyWithoutAttributesInput>
}

export type IProductTypeCreateOneWithoutTypeInput = {
  create?: Maybe<IProductTypeCreateWithoutProductInput>
  connect?: Maybe<IProductTypeWhereUniqueInput>
}

export type IProductTypeCreateWithoutProductInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
}

export type IProductTypeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type IProductWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
}

export type IQuery = {
  __typename?: 'Query'
  products?: Maybe<Array<IProduct>>
  product?: Maybe<IProduct>
  options?: Maybe<Array<IOption>>
  brands?: Maybe<Array<IBrand>>
  collections?: Maybe<Array<ICollection>>
  collection: ICollection
}

export type IQueryProductsArgs = {
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryProductArgs = {
  where: IProductWhereUniqueInput
}

export type IQueryOptionsArgs = {
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryBrandsArgs = {
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryCollectionsArgs = {
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryCollectionArgs = {
  collectionId: Scalars['ID']
}

export type IRulesInput = {
  field: ICollectionRuleField
  relation: ICollectionRuleRelation
  value: Scalars['String']
}

export type IUniqueInput = {
  id: Scalars['ID']
}

export type IUpdateProductInput = {
  id: Scalars['ID']
  name: Scalars['String']
  brand: IUniqueInput
  attributesIds: Array<IUniqueInput>
  variants: Array<IUpdateVariantInput>
}

export type IUpdateVariantInput = {
  id: Scalars['ID']
  availableForSale: Scalars['Boolean']
  price: Scalars['Int']
  optionsValueIds: Array<IUniqueInput>
}

export type IVariant = {
  __typename?: 'Variant'
  id: Scalars['ID']
  availableForSale?: Maybe<Scalars['Boolean']>
  images?: Maybe<Array<IImage>>
  optionValues?: Maybe<Array<IOptionValue>>
  price: Scalars['Int']
  product?: Maybe<IProduct>
  sku?: Maybe<Scalars['String']>
}

export type IVariantImagesArgs = {
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IVariantOptionValuesArgs = {
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IVariantCreateManyWithoutVariantsInput = {
  create?: Maybe<Array<IVariantCreateWithoutProductInput>>
  connect?: Maybe<Array<IVariantWhereUniqueInput>>
}

export type IVariantCreateOneWithoutVariantInput = {
  create?: Maybe<IVariantCreateWithoutImagesInput>
  connect?: Maybe<IVariantWhereUniqueInput>
}

export type IVariantCreateWithoutImagesInput = {
  id?: Maybe<Scalars['ID']>
  price: Scalars['Int']
  availableForSale?: Maybe<Scalars['Boolean']>
  sku?: Maybe<Scalars['String']>
  optionValues?: Maybe<IOptionValueCreateManyWithoutOptionValuesInput>
  product?: Maybe<IProductCreateOneWithoutProductInput>
}

export type IVariantCreateWithoutProductInput = {
  id?: Maybe<Scalars['ID']>
  price: Scalars['Int']
  availableForSale?: Maybe<Scalars['Boolean']>
  sku?: Maybe<Scalars['String']>
  optionValues?: Maybe<IOptionValueCreateManyWithoutOptionValuesInput>
  images?: Maybe<IImageCreateManyWithoutImagesInput>
}

export type IVariantWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}
export type ICollectionQueryVariables = {
  collectionId: Scalars['ID']
  brandsIds?: Maybe<Array<Scalars['ID']>>
  optionsValuesIds?: Maybe<Array<Scalars['ID']>>
  attributesIds?: Maybe<Array<Scalars['ID']>>
}

export type ICollectionQuery = { __typename?: 'Query' } & {
  collection: { __typename?: 'Collection' } & Pick<
    ICollection,
    'id' | 'name'
  > & {
      products: Array<{ __typename?: 'Product' } & ICollectionProductFragment>
      attributes: Array<
        { __typename?: 'AttributePayload' } & Pick<
          IAttributePayload,
          'name'
        > & {
            values: Array<
              { __typename?: 'AttributeValue' } & Pick<
                IAttributeValue,
                'id' | 'value'
              >
            >
          }
      >
      options: Array<
        { __typename?: 'Option' } & Pick<IOption, 'id' | 'name'> & {
            values: Maybe<
              Array<
                { __typename?: 'OptionValue' } & Pick<
                  IOptionValue,
                  'id' | 'name'
                >
              >
            >
          }
      >
      brands: Array<{ __typename?: 'Brand' } & Pick<IBrand, 'id' | 'name'>>
    }
}

export type ICollectionProductFragment = { __typename?: 'Product' } & Pick<
  IProduct,
  'id' | 'name' | 'slug'
> & {
    thumbnail: Maybe<{ __typename?: 'Image' } & Pick<IImage, 'url'>>
    brand: { __typename?: 'Brand' } & Pick<IBrand, 'id' | 'name'>
    variants: Maybe<
      Array<
        { __typename?: 'Variant' } & Pick<IVariant, 'id' | 'price'> & {
            images: Maybe<
              Array<{ __typename?: 'Image' } & Pick<IImage, 'id' | 'url'>>
            >
            optionValues: Maybe<
              Array<
                { __typename?: 'OptionValue' } & Pick<
                  IOptionValue,
                  'id' | 'name'
                > & {
                    option: { __typename?: 'Option' } & Pick<
                      IOption,
                      'id' | 'name' | 'isColor'
                    >
                  }
              >
            >
          }
      >
    >
  }

export type IProductQueryVariables = {
  slug: Scalars['String']
}

export type IProductQuery = { __typename?: 'Query' } & {
  product: Maybe<{ __typename?: 'Product' } & IProductDetailFragment>
}

export type IProductDetailFragment = { __typename?: 'Product' } & Pick<
  IProduct,
  'id' | 'name' | 'slug'
> & {
    thumbnail: Maybe<{ __typename?: 'Image' } & Pick<IImage, 'url'>>
    brand: { __typename?: 'Brand' } & Pick<IBrand, 'id' | 'name'>
    attributes: Maybe<
      Array<
        { __typename?: 'Attribute' } & Pick<IAttribute, 'id' | 'key' | 'value'>
      >
    >
    variants: Maybe<
      Array<
        { __typename?: 'Variant' } & Pick<IVariant, 'id' | 'price'> & {
            images: Maybe<
              Array<{ __typename?: 'Image' } & Pick<IImage, 'id' | 'url'>>
            >
            optionValues: Maybe<
              Array<
                { __typename?: 'OptionValue' } & Pick<
                  IOptionValue,
                  'id' | 'name'
                > & {
                    option: { __typename?: 'Option' } & Pick<
                      IOption,
                      'id' | 'name' | 'isColor'
                    >
                  }
              >
            >
          }
      >
    >
  }

export type ICollectionsQueryVariables = {}

export type ICollectionsQuery = { __typename?: 'Query' } & {
  collections: Maybe<
    Array<{ __typename?: 'Collection' } & Pick<ICollection, 'id' | 'name'>>
  >
}
export const CollectionProductFragmentDoc = gql`
  fragment CollectionProduct on Product {
    id
    name
    slug
    thumbnail {
      url
    }
    brand {
      id
      name
    }
    variants {
      id
      price
      images {
        id
        url
      }
      optionValues {
        id
        name
        option {
          id
          name
          isColor
        }
      }
    }
  }
`
export const ProductDetailFragmentDoc = gql`
  fragment ProductDetail on Product {
    id
    name
    slug
    thumbnail {
      url
    }
    brand {
      id
      name
    }
    attributes {
      id
      key
      value
    }
    variants {
      id
      price
      images {
        id
        url
      }
      optionValues {
        id
        name
        option {
          id
          name
          isColor
        }
      }
    }
  }
`
export const CollectionDocument = gql`
  query collection(
    $collectionId: ID!
    $brandsIds: [ID!]
    $optionsValuesIds: [ID!]
    $attributesIds: [ID!]
  ) {
    collection(collectionId: $collectionId) {
      id
      name
      products(
        brandsIds: $brandsIds
        optionsValuesIds: $optionsValuesIds
        attributesIds: $attributesIds
      ) {
        ...CollectionProduct
      }
      attributes {
        name
        values {
          id
          value
        }
      }
      options {
        id
        name
        values {
          id
          name
        }
      }
      brands {
        id
        name
      }
    }
  }
  ${CollectionProductFragmentDoc}
`
export type CollectionComponentProps = Omit<
  ReactApollo.QueryProps<ICollectionQuery, ICollectionQueryVariables>,
  'query'
> &
  ({ variables: ICollectionQueryVariables; skip?: false } | { skip: true })

export const CollectionComponent = (props: CollectionComponentProps) => (
  <ReactApollo.Query<ICollectionQuery, ICollectionQueryVariables>
    query={CollectionDocument}
    {...props}
  />
)

export type ICollectionProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<ICollectionQuery, ICollectionQueryVariables>
> &
  TChildProps
export function withCollection<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    ICollectionQuery,
    ICollectionQueryVariables,
    ICollectionProps<TChildProps>
  >,
) {
  return ReactApollo.withQuery<
    TProps,
    ICollectionQuery,
    ICollectionQueryVariables,
    ICollectionProps<TChildProps>
  >(CollectionDocument, {
    alias: 'withCollection',
    ...operationOptions,
  })
}
export const ProductDocument = gql`
  query product($slug: String!) {
    product(where: { slug: $slug }) {
      ...ProductDetail
    }
  }
  ${ProductDetailFragmentDoc}
`
export type ProductComponentProps = Omit<
  ReactApollo.QueryProps<IProductQuery, IProductQueryVariables>,
  'query'
> &
  ({ variables: IProductQueryVariables; skip?: false } | { skip: true })

export const ProductComponent = (props: ProductComponentProps) => (
  <ReactApollo.Query<IProductQuery, IProductQueryVariables>
    query={ProductDocument}
    {...props}
  />
)

export type IProductProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<IProductQuery, IProductQueryVariables>
> &
  TChildProps
export function withProduct<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    IProductQuery,
    IProductQueryVariables,
    IProductProps<TChildProps>
  >,
) {
  return ReactApollo.withQuery<
    TProps,
    IProductQuery,
    IProductQueryVariables,
    IProductProps<TChildProps>
  >(ProductDocument, {
    alias: 'withProduct',
    ...operationOptions,
  })
}
export const CollectionsDocument = gql`
  query collections {
    collections {
      id
      name
    }
  }
`
export type CollectionsComponentProps = Omit<
  ReactApollo.QueryProps<ICollectionsQuery, ICollectionsQueryVariables>,
  'query'
>

export const CollectionsComponent = (props: CollectionsComponentProps) => (
  <ReactApollo.Query<ICollectionsQuery, ICollectionsQueryVariables>
    query={CollectionsDocument}
    {...props}
  />
)

export type ICollectionsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<ICollectionsQuery, ICollectionsQueryVariables>
> &
  TChildProps
export function withCollections<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    ICollectionsQuery,
    ICollectionsQueryVariables,
    ICollectionsProps<TChildProps>
  >,
) {
  return ReactApollo.withQuery<
    TProps,
    ICollectionsQuery,
    ICollectionsQueryVariables,
    ICollectionsProps<TChildProps>
  >(CollectionsDocument, {
    alias: 'withCollections',
    ...operationOptions,
  })
}
