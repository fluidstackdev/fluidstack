type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type IAggregateBrand = {
  count: Scalars['Int']
}

export type IAggregateCollection = {
  count: Scalars['Int']
}

export type IAggregateOption = {
  count: Scalars['Int']
}

export type IAggregateProduct = {
  count: Scalars['Int']
}

export type IAttribute = {
  id: Scalars['ID']
  key: Scalars['String']
  value: Scalars['String']
  products?: Maybe<Array<IProduct>>
}

export type IAttributeProductsArgs = {
  where?: Maybe<IProductWhereInput>
  orderBy?: Maybe<IProductOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IAttributePayload = {
  name: Scalars['String']
  values: Array<IAttributeValue>
}

export type IAttributeValue = {
  id: Scalars['ID']
  value: Scalars['String']
}

export type IAttributeWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  key?: Maybe<Scalars['String']>
  key_not?: Maybe<Scalars['String']>
  key_in?: Maybe<Array<Scalars['String']>>
  key_not_in?: Maybe<Array<Scalars['String']>>
  key_lt?: Maybe<Scalars['String']>
  key_lte?: Maybe<Scalars['String']>
  key_gt?: Maybe<Scalars['String']>
  key_gte?: Maybe<Scalars['String']>
  key_contains?: Maybe<Scalars['String']>
  key_not_contains?: Maybe<Scalars['String']>
  key_starts_with?: Maybe<Scalars['String']>
  key_not_starts_with?: Maybe<Scalars['String']>
  key_ends_with?: Maybe<Scalars['String']>
  key_not_ends_with?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
  value_not?: Maybe<Scalars['String']>
  value_in?: Maybe<Array<Scalars['String']>>
  value_not_in?: Maybe<Array<Scalars['String']>>
  value_lt?: Maybe<Scalars['String']>
  value_lte?: Maybe<Scalars['String']>
  value_gt?: Maybe<Scalars['String']>
  value_gte?: Maybe<Scalars['String']>
  value_contains?: Maybe<Scalars['String']>
  value_not_contains?: Maybe<Scalars['String']>
  value_starts_with?: Maybe<Scalars['String']>
  value_not_starts_with?: Maybe<Scalars['String']>
  value_ends_with?: Maybe<Scalars['String']>
  value_not_ends_with?: Maybe<Scalars['String']>
  products_every?: Maybe<IProductWhereInput>
  products_some?: Maybe<IProductWhereInput>
  products_none?: Maybe<IProductWhereInput>
  AND?: Maybe<Array<IAttributeWhereInput>>
  OR?: Maybe<Array<IAttributeWhereInput>>
  NOT?: Maybe<Array<IAttributeWhereInput>>
}

export type IBrand = {
  id: Scalars['ID']
  name: Scalars['String']
  products?: Maybe<Array<IProduct>>
}

export type IBrandProductsArgs = {
  where?: Maybe<IProductWhereInput>
  orderBy?: Maybe<IProductOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IBrandConnection = {
  pageInfo: IPageInfo
  edges: Array<IBrandEdge>
  aggregate: IAggregateBrand
}

export type IBrandEdge = {
  node: IBrand
  cursor: Scalars['String']
}

export enum IBrandOrderByInput {
  IId_Asc = 'id_ASC',
  IId_Desc = 'id_DESC',
  IName_Asc = 'name_ASC',
  IName_Desc = 'name_DESC',
  ICreatedAt_Asc = 'createdAt_ASC',
  ICreatedAt_Desc = 'createdAt_DESC',
  IUpdatedAt_Asc = 'updatedAt_ASC',
  IUpdatedAt_Desc = 'updatedAt_DESC',
}

export type IBrandWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_lt?: Maybe<Scalars['String']>
  name_lte?: Maybe<Scalars['String']>
  name_gt?: Maybe<Scalars['String']>
  name_gte?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  products_every?: Maybe<IProductWhereInput>
  products_some?: Maybe<IProductWhereInput>
  products_none?: Maybe<IProductWhereInput>
  AND?: Maybe<Array<IBrandWhereInput>>
  OR?: Maybe<Array<IBrandWhereInput>>
  NOT?: Maybe<Array<IBrandWhereInput>>
}

