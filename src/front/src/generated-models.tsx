export type Maybe<T> = T | null

export interface ProductWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in: string[]

  id_not_in: string[]

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  name?: Maybe<string>

  name_not?: Maybe<string>

  name_in: string[]

  name_not_in: string[]

  name_lt?: Maybe<string>

  name_lte?: Maybe<string>

  name_gt?: Maybe<string>

  name_gte?: Maybe<string>

  name_contains?: Maybe<string>

  name_not_contains?: Maybe<string>

  name_starts_with?: Maybe<string>

  name_not_starts_with?: Maybe<string>

  name_ends_with?: Maybe<string>

  name_not_ends_with?: Maybe<string>

  brand?: Maybe<BrandWhereInput>

  image?: Maybe<ImageWhereInput>

  type?: Maybe<ProductTypeWhereInput>

  variants_every?: Maybe<VariantWhereInput>

  variants_some?: Maybe<VariantWhereInput>

  variants_none?: Maybe<VariantWhereInput>

  collections_every?: Maybe<CollectionWhereInput>

  collections_some?: Maybe<CollectionWhereInput>

  collections_none?: Maybe<CollectionWhereInput>

  attributes_every?: Maybe<AttributeWhereInput>

  attributes_some?: Maybe<AttributeWhereInput>

  attributes_none?: Maybe<AttributeWhereInput>

  AND: ProductWhereInput[]

  OR: ProductWhereInput[]

  NOT: ProductWhereInput[]
}

export interface BrandWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in: string[]

  id_not_in: string[]

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  name?: Maybe<string>

  name_not?: Maybe<string>

  name_in: string[]

  name_not_in: string[]

  name_lt?: Maybe<string>

  name_lte?: Maybe<string>

  name_gt?: Maybe<string>

  name_gte?: Maybe<string>

  name_contains?: Maybe<string>

  name_not_contains?: Maybe<string>

  name_starts_with?: Maybe<string>

  name_not_starts_with?: Maybe<string>

  name_ends_with?: Maybe<string>

  name_not_ends_with?: Maybe<string>

  products_every?: Maybe<ProductWhereInput>

  products_some?: Maybe<ProductWhereInput>

  products_none?: Maybe<ProductWhereInput>

  AND: BrandWhereInput[]

  OR: BrandWhereInput[]

  NOT: BrandWhereInput[]
}

export interface ImageWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in: string[]

  id_not_in: string[]

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  url?: Maybe<string>

  url_not?: Maybe<string>

  url_in: string[]

  url_not_in: string[]

  url_lt?: Maybe<string>

  url_lte?: Maybe<string>

  url_gt?: Maybe<string>

  url_gte?: Maybe<string>

  url_contains?: Maybe<string>

  url_not_contains?: Maybe<string>

  url_starts_with?: Maybe<string>

  url_not_starts_with?: Maybe<string>

  url_ends_with?: Maybe<string>

  url_not_ends_with?: Maybe<string>

  AND: ImageWhereInput[]

  OR: ImageWhereInput[]

  NOT: ImageWhereInput[]
}

export interface ProductTypeWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in: string[]

  id_not_in: string[]

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  name?: Maybe<string>

  name_not?: Maybe<string>

  name_in: string[]

  name_not_in: string[]

  name_lt?: Maybe<string>

  name_lte?: Maybe<string>

  name_gt?: Maybe<string>

  name_gte?: Maybe<string>

  name_contains?: Maybe<string>

  name_not_contains?: Maybe<string>

  name_starts_with?: Maybe<string>

  name_not_starts_with?: Maybe<string>

  name_ends_with?: Maybe<string>

  name_not_ends_with?: Maybe<string>

  AND: ProductTypeWhereInput[]

  OR: ProductTypeWhereInput[]

  NOT: ProductTypeWhereInput[]
}

export interface VariantWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in: string[]

  id_not_in: string[]

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  optionValues_every?: Maybe<OptionValueWhereInput>

  optionValues_some?: Maybe<OptionValueWhereInput>

  optionValues_none?: Maybe<OptionValueWhereInput>

  price?: Maybe<number>

  price_not?: Maybe<number>

  price_in: number[]

  price_not_in: number[]

  price_lt?: Maybe<number>

  price_lte?: Maybe<number>

  price_gt?: Maybe<number>

  price_gte?: Maybe<number>

  availableForSale?: Maybe<boolean>

  availableForSale_not?: Maybe<boolean>

  sku?: Maybe<string>

  sku_not?: Maybe<string>

  sku_in: string[]

  sku_not_in: string[]

  sku_lt?: Maybe<string>

  sku_lte?: Maybe<string>

  sku_gt?: Maybe<string>

  sku_gte?: Maybe<string>

  sku_contains?: Maybe<string>

  sku_not_contains?: Maybe<string>

  sku_starts_with?: Maybe<string>

  sku_not_starts_with?: Maybe<string>

  sku_ends_with?: Maybe<string>

  sku_not_ends_with?: Maybe<string>

  image?: Maybe<ImageWhereInput>

  AND: VariantWhereInput[]

  OR: VariantWhereInput[]

  NOT: VariantWhereInput[]
}