export type ICollection = {
  id: Scalars['ID']
  name: Scalars['String']
  products: IProductConnection
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

export type ICollectionConnection = {
  pageInfo: IPageInfo
  edges: Array<ICollectionEdge>
  aggregate: IAggregateCollection
}

export type ICollectionEdge = {
  node: ICollection
  cursor: Scalars['String']
}

export type ICollectionInput = {
  name: Scalars['String']
  ruleSet?: Maybe<ICollectionRuleSetInput>
  productsIds?: Maybe<Array<Scalars['String']>>
}

export enum ICollectionOrderByInput {
  IId_Asc = 'id_ASC',
  IId_Desc = 'id_DESC',
  IName_Asc = 'name_ASC',
  IName_Desc = 'name_DESC',
  ICreatedAt_Asc = 'createdAt_ASC',
  ICreatedAt_Desc = 'createdAt_DESC',
  IUpdatedAt_Asc = 'updatedAt_ASC',
  IUpdatedAt_Desc = 'updatedAt_DESC',
}

export enum ICollectionRuleField {
  IType = 'TYPE',
  ITitle = 'TITLE',
  IPrice = 'PRICE',
}

export enum ICollectionRuleRelation {
  IContains = 'CONTAINS',
  IEnds_With = 'ENDS_WITH',
  IEquals = 'EQUALS',
  IGreater_Than = 'GREATER_THAN',
  ILess_Than = 'LESS_THAN',
  INot_Contains = 'NOT_CONTAINS',
  INot_Equals = 'NOT_EQUALS',
  IStarts_With = 'STARTS_WITH',
}

export type ICollectionRuleSetInput = {
  applyDisjunctively: Scalars['Boolean']
  rules: Array<IRulesInput>
}

export type ICollectionRuleSetWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  rules_every?: Maybe<ICollectionRuleWhereInput>
  rules_some?: Maybe<ICollectionRuleWhereInput>
  rules_none?: Maybe<ICollectionRuleWhereInput>
  appliesDisjunctively?: Maybe<Scalars['Boolean']>
  appliesDisjunctively_not?: Maybe<Scalars['Boolean']>
  AND?: Maybe<Array<ICollectionRuleSetWhereInput>>
  OR?: Maybe<Array<ICollectionRuleSetWhereInput>>
  NOT?: Maybe<Array<ICollectionRuleSetWhereInput>>
}

export type ICollectionRuleWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  field?: Maybe<ICollectionRuleField>
  field_not?: Maybe<ICollectionRuleField>
  field_in?: Maybe<Array<ICollectionRuleField>>
  field_not_in?: Maybe<Array<ICollectionRuleField>>
  relation?: Maybe<ICollectionRuleRelation>
  relation_not?: Maybe<ICollectionRuleRelation>
  relation_in?: Maybe<Array<ICollectionRuleRelation>>
  relation_not_in?: Maybe<Array<ICollectionRuleRelation>>
  value?: Maybe<Scalars['String']>
  value_not?: Maybe<Scalars['String']>
  value_in?: Maybe<Array<Scalars['String']>>
  value_not_in?: Maybe<Array<Scalars['String']>>
  value_lt?: Maybe<Scalars['String']>
  value_lte?: Maybe<Scalars['String']>
  value_gt?: Maybe<Scalars['String']>
  value_gte?: Maybe<Scalars['String']>
  value_contains?: Maybe<Scalars['String']>
  value_not_contains?: Maybe<Scalars['String']>
  value_starts_with?: Maybe<Scalars['String']>
  value_not_starts_with?: Maybe<Scalars['String']>
  value_ends_with?: Maybe<Scalars['String']>
  value_not_ends_with?: Maybe<Scalars['String']>
  AND?: Maybe<Array<ICollectionRuleWhereInput>>
  OR?: Maybe<Array<ICollectionRuleWhereInput>>
  NOT?: Maybe<Array<ICollectionRuleWhereInput>>
}

export type ICollectionWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_lt?: Maybe<Scalars['String']>
  name_lte?: Maybe<Scalars['String']>
  name_gt?: Maybe<Scalars['String']>
  name_gte?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  rules?: Maybe<ICollectionRuleSetWhereInput>
  products_every?: Maybe<IProductWhereInput>
  products_some?: Maybe<IProductWhereInput>
  products_none?: Maybe<IProductWhereInput>
  AND?: Maybe<Array<ICollectionWhereInput>>
  OR?: Maybe<Array<ICollectionWhereInput>>
  NOT?: Maybe<Array<ICollectionWhereInput>>
}

export type ICreateProductInput = {
  name: Scalars['String']
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
  id: Scalars['ID']
  url: Scalars['String']
}

export enum IImageOrderByInput {
  IId_Asc = 'id_ASC',
  IId_Desc = 'id_DESC',
  IUrl_Asc = 'url_ASC',
  IUrl_Desc = 'url_DESC',
  ICreatedAt_Asc = 'createdAt_ASC',
  ICreatedAt_Desc = 'createdAt_DESC',
  IUpdatedAt_Asc = 'updatedAt_ASC',
  IUpdatedAt_Desc = 'updatedAt_DESC',
}

export type IImageWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  url?: Maybe<Scalars['String']>
  url_not?: Maybe<Scalars['String']>
  url_in?: Maybe<Array<Scalars['String']>>
  url_not_in?: Maybe<Array<Scalars['String']>>
  url_lt?: Maybe<Scalars['String']>
  url_lte?: Maybe<Scalars['String']>
  url_gt?: Maybe<Scalars['String']>
  url_gte?: Maybe<Scalars['String']>
  url_contains?: Maybe<Scalars['String']>
  url_not_contains?: Maybe<Scalars['String']>
  url_starts_with?: Maybe<Scalars['String']>
  url_not_starts_with?: Maybe<Scalars['String']>
  url_ends_with?: Maybe<Scalars['String']>
  url_not_ends_with?: Maybe<Scalars['String']>
  AND?: Maybe<Array<IImageWhereInput>>
  OR?: Maybe<Array<IImageWhereInput>>
  NOT?: Maybe<Array<IImageWhereInput>>
}

export type IMutation = {
  collectionCreate: ICollection
  collectionAddProducts: ICollection
  collectionRemoveProducts: ICollection
  collectionUpdate: ICollection
  productCreate: IProduct
  productDelete: IProduct
  productUpdate: IProduct
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

export type IMutationProductCreateArgs = {
  data: ICreateProductInput
}

export type IMutationProductDeleteArgs = {
  productId: Scalars['ID']
}

export type IMutationProductUpdateArgs = {
  data: IUpdateProductInput
}

export type IOption = {
  id: Scalars['ID']
  name: Scalars['String']
  isColor: Scalars['Boolean']
  values?: Maybe<Array<IOptionValue>>
}

export type IOptionValuesArgs = {
  where?: Maybe<IOptionValueWhereInput>
  orderBy?: Maybe<IOptionValueOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IOptionConnection = {
  pageInfo: IPageInfo
  edges: Array<IOptionEdge>
  aggregate: IAggregateOption
}

export type IOptionEdge = {
  node: IOption
  cursor: Scalars['String']
}

export enum IOptionOrderByInput {
  IId_Asc = 'id_ASC',
  IId_Desc = 'id_DESC',
  IName_Asc = 'name_ASC',
  IName_Desc = 'name_DESC',
  IIsColor_Asc = 'isColor_ASC',
  IIsColor_Desc = 'isColor_DESC',
  ICreatedAt_Asc = 'createdAt_ASC',
  ICreatedAt_Desc = 'createdAt_DESC',
  IUpdatedAt_Asc = 'updatedAt_ASC',
  IUpdatedAt_Desc = 'updatedAt_DESC',
}

export type IOptionValue = {
  id: Scalars['ID']
  name: Scalars['String']
  option: IOption
}

export enum IOptionValueOrderByInput {
  IId_Asc = 'id_ASC',
  IId_Desc = 'id_DESC',
  IName_Asc = 'name_ASC',
  IName_Desc = 'name_DESC',
  ICreatedAt_Asc = 'createdAt_ASC',
  ICreatedAt_Desc = 'createdAt_DESC',
  IUpdatedAt_Asc = 'updatedAt_ASC',
  IUpdatedAt_Desc = 'updatedAt_DESC',
}

export type IOptionValueWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_lt?: Maybe<Scalars['String']>
  name_lte?: Maybe<Scalars['String']>
  name_gt?: Maybe<Scalars['String']>
  name_gte?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  option?: Maybe<IOptionWhereInput>
  AND?: Maybe<Array<IOptionValueWhereInput>>
  OR?: Maybe<Array<IOptionValueWhereInput>>
  NOT?: Maybe<Array<IOptionValueWhereInput>>
}

export type IOptionWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_lt?: Maybe<Scalars['String']>
  name_lte?: Maybe<Scalars['String']>
  name_gt?: Maybe<Scalars['String']>
  name_gte?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  isColor?: Maybe<Scalars['Boolean']>
  isColor_not?: Maybe<Scalars['Boolean']>
  values_every?: Maybe<IOptionValueWhereInput>
  values_some?: Maybe<IOptionValueWhereInput>
  values_none?: Maybe<IOptionValueWhereInput>
  AND?: Maybe<Array<IOptionWhereInput>>
  OR?: Maybe<Array<IOptionWhereInput>>
  NOT?: Maybe<Array<IOptionWhereInput>>
}