export interface OptionValueWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in: string[]

  id_not_in: string[]

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  name?: Maybe<string>

  name_not?: Maybe<string>

  name_in: string[]

  name_not_in: string[]

  name_lt?: Maybe<string>

  name_lte?: Maybe<string>

  name_gt?: Maybe<string>

  name_gte?: Maybe<string>

  name_contains?: Maybe<string>

  name_not_contains?: Maybe<string>

  name_starts_with?: Maybe<string>

  name_not_starts_with?: Maybe<string>

  name_ends_with?: Maybe<string>

  name_not_ends_with?: Maybe<string>

  option?: Maybe<OptionWhereInput>

  AND: OptionValueWhereInput[]

  OR: OptionValueWhereInput[]

  NOT: OptionValueWhereInput[]
}

export interface OptionWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in: string[]

  id_not_in: string[]

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  name?: Maybe<string>

  name_not?: Maybe<string>

  name_in: string[]

  name_not_in: string[]

  name_lt?: Maybe<string>

  name_lte?: Maybe<string>

  name_gt?: Maybe<string>

  name_gte?: Maybe<string>

  name_contains?: Maybe<string>

  name_not_contains?: Maybe<string>

  name_starts_with?: Maybe<string>

  name_not_starts_with?: Maybe<string>

  name_ends_with?: Maybe<string>

  name_not_ends_with?: Maybe<string>

  values_every?: Maybe<OptionValueWhereInput>

  values_some?: Maybe<OptionValueWhereInput>

  values_none?: Maybe<OptionValueWhereInput>

  AND: OptionWhereInput[]

  OR: OptionWhereInput[]

  NOT: OptionWhereInput[]
}

export interface CollectionWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in: string[]

  id_not_in: string[]

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  name?: Maybe<string>

  name_not?: Maybe<string>

  name_in: string[]

  name_not_in: string[]

  name_lt?: Maybe<string>

  name_lte?: Maybe<string>

  name_gt?: Maybe<string>

  name_gte?: Maybe<string>

  name_contains?: Maybe<string>

  name_not_contains?: Maybe<string>

  name_starts_with?: Maybe<string>

  name_not_starts_with?: Maybe<string>

  name_ends_with?: Maybe<string>

  name_not_ends_with?: Maybe<string>

  rules?: Maybe<CollectionRuleSetWhereInput>

  products_every?: Maybe<ProductWhereInput>

  products_some?: Maybe<ProductWhereInput>

  products_none?: Maybe<ProductWhereInput>

  AND: CollectionWhereInput[]

  OR: CollectionWhereInput[]

  NOT: CollectionWhereInput[]
}

export interface CollectionRuleSetWhereInput {
  rules_every?: Maybe<CollectionRuleWhereInput>

  rules_some?: Maybe<CollectionRuleWhereInput>

  rules_none?: Maybe<CollectionRuleWhereInput>

  appliesDisjunctively?: Maybe<boolean>

  appliesDisjunctively_not?: Maybe<boolean>

  AND: CollectionRuleSetWhereInput[]

  OR: CollectionRuleSetWhereInput[]

  NOT: CollectionRuleSetWhereInput[]
}

export interface CollectionRuleWhereInput {
  field?: Maybe<CollectionRuleField>

  field_not?: Maybe<CollectionRuleField>

  field_in: CollectionRuleField[]

  field_not_in: CollectionRuleField[]

  relation?: Maybe<CollectionRuleRelation>

  relation_not?: Maybe<CollectionRuleRelation>

  relation_in: CollectionRuleRelation[]

  relation_not_in: CollectionRuleRelation[]

  value?: Maybe<string>

  value_not?: Maybe<string>

  value_in: string[]

  value_not_in: string[]

  value_lt?: Maybe<string>

  value_lte?: Maybe<string>

  value_gt?: Maybe<string>

  value_gte?: Maybe<string>

  value_contains?: Maybe<string>

  value_not_contains?: Maybe<string>

  value_starts_with?: Maybe<string>

  value_not_starts_with?: Maybe<string>

  value_ends_with?: Maybe<string>

  value_not_ends_with?: Maybe<string>

  AND: CollectionRuleWhereInput[]

  OR: CollectionRuleWhereInput[]

  NOT: CollectionRuleWhereInput[]
}

export interface AttributeWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in: string[]

  id_not_in: string[]

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  key?: Maybe<string>

  key_not?: Maybe<string>

  key_in: string[]

  key_not_in: string[]

  key_lt?: Maybe<string>

  key_lte?: Maybe<string>

  key_gt?: Maybe<string>

  key_gte?: Maybe<string>

  key_contains?: Maybe<string>

  key_not_contains?: Maybe<string>

  key_starts_with?: Maybe<string>

  key_not_starts_with?: Maybe<string>

  key_ends_with?: Maybe<string>

  key_not_ends_with?: Maybe<string>

  value?: Maybe<string>

  value_not?: Maybe<string>

  value_in: string[]

  value_not_in: string[]

  value_lt?: Maybe<string>

  value_lte?: Maybe<string>

  value_gt?: Maybe<string>

  value_gte?: Maybe<string>

  value_contains?: Maybe<string>

  value_not_contains?: Maybe<string>

  value_starts_with?: Maybe<string>

  value_not_starts_with?: Maybe<string>

  value_ends_with?: Maybe<string>

  value_not_ends_with?: Maybe<string>

  products_every?: Maybe<ProductWhereInput>

  products_some?: Maybe<ProductWhereInput>

  products_none?: Maybe<ProductWhereInput>

  AND: AttributeWhereInput[]

  OR: AttributeWhereInput[]

  NOT: AttributeWhereInput[]
}