export type IPageInfo = {
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['String']>
  endCursor?: Maybe<Scalars['String']>
}

export type IProduct = {
  id: Scalars['ID']
  slug: Scalars['String']
  name: Scalars['String']
  brand: IBrand
  description: Scalars['String']
  type?: Maybe<IProductType>
  thumbnail: IImage
  variants?: Maybe<Array<IVariant>>
  attributes: Array<IAttribute>
}

export type IProductVariantsArgs = {
  where?: Maybe<IVariantWhereInput>
  orderBy?: Maybe<IVariantOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IProductConnection = {
  pageInfo: IPageInfo
  edges: Array<IProductEdge>
  aggregate: IAggregateProduct
}

export type IProductEdge = {
  node: IProduct
  cursor: Scalars['String']
}

export enum IProductOrderByInput {
  IId_Asc = 'id_ASC',
  IId_Desc = 'id_DESC',
  ISlug_Asc = 'slug_ASC',
  ISlug_Desc = 'slug_DESC',
  IName_Asc = 'name_ASC',
  IName_Desc = 'name_DESC',
  IDescription_Asc = 'description_ASC',
  IDescription_Desc = 'description_DESC',
  ICreatedAt_Asc = 'createdAt_ASC',
  ICreatedAt_Desc = 'createdAt_DESC',
  IUpdatedAt_Asc = 'updatedAt_ASC',
  IUpdatedAt_Desc = 'updatedAt_DESC',
}

export type IProductType = {
  id: Scalars['ID']
  name: Scalars['String']
}

export type IProductTypeWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_lt?: Maybe<Scalars['String']>
  name_lte?: Maybe<Scalars['String']>
  name_gt?: Maybe<Scalars['String']>
  name_gte?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  AND?: Maybe<Array<IProductTypeWhereInput>>
  OR?: Maybe<Array<IProductTypeWhereInput>>
  NOT?: Maybe<Array<IProductTypeWhereInput>>
}

export type IProductWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
  slug_not?: Maybe<Scalars['String']>
  slug_in?: Maybe<Array<Scalars['String']>>
  slug_not_in?: Maybe<Array<Scalars['String']>>
  slug_lt?: Maybe<Scalars['String']>
  slug_lte?: Maybe<Scalars['String']>
  slug_gt?: Maybe<Scalars['String']>
  slug_gte?: Maybe<Scalars['String']>
  slug_contains?: Maybe<Scalars['String']>
  slug_not_contains?: Maybe<Scalars['String']>
  slug_starts_with?: Maybe<Scalars['String']>
  slug_not_starts_with?: Maybe<Scalars['String']>
  slug_ends_with?: Maybe<Scalars['String']>
  slug_not_ends_with?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  name_not?: Maybe<Scalars['String']>
  name_in?: Maybe<Array<Scalars['String']>>
  name_not_in?: Maybe<Array<Scalars['String']>>
  name_lt?: Maybe<Scalars['String']>
  name_lte?: Maybe<Scalars['String']>
  name_gt?: Maybe<Scalars['String']>
  name_gte?: Maybe<Scalars['String']>
  name_contains?: Maybe<Scalars['String']>
  name_not_contains?: Maybe<Scalars['String']>
  name_starts_with?: Maybe<Scalars['String']>
  name_not_starts_with?: Maybe<Scalars['String']>
  name_ends_with?: Maybe<Scalars['String']>
  name_not_ends_with?: Maybe<Scalars['String']>
  brand?: Maybe<IBrandWhereInput>
  description?: Maybe<Scalars['String']>
  description_not?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Scalars['String']>>
  description_not_in?: Maybe<Array<Scalars['String']>>
  description_lt?: Maybe<Scalars['String']>
  description_lte?: Maybe<Scalars['String']>
  description_gt?: Maybe<Scalars['String']>
  description_gte?: Maybe<Scalars['String']>
  description_contains?: Maybe<Scalars['String']>
  description_not_contains?: Maybe<Scalars['String']>
  description_starts_with?: Maybe<Scalars['String']>
  description_not_starts_with?: Maybe<Scalars['String']>
  description_ends_with?: Maybe<Scalars['String']>
  description_not_ends_with?: Maybe<Scalars['String']>
  type?: Maybe<IProductTypeWhereInput>
  thumbnail?: Maybe<IImageWhereInput>
  variants_every?: Maybe<IVariantWhereInput>
  variants_some?: Maybe<IVariantWhereInput>
  variants_none?: Maybe<IVariantWhereInput>
  collections_every?: Maybe<ICollectionWhereInput>
  collections_some?: Maybe<ICollectionWhereInput>
  collections_none?: Maybe<ICollectionWhereInput>
  attributes_every?: Maybe<IAttributeWhereInput>
  attributes_some?: Maybe<IAttributeWhereInput>
  attributes_none?: Maybe<IAttributeWhereInput>
  AND?: Maybe<Array<IProductWhereInput>>
  OR?: Maybe<Array<IProductWhereInput>>
  NOT?: Maybe<Array<IProductWhereInput>>
}

export type IProductWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
}

export type IQuery = {
  options: IOptionConnection
  brands: IBrandConnection
  collections: ICollectionConnection
  products: IProductConnection
  product?: Maybe<IProduct>
  collection: ICollection
}

export type IQueryOptionsArgs = {
  where?: Maybe<IOptionWhereInput>
  orderBy?: Maybe<IOptionOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryBrandsArgs = {
  where?: Maybe<IBrandWhereInput>
  orderBy?: Maybe<IBrandOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryCollectionsArgs = {
  where?: Maybe<ICollectionWhereInput>
  orderBy?: Maybe<ICollectionOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryProductsArgs = {
  where?: Maybe<IProductWhereInput>
  orderBy?: Maybe<IProductOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IQueryProductArgs = {
  where: IProductWhereUniqueInput
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
  id: Scalars['ID']
  optionValues?: Maybe<Array<IOptionValue>>
  price: Scalars['Int']
  availableForSale?: Maybe<Scalars['Boolean']>
  sku?: Maybe<Scalars['String']>
  images?: Maybe<Array<IImage>>
}

export type IVariantOptionValuesArgs = {
  where?: Maybe<IOptionValueWhereInput>
  orderBy?: Maybe<IOptionValueOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type IVariantImagesArgs = {
  where?: Maybe<IImageWhereInput>
  orderBy?: Maybe<IImageOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export enum IVariantOrderByInput {
  IId_Asc = 'id_ASC',
  IId_Desc = 'id_DESC',
  IPrice_Asc = 'price_ASC',
  IPrice_Desc = 'price_DESC',
  IAvailableForSale_Asc = 'availableForSale_ASC',
  IAvailableForSale_Desc = 'availableForSale_DESC',
  ISku_Asc = 'sku_ASC',
  ISku_Desc = 'sku_DESC',
  ICreatedAt_Asc = 'createdAt_ASC',
  ICreatedAt_Desc = 'createdAt_DESC',
  IUpdatedAt_Asc = 'updatedAt_ASC',
  IUpdatedAt_Desc = 'updatedAt_DESC',
}

export type IVariantWhereInput = {
  id?: Maybe<Scalars['ID']>
  id_not?: Maybe<Scalars['ID']>
  id_in?: Maybe<Array<Scalars['ID']>>
  id_not_in?: Maybe<Array<Scalars['ID']>>
  id_lt?: Maybe<Scalars['ID']>
  id_lte?: Maybe<Scalars['ID']>
  id_gt?: Maybe<Scalars['ID']>
  id_gte?: Maybe<Scalars['ID']>
  id_contains?: Maybe<Scalars['ID']>
  id_not_contains?: Maybe<Scalars['ID']>
  id_starts_with?: Maybe<Scalars['ID']>
  id_not_starts_with?: Maybe<Scalars['ID']>
  id_ends_with?: Maybe<Scalars['ID']>
  id_not_ends_with?: Maybe<Scalars['ID']>
  optionValues_every?: Maybe<IOptionValueWhereInput>
  optionValues_some?: Maybe<IOptionValueWhereInput>
  optionValues_none?: Maybe<IOptionValueWhereInput>
  price?: Maybe<Scalars['Int']>
  price_not?: Maybe<Scalars['Int']>
  price_in?: Maybe<Array<Scalars['Int']>>
  price_not_in?: Maybe<Array<Scalars['Int']>>
  price_lt?: Maybe<Scalars['Int']>
  price_lte?: Maybe<Scalars['Int']>
  price_gt?: Maybe<Scalars['Int']>
  price_gte?: Maybe<Scalars['Int']>
  availableForSale?: Maybe<Scalars['Boolean']>
  availableForSale_not?: Maybe<Scalars['Boolean']>
  sku?: Maybe<Scalars['String']>
  sku_not?: Maybe<Scalars['String']>
  sku_in?: Maybe<Array<Scalars['String']>>
  sku_not_in?: Maybe<Array<Scalars['String']>>
  sku_lt?: Maybe<Scalars['String']>
  sku_lte?: Maybe<Scalars['String']>
  sku_gt?: Maybe<Scalars['String']>
  sku_gte?: Maybe<Scalars['String']>
  sku_contains?: Maybe<Scalars['String']>
  sku_not_contains?: Maybe<Scalars['String']>
  sku_starts_with?: Maybe<Scalars['String']>
  sku_not_starts_with?: Maybe<Scalars['String']>
  sku_ends_with?: Maybe<Scalars['String']>
  sku_not_ends_with?: Maybe<Scalars['String']>
  images_every?: Maybe<IImageWhereInput>
  images_some?: Maybe<IImageWhereInput>
  images_none?: Maybe<IImageWhereInput>
  AND?: Maybe<Array<IVariantWhereInput>>
  OR?: Maybe<Array<IVariantWhereInput>>
  NOT?: Maybe<Array<IVariantWhereInput>>
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
      products: { __typename?: 'ProductConnection' } & {
        edges: Array<
          { __typename?: 'ProductEdge' } & {
            node: { __typename?: 'Product' } & ICollectionProductFragment
          }
        >
      }
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
    thumbnail: { __typename?: 'Image' } & Pick<IImage, 'url'>
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
  'id' | 'name'
> & {
    thumbnail: { __typename?: 'Image' } & Pick<IImage, 'url'>
    brand: { __typename?: 'Brand' } & Pick<IBrand, 'id' | 'name'>
    attributes: Array<
      { __typename?: 'Attribute' } & Pick<IAttribute, 'id' | 'key' | 'value'>
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
  collections: { __typename?: 'CollectionConnection' } & {
    edges: Array<
      { __typename?: 'CollectionEdge' } & {
        node: { __typename?: 'Collection' } & Pick<ICollection, 'id' | 'name'>
      }
    >
  }
}

import gql from 'graphql-tag'
import * as React from 'react'
import * as ReactApollo from 'react-apollo'
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
export const ICollectionDocument = gql`
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
        edges {
          node {
            ...CollectionProduct
          }
        }
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

export class ICollectionComponent extends React.Component<
  Partial<ReactApollo.QueryProps<ICollectionQuery, ICollectionQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<ICollectionQuery, ICollectionQueryVariables>
        query={ICollectionDocument}
        {...(this as any)['props'] as any}
      />
    )
  }
}
export type ICollectionProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<ICollectionQuery, ICollectionQueryVariables>
> &
  TChildProps
export function withICollection<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ICollectionQuery,
        ICollectionQueryVariables,
        ICollectionProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.withQuery<
    TProps,
    ICollectionQuery,
    ICollectionQueryVariables,
    ICollectionProps<TChildProps>
  >(ICollectionDocument, operationOptions)
}
export const IProductDocument = gql`
  query product($slug: String!) {
    product(where: { slug: $slug }) {
      ...ProductDetail
    }
  }
  ${ProductDetailFragmentDoc}
`

export class IProductComponent extends React.Component<
  Partial<ReactApollo.QueryProps<IProductQuery, IProductQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<IProductQuery, IProductQueryVariables>
        query={IProductDocument}
        {...(this as any)['props'] as any}
      />
    )
  }
}
export type IProductProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<IProductQuery, IProductQueryVariables>
> &
  TChildProps
export function withIProduct<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        IProductQuery,
        IProductQueryVariables,
        IProductProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.withQuery<
    TProps,
    IProductQuery,
    IProductQueryVariables,
    IProductProps<TChildProps>
  >(IProductDocument, operationOptions)
}
export const ICollectionsDocument = gql`
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

export class ICollectionsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<ICollectionsQuery, ICollectionsQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<ICollectionsQuery, ICollectionsQueryVariables>
        query={ICollectionsDocument}
        {...(this as any)['props'] as any}
      />
    )
  }
}
export type ICollectionsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<ICollectionsQuery, ICollectionsQueryVariables>
> &
  TChildProps
export function withICollections<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ICollectionsQuery,
        ICollectionsQueryVariables,
        ICollectionsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.withQuery<
    TProps,
    ICollectionsQuery,
    ICollectionsQueryVariables,
    ICollectionsProps<TChildProps>
  >(ICollectionsDocument, operationOptions)
}