export interface CreateProductInput {
  name: string

  brand: UniqueInput

  attributesIds: UniqueInput[]

  variants: CreateVariantInput[]
}

export interface UniqueInput {
  id: string
}

export interface CreateVariantInput {
  availableForSale: boolean

  price: number

  optionsValueIds: UniqueInput[]
}

export interface UpdateProductInput {
  id: string

  name: string

  brand: UniqueInput

  attributesIds: UniqueInput[]

  variants: UpdateVariantInput[]
}

export interface UpdateVariantInput {
  id: string

  availableForSale: boolean

  price: number

  optionsValueIds: UniqueInput[]
}

export enum CollectionRuleField {
  Type = 'TYPE',
  Title = 'TITLE',
  Price = 'PRICE',
}

export enum CollectionRuleRelation {
  Contains = 'CONTAINS',
  EndsWith = 'ENDS_WITH',
  Equals = 'EQUALS',
  GreaterThan = 'GREATER_THAN',
  LessThan = 'LESS_THAN',
  NotContains = 'NOT_CONTAINS',
  NotEquals = 'NOT_EQUALS',
  StartsWith = 'STARTS_WITH',
}

export enum ProductOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum VariantOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  AvailableForSaleAsc = 'availableForSale_ASC',
  AvailableForSaleDesc = 'availableForSale_DESC',
  SkuAsc = 'sku_ASC',
  SkuDesc = 'sku_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum OptionValueOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum OptionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum BrandOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum CollectionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum CollectionRuleOrderByInput {
  FieldAsc = 'field_ASC',
  FieldDesc = 'field_DESC',
  RelationAsc = 'relation_ASC',
  RelationDesc = 'relation_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

// ====================================================
// Documents
// ====================================================

export type CollectionVariables = {
  collectionId: string
}

export type CollectionQuery = {
  __typename?: 'Query'

  collection: CollectionCollection
}

export type CollectionCollection = {
  __typename?: 'Collection'

  id: string

  name: string

  products: CollectionProducts[]

  options: CollectionOptions[]

  brands: CollectionBrands[]
}

export type CollectionProducts = {
  __typename?: 'Product'

  id: string

  name: string

  brand: CollectionBrand
}

export type CollectionBrand = {
  __typename?: 'Brand'

  id: string

  name: string
}

export type CollectionOptions = {
  __typename?: 'Option'

  id: string

  name: string
}

export type CollectionBrands = {
  __typename?: 'Brand'

  id: string

  name: string
}

export type CollectionsVariables = {}

export type CollectionsQuery = {
  __typename?: 'Query'

  collections: CollectionsCollections
}

export type CollectionsCollections = {
  __typename?: 'CollectionConnection'

  edges: CollectionsEdges[]
}

export type CollectionsEdges = {
  __typename?: 'CollectionEdge'

  node: CollectionsNode
}

export type CollectionsNode = {
  __typename?: 'Collection'

  id: string

  name: string
}

import * as ReactApollo from 'react-apollo'
import * as React from 'react'

import gql from 'graphql-tag'

// ====================================================
// Components
// ====================================================

export const CollectionDocument = gql`
  query collection($collectionId: ID!) {
    collection(collectionId: $collectionId) {
      id
      name
      products {
        id
        name
        brand {
          id
          name
        }
      }
      options {
        id
        name
      }
      brands {
        id
        name
      }
    }
  }
`
export class CollectionComponent extends React.Component<
  Partial<ReactApollo.QueryProps<CollectionQuery, CollectionVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<CollectionQuery, CollectionVariables>
        query={CollectionDocument}
        {...(this as any)['props'] as any}
      />
    )
  }
}
export type CollectionProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<CollectionQuery, CollectionVariables>
> &
  TChildProps
export function CollectionHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CollectionQuery,
        CollectionVariables,
        CollectionProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    CollectionQuery,
    CollectionVariables,
    CollectionProps<TChildProps>
  >(CollectionDocument, operationOptions)
}
export const CollectionsDocument = gql`
  query collections {
    collections {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`
export class CollectionsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<CollectionsQuery, CollectionsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<CollectionsQuery, CollectionsVariables>
        query={CollectionsDocument}
        {...(this as any)['props'] as any}
      />
    )
  }
}
export type CollectionsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<CollectionsQuery, CollectionsVariables>
> &
  TChildProps
export function CollectionsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CollectionsQuery,
        CollectionsVariables,
        CollectionsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    CollectionsQuery,
    CollectionsVariables,
    CollectionsProps<TChildProps>
  >(CollectionsDocument, operationOptions)
}
