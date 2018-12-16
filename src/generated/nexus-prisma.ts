// GENERATED TYPES FOR PRISMA PLUGIN. /!\ DO NOT EDIT MANUALLY

import {
  ArgDefinition,
  ContextValue,
  RootValue,
} from 'nexus/dist/types'
import { GraphQLResolveInfo } from 'graphql'

import * as prisma from './prisma-client'

// Types for Query

type QueryObject =
  | QueryFields
  | { name: 'attribute', args?: QueryAttributeArgs[] | false, alias?: string  } 
  | { name: 'attributes', args?: QueryAttributesArgs[] | false, alias?: string  } 
  | { name: 'attributesConnection', args?: QueryAttributesConnectionArgs[] | false, alias?: string  } 
  | { name: 'brand', args?: QueryBrandArgs[] | false, alias?: string  } 
  | { name: 'brands', args?: QueryBrandsArgs[] | false, alias?: string  } 
  | { name: 'brandsConnection', args?: QueryBrandsConnectionArgs[] | false, alias?: string  } 
  | { name: 'collection', args?: QueryCollectionArgs[] | false, alias?: string  } 
  | { name: 'collections', args?: QueryCollectionsArgs[] | false, alias?: string  } 
  | { name: 'collectionsConnection', args?: QueryCollectionsConnectionArgs[] | false, alias?: string  } 
  | { name: 'collectionRules', args?: QueryCollectionRulesArgs[] | false, alias?: string  } 
  | { name: 'collectionRulesConnection', args?: QueryCollectionRulesConnectionArgs[] | false, alias?: string  } 
  | { name: 'collectionRuleSets', args?: QueryCollectionRuleSetsArgs[] | false, alias?: string  } 
  | { name: 'collectionRuleSetsConnection', args?: QueryCollectionRuleSetsConnectionArgs[] | false, alias?: string  } 
  | { name: 'image', args?: QueryImageArgs[] | false, alias?: string  } 
  | { name: 'images', args?: QueryImagesArgs[] | false, alias?: string  } 
  | { name: 'imagesConnection', args?: QueryImagesConnectionArgs[] | false, alias?: string  } 
  | { name: 'option', args?: QueryOptionArgs[] | false, alias?: string  } 
  | { name: 'options', args?: QueryOptionsArgs[] | false, alias?: string  } 
  | { name: 'optionsConnection', args?: QueryOptionsConnectionArgs[] | false, alias?: string  } 
  | { name: 'optionValue', args?: QueryOptionValueArgs[] | false, alias?: string  } 
  | { name: 'optionValues', args?: QueryOptionValuesArgs[] | false, alias?: string  } 
  | { name: 'optionValuesConnection', args?: QueryOptionValuesConnectionArgs[] | false, alias?: string  } 
  | { name: 'product', args?: QueryProductArgs[] | false, alias?: string  } 
  | { name: 'products', args?: QueryProductsArgs[] | false, alias?: string  } 
  | { name: 'productsConnection', args?: QueryProductsConnectionArgs[] | false, alias?: string  } 
  | { name: 'variant', args?: QueryVariantArgs[] | false, alias?: string  } 
  | { name: 'variants', args?: QueryVariantsArgs[] | false, alias?: string  } 
  | { name: 'variantsConnection', args?: QueryVariantsConnectionArgs[] | false, alias?: string  } 
  | { name: 'node', args?: QueryNodeArgs[] | false, alias?: string  } 

type QueryFields =
  | 'attribute'
  | 'attributes'
  | 'attributesConnection'
  | 'brand'
  | 'brands'
  | 'brandsConnection'
  | 'collection'
  | 'collections'
  | 'collectionsConnection'
  | 'collectionRules'
  | 'collectionRulesConnection'
  | 'collectionRuleSets'
  | 'collectionRuleSetsConnection'
  | 'image'
  | 'images'
  | 'imagesConnection'
  | 'option'
  | 'options'
  | 'optionsConnection'
  | 'optionValue'
  | 'optionValues'
  | 'optionValuesConnection'
  | 'product'
  | 'products'
  | 'productsConnection'
  | 'variant'
  | 'variants'
  | 'variantsConnection'
  | 'node'


type QueryAttributeArgs =
  | 'where'
type QueryAttributesArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryAttributesConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryBrandArgs =
  | 'where'
type QueryBrandsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryBrandsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryCollectionArgs =
  | 'where'
type QueryCollectionsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryCollectionsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryCollectionRulesArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryCollectionRulesConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryCollectionRuleSetsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryCollectionRuleSetsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryImageArgs =
  | 'where'
type QueryImagesArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryImagesConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryOptionArgs =
  | 'where'
type QueryOptionsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryOptionsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryOptionValueArgs =
  | 'where'
type QueryOptionValuesArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryOptionValuesConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryProductArgs =
  | 'where'
type QueryProductsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryProductsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryVariantArgs =
  | 'where'
type QueryVariantsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryVariantsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryNodeArgs =
  | 'id'
  

export interface QueryFieldDetails<GenTypes = GraphQLNexusGen> {
  attribute: {
    args: Record<QueryAttributeArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where: AttributeWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Attribute | null> | prisma.Attribute | null;
  }
  attributes: {
    args: Record<QueryAttributesArgs, ArgDefinition>
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: AttributeWhereInput | null, orderBy?: prisma.AttributeOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Attribute[]> | prisma.Attribute[];
  }
  attributesConnection: {
    args: Record<QueryAttributesConnectionArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: AttributeWhereInput | null, orderBy?: prisma.AttributeOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AttributeConnection> | prisma.AttributeConnection;
  }
  brand: {
    args: Record<QueryBrandArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where: BrandWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand | null> | prisma.Brand | null;
  }
  brands: {
    args: Record<QueryBrandsArgs, ArgDefinition>
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: BrandWhereInput | null, orderBy?: prisma.BrandOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand[]> | prisma.Brand[];
  }
  brandsConnection: {
    args: Record<QueryBrandsConnectionArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: BrandWhereInput | null, orderBy?: prisma.BrandOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BrandConnection> | prisma.BrandConnection;
  }
  collection: {
    args: Record<QueryCollectionArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where: CollectionWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Collection | null> | prisma.Collection | null;
  }
  collections: {
    args: Record<QueryCollectionsArgs, ArgDefinition>
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: CollectionWhereInput | null, orderBy?: prisma.CollectionOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Collection[]> | prisma.Collection[];
  }
  collectionsConnection: {
    args: Record<QueryCollectionsConnectionArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: CollectionWhereInput | null, orderBy?: prisma.CollectionOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionConnection> | prisma.CollectionConnection;
  }
  collectionRules: {
    args: Record<QueryCollectionRulesArgs, ArgDefinition>
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: CollectionRuleWhereInput | null, orderBy?: prisma.CollectionRuleOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRule[]> | prisma.CollectionRule[];
  }
  collectionRulesConnection: {
    args: Record<QueryCollectionRulesConnectionArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: CollectionRuleWhereInput | null, orderBy?: prisma.CollectionRuleOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRuleConnection> | prisma.CollectionRuleConnection;
  }
  collectionRuleSets: {
    args: Record<QueryCollectionRuleSetsArgs, ArgDefinition>
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: CollectionRuleSetWhereInput | null, orderBy?: prisma.CollectionRuleSetOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRuleSet[]> | prisma.CollectionRuleSet[];
  }
  collectionRuleSetsConnection: {
    args: Record<QueryCollectionRuleSetsConnectionArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: CollectionRuleSetWhereInput | null, orderBy?: prisma.CollectionRuleSetOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRuleSetConnection> | prisma.CollectionRuleSetConnection;
  }
  image: {
    args: Record<QueryImageArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where: ImageWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Image | null> | prisma.Image | null;
  }
  images: {
    args: Record<QueryImagesArgs, ArgDefinition>
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: ImageWhereInput | null, orderBy?: prisma.ImageOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Image[]> | prisma.Image[];
  }
  imagesConnection: {
    args: Record<QueryImagesConnectionArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: ImageWhereInput | null, orderBy?: prisma.ImageOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ImageConnection> | prisma.ImageConnection;
  }
  option: {
    args: Record<QueryOptionArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where: OptionWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Option | null> | prisma.Option | null;
  }
  options: {
    args: Record<QueryOptionsArgs, ArgDefinition>
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: OptionWhereInput | null, orderBy?: prisma.OptionOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Option[]> | prisma.Option[];
  }
  optionsConnection: {
    args: Record<QueryOptionsConnectionArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: OptionWhereInput | null, orderBy?: prisma.OptionOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OptionConnection> | prisma.OptionConnection;
  }
  optionValue: {
    args: Record<QueryOptionValueArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where: OptionValueWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OptionValue | null> | prisma.OptionValue | null;
  }
  optionValues: {
    args: Record<QueryOptionValuesArgs, ArgDefinition>
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: OptionValueWhereInput | null, orderBy?: prisma.OptionValueOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OptionValue[]> | prisma.OptionValue[];
  }
  optionValuesConnection: {
    args: Record<QueryOptionValuesConnectionArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: OptionValueWhereInput | null, orderBy?: prisma.OptionValueOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OptionValueConnection> | prisma.OptionValueConnection;
  }
  product: {
    args: Record<QueryProductArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where: ProductWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Product | null> | prisma.Product | null;
  }
  products: {
    args: Record<QueryProductsArgs, ArgDefinition>
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: ProductWhereInput | null, orderBy?: prisma.ProductOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Product[]> | prisma.Product[];
  }
  productsConnection: {
    args: Record<QueryProductsConnectionArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: ProductWhereInput | null, orderBy?: prisma.ProductOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ProductConnection> | prisma.ProductConnection;
  }
  variant: {
    args: Record<QueryVariantArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where: VariantWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Variant | null> | prisma.Variant | null;
  }
  variants: {
    args: Record<QueryVariantsArgs, ArgDefinition>
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: VariantWhereInput | null, orderBy?: prisma.VariantOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Variant[]> | prisma.Variant[];
  }
  variantsConnection: {
    args: Record<QueryVariantsConnectionArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { where?: VariantWhereInput | null, orderBy?: prisma.VariantOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.VariantConnection> | prisma.VariantConnection;
  }
  node: {
    args: Record<QueryNodeArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Query">,
      args: { id: string }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Node | null> | prisma.Node | null;
  }
}
  

// Types for Attribute

type AttributeObject =
  | AttributeFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'key', args?: [] | false, alias?: string  } 
  | { name: 'value', args?: [] | false, alias?: string  } 
  | { name: 'products', args?: AttributeProductsArgs[] | false, alias?: string  } 

type AttributeFields =
  | 'id'
  | 'key'
  | 'value'
  | 'products'


type AttributeProductsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface AttributeFieldDetails<GenTypes = GraphQLNexusGen> {
  id: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Attribute">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  key: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Attribute">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  value: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Attribute">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  products: {
    args: Record<AttributeProductsArgs, ArgDefinition>
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Attribute">,
      args: { where?: ProductWhereInput | null, orderBy?: prisma.ProductOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Product[]> | prisma.Product[];
  }
}
  

// Types for Product

type ProductObject =
  | ProductFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'brand', args?: [] | false, alias?: string  } 
  | { name: 'image', args?: [] | false, alias?: string  } 
  | { name: 'variants', args?: ProductVariantsArgs[] | false, alias?: string  } 
  | { name: 'collections', args?: ProductCollectionsArgs[] | false, alias?: string  } 
  | { name: 'attributes', args?: ProductAttributesArgs[] | false, alias?: string  } 

type ProductFields =
  | 'id'
  | 'name'
  | 'brand'
  | 'image'
  | 'variants'
  | 'collections'
  | 'attributes'


type ProductVariantsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type ProductCollectionsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type ProductAttributesArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface ProductFieldDetails<GenTypes = GraphQLNexusGen> {
  id: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Product">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  name: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Product">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  brand: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Product">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand> | prisma.Brand;
  }
  image: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Product">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Image | null> | prisma.Image | null;
  }
  variants: {
    args: Record<ProductVariantsArgs, ArgDefinition>
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Product">,
      args: { where?: VariantWhereInput | null, orderBy?: prisma.VariantOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Variant[]> | prisma.Variant[];
  }
  collections: {
    args: Record<ProductCollectionsArgs, ArgDefinition>
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Product">,
      args: { where?: CollectionWhereInput | null, orderBy?: prisma.CollectionOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Collection[]> | prisma.Collection[];
  }
  attributes: {
    args: Record<ProductAttributesArgs, ArgDefinition>
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Product">,
      args: { where?: AttributeWhereInput | null, orderBy?: prisma.AttributeOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Attribute[]> | prisma.Attribute[];
  }
}
  

// Types for Brand

type BrandObject =
  | BrandFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'products', args?: BrandProductsArgs[] | false, alias?: string  } 

type BrandFields =
  | 'id'
  | 'name'
  | 'products'


type BrandProductsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface BrandFieldDetails<GenTypes = GraphQLNexusGen> {
  id: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Brand">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  name: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Brand">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  products: {
    args: Record<BrandProductsArgs, ArgDefinition>
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Brand">,
      args: { where?: ProductWhereInput | null, orderBy?: prisma.ProductOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Product[]> | prisma.Product[];
  }
}
  

// Types for Image

type ImageObject =
  | ImageFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'url', args?: [] | false, alias?: string  } 

type ImageFields =
  | 'id'
  | 'url'



  

export interface ImageFieldDetails<GenTypes = GraphQLNexusGen> {
  id: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Image">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  url: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Image">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for Variant

type VariantObject =
  | VariantFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'optionValues', args?: VariantOptionValuesArgs[] | false, alias?: string  } 
  | { name: 'price', args?: [] | false, alias?: string  } 
  | { name: 'availableForSale', args?: [] | false, alias?: string  } 
  | { name: 'sku', args?: [] | false, alias?: string  } 
  | { name: 'image', args?: [] | false, alias?: string  } 

type VariantFields =
  | 'id'
  | 'optionValues'
  | 'price'
  | 'availableForSale'
  | 'sku'
  | 'image'


type VariantOptionValuesArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface VariantFieldDetails<GenTypes = GraphQLNexusGen> {
  id: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Variant">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  optionValues: {
    args: Record<VariantOptionValuesArgs, ArgDefinition>
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Variant">,
      args: { where?: OptionValueWhereInput | null, orderBy?: prisma.OptionValueOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OptionValue[]> | prisma.OptionValue[];
  }
  price: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Variant">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<number> | number;
  }
  availableForSale: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Variant">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<boolean | null> | boolean | null;
  }
  sku: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Variant">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string | null> | string | null;
  }
  image: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Variant">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Image | null> | prisma.Image | null;
  }
}
  

// Types for OptionValue

type OptionValueObject =
  | OptionValueFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'option', args?: [] | false, alias?: string  } 

type OptionValueFields =
  | 'id'
  | 'name'
  | 'option'



  

export interface OptionValueFieldDetails<GenTypes = GraphQLNexusGen> {
  id: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionValue">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  name: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionValue">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  option: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionValue">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Option> | prisma.Option;
  }
}
  

// Types for Option

type OptionObject =
  | OptionFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'values', args?: OptionValuesArgs[] | false, alias?: string  } 

type OptionFields =
  | 'id'
  | 'name'
  | 'values'


type OptionValuesArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface OptionFieldDetails<GenTypes = GraphQLNexusGen> {
  id: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Option">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  name: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Option">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  values: {
    args: Record<OptionValuesArgs, ArgDefinition>
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Option">,
      args: { where?: OptionValueWhereInput | null, orderBy?: prisma.OptionValueOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OptionValue[]> | prisma.OptionValue[];
  }
}
  

// Types for Collection

type CollectionObject =
  | CollectionFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'rules', args?: [] | false, alias?: string  } 
  | { name: 'products', args?: CollectionProductsArgs[] | false, alias?: string  } 

type CollectionFields =
  | 'id'
  | 'name'
  | 'rules'
  | 'products'


type CollectionProductsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface CollectionFieldDetails<GenTypes = GraphQLNexusGen> {
  id: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Collection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  name: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Collection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  rules: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Collection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRuleSet | null> | prisma.CollectionRuleSet | null;
  }
  products: {
    args: Record<CollectionProductsArgs, ArgDefinition>
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Collection">,
      args: { where?: ProductWhereInput | null, orderBy?: prisma.ProductOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Product[]> | prisma.Product[];
  }
}
  

// Types for CollectionRuleSet

type CollectionRuleSetObject =
  | CollectionRuleSetFields
  | { name: 'rules', args?: CollectionRuleSetRulesArgs[] | false, alias?: string  } 
  | { name: 'appliesDisjunctively', args?: [] | false, alias?: string  } 

type CollectionRuleSetFields =
  | 'rules'
  | 'appliesDisjunctively'


type CollectionRuleSetRulesArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface CollectionRuleSetFieldDetails<GenTypes = GraphQLNexusGen> {
  rules: {
    args: Record<CollectionRuleSetRulesArgs, ArgDefinition>
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleSet">,
      args: { where?: CollectionRuleWhereInput | null, orderBy?: prisma.CollectionRuleOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRule[]> | prisma.CollectionRule[];
  }
  appliesDisjunctively: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleSet">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<boolean> | boolean;
  }
}
  

// Types for CollectionRule

type CollectionRuleObject =
  | CollectionRuleFields
  | { name: 'field', args?: [] | false, alias?: string  } 
  | { name: 'relation', args?: [] | false, alias?: string  } 
  | { name: 'value', args?: [] | false, alias?: string  } 

type CollectionRuleFields =
  | 'field'
  | 'relation'
  | 'value'



  

export interface CollectionRuleFieldDetails<GenTypes = GraphQLNexusGen> {
  field: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRule">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRuleField> | prisma.CollectionRuleField;
  }
  relation: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRule">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRuleRelation> | prisma.CollectionRuleRelation;
  }
  value: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRule">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for AttributeConnection

type AttributeConnectionObject =
  | AttributeConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type AttributeConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface AttributeConnectionFieldDetails<GenTypes = GraphQLNexusGen> {
  pageInfo: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AttributeConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo;
  }
  edges: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AttributeConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AttributeEdge[]> | prisma.AttributeEdge[];
  }
  aggregate: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AttributeConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateAttribute> | prisma.AggregateAttribute;
  }
}
  

// Types for PageInfo

type PageInfoObject =
  | PageInfoFields
  | { name: 'hasNextPage', args?: [] | false, alias?: string  } 
  | { name: 'hasPreviousPage', args?: [] | false, alias?: string  } 
  | { name: 'startCursor', args?: [] | false, alias?: string  } 
  | { name: 'endCursor', args?: [] | false, alias?: string  } 

type PageInfoFields =
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'startCursor'
  | 'endCursor'



  

export interface PageInfoFieldDetails<GenTypes = GraphQLNexusGen> {
  hasNextPage: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "PageInfo">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<boolean> | boolean;
  }
  hasPreviousPage: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "PageInfo">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<boolean> | boolean;
  }
  startCursor: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "PageInfo">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string | null> | string | null;
  }
  endCursor: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "PageInfo">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string | null> | string | null;
  }
}
  

// Types for AttributeEdge

type AttributeEdgeObject =
  | AttributeEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type AttributeEdgeFields =
  | 'node'
  | 'cursor'



  

export interface AttributeEdgeFieldDetails<GenTypes = GraphQLNexusGen> {
  node: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AttributeEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Attribute> | prisma.Attribute;
  }
  cursor: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AttributeEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for AggregateAttribute

type AggregateAttributeObject =
  | AggregateAttributeFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateAttributeFields =
  | 'count'



  

export interface AggregateAttributeFieldDetails<GenTypes = GraphQLNexusGen> {
  count: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AggregateAttribute">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<number> | number;
  }
}
  

// Types for BrandConnection

type BrandConnectionObject =
  | BrandConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type BrandConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface BrandConnectionFieldDetails<GenTypes = GraphQLNexusGen> {
  pageInfo: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "BrandConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo;
  }
  edges: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "BrandConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BrandEdge[]> | prisma.BrandEdge[];
  }
  aggregate: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "BrandConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateBrand> | prisma.AggregateBrand;
  }
}
  

// Types for BrandEdge

type BrandEdgeObject =
  | BrandEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type BrandEdgeFields =
  | 'node'
  | 'cursor'



  

export interface BrandEdgeFieldDetails<GenTypes = GraphQLNexusGen> {
  node: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "BrandEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand> | prisma.Brand;
  }
  cursor: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "BrandEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for AggregateBrand

type AggregateBrandObject =
  | AggregateBrandFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateBrandFields =
  | 'count'



  

export interface AggregateBrandFieldDetails<GenTypes = GraphQLNexusGen> {
  count: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AggregateBrand">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<number> | number;
  }
}
  

// Types for CollectionConnection

type CollectionConnectionObject =
  | CollectionConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type CollectionConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface CollectionConnectionFieldDetails<GenTypes = GraphQLNexusGen> {
  pageInfo: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo;
  }
  edges: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionEdge[]> | prisma.CollectionEdge[];
  }
  aggregate: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateCollection> | prisma.AggregateCollection;
  }
}
  

// Types for CollectionEdge

type CollectionEdgeObject =
  | CollectionEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type CollectionEdgeFields =
  | 'node'
  | 'cursor'



  

export interface CollectionEdgeFieldDetails<GenTypes = GraphQLNexusGen> {
  node: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Collection> | prisma.Collection;
  }
  cursor: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for AggregateCollection

type AggregateCollectionObject =
  | AggregateCollectionFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateCollectionFields =
  | 'count'



  

export interface AggregateCollectionFieldDetails<GenTypes = GraphQLNexusGen> {
  count: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AggregateCollection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<number> | number;
  }
}
  

// Types for CollectionRuleConnection

type CollectionRuleConnectionObject =
  | CollectionRuleConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type CollectionRuleConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface CollectionRuleConnectionFieldDetails<GenTypes = GraphQLNexusGen> {
  pageInfo: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo;
  }
  edges: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRuleEdge[]> | prisma.CollectionRuleEdge[];
  }
  aggregate: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateCollectionRule> | prisma.AggregateCollectionRule;
  }
}
  

// Types for CollectionRuleEdge

type CollectionRuleEdgeObject =
  | CollectionRuleEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type CollectionRuleEdgeFields =
  | 'node'
  | 'cursor'



  

export interface CollectionRuleEdgeFieldDetails<GenTypes = GraphQLNexusGen> {
  node: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRule> | prisma.CollectionRule;
  }
  cursor: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for AggregateCollectionRule

type AggregateCollectionRuleObject =
  | AggregateCollectionRuleFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateCollectionRuleFields =
  | 'count'



  

export interface AggregateCollectionRuleFieldDetails<GenTypes = GraphQLNexusGen> {
  count: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AggregateCollectionRule">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<number> | number;
  }
}
  

// Types for CollectionRuleSetConnection

type CollectionRuleSetConnectionObject =
  | CollectionRuleSetConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type CollectionRuleSetConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface CollectionRuleSetConnectionFieldDetails<GenTypes = GraphQLNexusGen> {
  pageInfo: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleSetConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo;
  }
  edges: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleSetConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRuleSetEdge[]> | prisma.CollectionRuleSetEdge[];
  }
  aggregate: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleSetConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateCollectionRuleSet> | prisma.AggregateCollectionRuleSet;
  }
}
  

// Types for CollectionRuleSetEdge

type CollectionRuleSetEdgeObject =
  | CollectionRuleSetEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type CollectionRuleSetEdgeFields =
  | 'node'
  | 'cursor'



  

export interface CollectionRuleSetEdgeFieldDetails<GenTypes = GraphQLNexusGen> {
  node: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleSetEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRuleSet> | prisma.CollectionRuleSet;
  }
  cursor: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleSetEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for AggregateCollectionRuleSet

type AggregateCollectionRuleSetObject =
  | AggregateCollectionRuleSetFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateCollectionRuleSetFields =
  | 'count'



  

export interface AggregateCollectionRuleSetFieldDetails<GenTypes = GraphQLNexusGen> {
  count: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AggregateCollectionRuleSet">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<number> | number;
  }
}
  

// Types for ImageConnection

type ImageConnectionObject =
  | ImageConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type ImageConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface ImageConnectionFieldDetails<GenTypes = GraphQLNexusGen> {
  pageInfo: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "ImageConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo;
  }
  edges: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "ImageConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ImageEdge[]> | prisma.ImageEdge[];
  }
  aggregate: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "ImageConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateImage> | prisma.AggregateImage;
  }
}
  

// Types for ImageEdge

type ImageEdgeObject =
  | ImageEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type ImageEdgeFields =
  | 'node'
  | 'cursor'



  

export interface ImageEdgeFieldDetails<GenTypes = GraphQLNexusGen> {
  node: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "ImageEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Image> | prisma.Image;
  }
  cursor: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "ImageEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for AggregateImage

type AggregateImageObject =
  | AggregateImageFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateImageFields =
  | 'count'



  

export interface AggregateImageFieldDetails<GenTypes = GraphQLNexusGen> {
  count: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AggregateImage">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<number> | number;
  }
}
  

// Types for OptionConnection

type OptionConnectionObject =
  | OptionConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type OptionConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface OptionConnectionFieldDetails<GenTypes = GraphQLNexusGen> {
  pageInfo: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo;
  }
  edges: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OptionEdge[]> | prisma.OptionEdge[];
  }
  aggregate: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateOption> | prisma.AggregateOption;
  }
}
  

// Types for OptionEdge

type OptionEdgeObject =
  | OptionEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type OptionEdgeFields =
  | 'node'
  | 'cursor'



  

export interface OptionEdgeFieldDetails<GenTypes = GraphQLNexusGen> {
  node: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Option> | prisma.Option;
  }
  cursor: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for AggregateOption

type AggregateOptionObject =
  | AggregateOptionFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateOptionFields =
  | 'count'



  

export interface AggregateOptionFieldDetails<GenTypes = GraphQLNexusGen> {
  count: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AggregateOption">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<number> | number;
  }
}
  

// Types for OptionValueConnection

type OptionValueConnectionObject =
  | OptionValueConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type OptionValueConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface OptionValueConnectionFieldDetails<GenTypes = GraphQLNexusGen> {
  pageInfo: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionValueConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo;
  }
  edges: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionValueConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OptionValueEdge[]> | prisma.OptionValueEdge[];
  }
  aggregate: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionValueConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateOptionValue> | prisma.AggregateOptionValue;
  }
}
  

// Types for OptionValueEdge

type OptionValueEdgeObject =
  | OptionValueEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type OptionValueEdgeFields =
  | 'node'
  | 'cursor'



  

export interface OptionValueEdgeFieldDetails<GenTypes = GraphQLNexusGen> {
  node: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionValueEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OptionValue> | prisma.OptionValue;
  }
  cursor: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionValueEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for AggregateOptionValue

type AggregateOptionValueObject =
  | AggregateOptionValueFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateOptionValueFields =
  | 'count'



  

export interface AggregateOptionValueFieldDetails<GenTypes = GraphQLNexusGen> {
  count: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AggregateOptionValue">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<number> | number;
  }
}
  

// Types for ProductConnection

type ProductConnectionObject =
  | ProductConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type ProductConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface ProductConnectionFieldDetails<GenTypes = GraphQLNexusGen> {
  pageInfo: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "ProductConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo;
  }
  edges: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "ProductConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ProductEdge[]> | prisma.ProductEdge[];
  }
  aggregate: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "ProductConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateProduct> | prisma.AggregateProduct;
  }
}
  

// Types for ProductEdge

type ProductEdgeObject =
  | ProductEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type ProductEdgeFields =
  | 'node'
  | 'cursor'



  

export interface ProductEdgeFieldDetails<GenTypes = GraphQLNexusGen> {
  node: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "ProductEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Product> | prisma.Product;
  }
  cursor: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "ProductEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for AggregateProduct

type AggregateProductObject =
  | AggregateProductFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateProductFields =
  | 'count'



  

export interface AggregateProductFieldDetails<GenTypes = GraphQLNexusGen> {
  count: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AggregateProduct">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<number> | number;
  }
}
  

// Types for VariantConnection

type VariantConnectionObject =
  | VariantConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type VariantConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface VariantConnectionFieldDetails<GenTypes = GraphQLNexusGen> {
  pageInfo: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "VariantConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo;
  }
  edges: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "VariantConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.VariantEdge[]> | prisma.VariantEdge[];
  }
  aggregate: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "VariantConnection">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateVariant> | prisma.AggregateVariant;
  }
}
  

// Types for VariantEdge

type VariantEdgeObject =
  | VariantEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type VariantEdgeFields =
  | 'node'
  | 'cursor'



  

export interface VariantEdgeFieldDetails<GenTypes = GraphQLNexusGen> {
  node: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "VariantEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Variant> | prisma.Variant;
  }
  cursor: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "VariantEdge">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for AggregateVariant

type AggregateVariantObject =
  | AggregateVariantFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateVariantFields =
  | 'count'



  

export interface AggregateVariantFieldDetails<GenTypes = GraphQLNexusGen> {
  count: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AggregateVariant">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<number> | number;
  }
}
  

// Types for Mutation

type MutationObject =
  | MutationFields
  | { name: 'createAttribute', args?: MutationCreateAttributeArgs[] | false, alias?: string  } 
  | { name: 'updateAttribute', args?: MutationUpdateAttributeArgs[] | false, alias?: string  } 
  | { name: 'updateManyAttributes', args?: MutationUpdateManyAttributesArgs[] | false, alias?: string  } 
  | { name: 'upsertAttribute', args?: MutationUpsertAttributeArgs[] | false, alias?: string  } 
  | { name: 'deleteAttribute', args?: MutationDeleteAttributeArgs[] | false, alias?: string  } 
  | { name: 'deleteManyAttributes', args?: MutationDeleteManyAttributesArgs[] | false, alias?: string  } 
  | { name: 'createBrand', args?: MutationCreateBrandArgs[] | false, alias?: string  } 
  | { name: 'updateBrand', args?: MutationUpdateBrandArgs[] | false, alias?: string  } 
  | { name: 'updateManyBrands', args?: MutationUpdateManyBrandsArgs[] | false, alias?: string  } 
  | { name: 'upsertBrand', args?: MutationUpsertBrandArgs[] | false, alias?: string  } 
  | { name: 'deleteBrand', args?: MutationDeleteBrandArgs[] | false, alias?: string  } 
  | { name: 'deleteManyBrands', args?: MutationDeleteManyBrandsArgs[] | false, alias?: string  } 
  | { name: 'createCollection', args?: MutationCreateCollectionArgs[] | false, alias?: string  } 
  | { name: 'updateCollection', args?: MutationUpdateCollectionArgs[] | false, alias?: string  } 
  | { name: 'updateManyCollections', args?: MutationUpdateManyCollectionsArgs[] | false, alias?: string  } 
  | { name: 'upsertCollection', args?: MutationUpsertCollectionArgs[] | false, alias?: string  } 
  | { name: 'deleteCollection', args?: MutationDeleteCollectionArgs[] | false, alias?: string  } 
  | { name: 'deleteManyCollections', args?: MutationDeleteManyCollectionsArgs[] | false, alias?: string  } 
  | { name: 'createCollectionRule', args?: MutationCreateCollectionRuleArgs[] | false, alias?: string  } 
  | { name: 'updateManyCollectionRules', args?: MutationUpdateManyCollectionRulesArgs[] | false, alias?: string  } 
  | { name: 'deleteManyCollectionRules', args?: MutationDeleteManyCollectionRulesArgs[] | false, alias?: string  } 
  | { name: 'createCollectionRuleSet', args?: MutationCreateCollectionRuleSetArgs[] | false, alias?: string  } 
  | { name: 'updateManyCollectionRuleSets', args?: MutationUpdateManyCollectionRuleSetsArgs[] | false, alias?: string  } 
  | { name: 'deleteManyCollectionRuleSets', args?: MutationDeleteManyCollectionRuleSetsArgs[] | false, alias?: string  } 
  | { name: 'createImage', args?: MutationCreateImageArgs[] | false, alias?: string  } 
  | { name: 'updateImage', args?: MutationUpdateImageArgs[] | false, alias?: string  } 
  | { name: 'updateManyImages', args?: MutationUpdateManyImagesArgs[] | false, alias?: string  } 
  | { name: 'upsertImage', args?: MutationUpsertImageArgs[] | false, alias?: string  } 
  | { name: 'deleteImage', args?: MutationDeleteImageArgs[] | false, alias?: string  } 
  | { name: 'deleteManyImages', args?: MutationDeleteManyImagesArgs[] | false, alias?: string  } 
  | { name: 'createOption', args?: MutationCreateOptionArgs[] | false, alias?: string  } 
  | { name: 'updateOption', args?: MutationUpdateOptionArgs[] | false, alias?: string  } 
  | { name: 'updateManyOptions', args?: MutationUpdateManyOptionsArgs[] | false, alias?: string  } 
  | { name: 'upsertOption', args?: MutationUpsertOptionArgs[] | false, alias?: string  } 
  | { name: 'deleteOption', args?: MutationDeleteOptionArgs[] | false, alias?: string  } 
  | { name: 'deleteManyOptions', args?: MutationDeleteManyOptionsArgs[] | false, alias?: string  } 
  | { name: 'createOptionValue', args?: MutationCreateOptionValueArgs[] | false, alias?: string  } 
  | { name: 'updateOptionValue', args?: MutationUpdateOptionValueArgs[] | false, alias?: string  } 
  | { name: 'updateManyOptionValues', args?: MutationUpdateManyOptionValuesArgs[] | false, alias?: string  } 
  | { name: 'upsertOptionValue', args?: MutationUpsertOptionValueArgs[] | false, alias?: string  } 
  | { name: 'deleteOptionValue', args?: MutationDeleteOptionValueArgs[] | false, alias?: string  } 
  | { name: 'deleteManyOptionValues', args?: MutationDeleteManyOptionValuesArgs[] | false, alias?: string  } 
  | { name: 'createProduct', args?: MutationCreateProductArgs[] | false, alias?: string  } 
  | { name: 'updateProduct', args?: MutationUpdateProductArgs[] | false, alias?: string  } 
  | { name: 'updateManyProducts', args?: MutationUpdateManyProductsArgs[] | false, alias?: string  } 
  | { name: 'upsertProduct', args?: MutationUpsertProductArgs[] | false, alias?: string  } 
  | { name: 'deleteProduct', args?: MutationDeleteProductArgs[] | false, alias?: string  } 
  | { name: 'deleteManyProducts', args?: MutationDeleteManyProductsArgs[] | false, alias?: string  } 
  | { name: 'createVariant', args?: MutationCreateVariantArgs[] | false, alias?: string  } 
  | { name: 'updateVariant', args?: MutationUpdateVariantArgs[] | false, alias?: string  } 
  | { name: 'updateManyVariants', args?: MutationUpdateManyVariantsArgs[] | false, alias?: string  } 
  | { name: 'upsertVariant', args?: MutationUpsertVariantArgs[] | false, alias?: string  } 
  | { name: 'deleteVariant', args?: MutationDeleteVariantArgs[] | false, alias?: string  } 
  | { name: 'deleteManyVariants', args?: MutationDeleteManyVariantsArgs[] | false, alias?: string  } 

type MutationFields =
  | 'createAttribute'
  | 'updateAttribute'
  | 'updateManyAttributes'
  | 'upsertAttribute'
  | 'deleteAttribute'
  | 'deleteManyAttributes'
  | 'createBrand'
  | 'updateBrand'
  | 'updateManyBrands'
  | 'upsertBrand'
  | 'deleteBrand'
  | 'deleteManyBrands'
  | 'createCollection'
  | 'updateCollection'
  | 'updateManyCollections'
  | 'upsertCollection'
  | 'deleteCollection'
  | 'deleteManyCollections'
  | 'createCollectionRule'
  | 'updateManyCollectionRules'
  | 'deleteManyCollectionRules'
  | 'createCollectionRuleSet'
  | 'updateManyCollectionRuleSets'
  | 'deleteManyCollectionRuleSets'
  | 'createImage'
  | 'updateImage'
  | 'updateManyImages'
  | 'upsertImage'
  | 'deleteImage'
  | 'deleteManyImages'
  | 'createOption'
  | 'updateOption'
  | 'updateManyOptions'
  | 'upsertOption'
  | 'deleteOption'
  | 'deleteManyOptions'
  | 'createOptionValue'
  | 'updateOptionValue'
  | 'updateManyOptionValues'
  | 'upsertOptionValue'
  | 'deleteOptionValue'
  | 'deleteManyOptionValues'
  | 'createProduct'
  | 'updateProduct'
  | 'updateManyProducts'
  | 'upsertProduct'
  | 'deleteProduct'
  | 'deleteManyProducts'
  | 'createVariant'
  | 'updateVariant'
  | 'updateManyVariants'
  | 'upsertVariant'
  | 'deleteVariant'
  | 'deleteManyVariants'


type MutationCreateAttributeArgs =
  | 'data'
type MutationUpdateAttributeArgs =
  | 'data'
  | 'where'
type MutationUpdateManyAttributesArgs =
  | 'data'
  | 'where'
type MutationUpsertAttributeArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteAttributeArgs =
  | 'where'
type MutationDeleteManyAttributesArgs =
  | 'where'
type MutationCreateBrandArgs =
  | 'data'
type MutationUpdateBrandArgs =
  | 'data'
  | 'where'
type MutationUpdateManyBrandsArgs =
  | 'data'
  | 'where'
type MutationUpsertBrandArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteBrandArgs =
  | 'where'
type MutationDeleteManyBrandsArgs =
  | 'where'
type MutationCreateCollectionArgs =
  | 'data'
type MutationUpdateCollectionArgs =
  | 'data'
  | 'where'
type MutationUpdateManyCollectionsArgs =
  | 'data'
  | 'where'
type MutationUpsertCollectionArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteCollectionArgs =
  | 'where'
type MutationDeleteManyCollectionsArgs =
  | 'where'
type MutationCreateCollectionRuleArgs =
  | 'data'
type MutationUpdateManyCollectionRulesArgs =
  | 'data'
  | 'where'
type MutationDeleteManyCollectionRulesArgs =
  | 'where'
type MutationCreateCollectionRuleSetArgs =
  | 'data'
type MutationUpdateManyCollectionRuleSetsArgs =
  | 'data'
  | 'where'
type MutationDeleteManyCollectionRuleSetsArgs =
  | 'where'
type MutationCreateImageArgs =
  | 'data'
type MutationUpdateImageArgs =
  | 'data'
  | 'where'
type MutationUpdateManyImagesArgs =
  | 'data'
  | 'where'
type MutationUpsertImageArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteImageArgs =
  | 'where'
type MutationDeleteManyImagesArgs =
  | 'where'
type MutationCreateOptionArgs =
  | 'data'
type MutationUpdateOptionArgs =
  | 'data'
  | 'where'
type MutationUpdateManyOptionsArgs =
  | 'data'
  | 'where'
type MutationUpsertOptionArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteOptionArgs =
  | 'where'
type MutationDeleteManyOptionsArgs =
  | 'where'
type MutationCreateOptionValueArgs =
  | 'data'
type MutationUpdateOptionValueArgs =
  | 'data'
  | 'where'
type MutationUpdateManyOptionValuesArgs =
  | 'data'
  | 'where'
type MutationUpsertOptionValueArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteOptionValueArgs =
  | 'where'
type MutationDeleteManyOptionValuesArgs =
  | 'where'
type MutationCreateProductArgs =
  | 'data'
type MutationUpdateProductArgs =
  | 'data'
  | 'where'
type MutationUpdateManyProductsArgs =
  | 'data'
  | 'where'
type MutationUpsertProductArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteProductArgs =
  | 'where'
type MutationDeleteManyProductsArgs =
  | 'where'
type MutationCreateVariantArgs =
  | 'data'
type MutationUpdateVariantArgs =
  | 'data'
  | 'where'
type MutationUpdateManyVariantsArgs =
  | 'data'
  | 'where'
type MutationUpsertVariantArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteVariantArgs =
  | 'where'
type MutationDeleteManyVariantsArgs =
  | 'where'
  

export interface MutationFieldDetails<GenTypes = GraphQLNexusGen> {
  createAttribute: {
    args: Record<MutationCreateAttributeArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: AttributeCreateInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Attribute> | prisma.Attribute;
  }
  updateAttribute: {
    args: Record<MutationUpdateAttributeArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: AttributeUpdateInput, where: AttributeWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Attribute | null> | prisma.Attribute | null;
  }
  updateManyAttributes: {
    args: Record<MutationUpdateManyAttributesArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: AttributeUpdateManyMutationInput, where?: AttributeWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
  upsertAttribute: {
    args: Record<MutationUpsertAttributeArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where: AttributeWhereUniqueInput, create: AttributeCreateInput, update: AttributeUpdateInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Attribute> | prisma.Attribute;
  }
  deleteAttribute: {
    args: Record<MutationDeleteAttributeArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where: AttributeWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Attribute | null> | prisma.Attribute | null;
  }
  deleteManyAttributes: {
    args: Record<MutationDeleteManyAttributesArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where?: AttributeWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
  createBrand: {
    args: Record<MutationCreateBrandArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: BrandCreateInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand> | prisma.Brand;
  }
  updateBrand: {
    args: Record<MutationUpdateBrandArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: BrandUpdateInput, where: BrandWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand | null> | prisma.Brand | null;
  }
  updateManyBrands: {
    args: Record<MutationUpdateManyBrandsArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: BrandUpdateManyMutationInput, where?: BrandWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
  upsertBrand: {
    args: Record<MutationUpsertBrandArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where: BrandWhereUniqueInput, create: BrandCreateInput, update: BrandUpdateInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand> | prisma.Brand;
  }
  deleteBrand: {
    args: Record<MutationDeleteBrandArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where: BrandWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand | null> | prisma.Brand | null;
  }
  deleteManyBrands: {
    args: Record<MutationDeleteManyBrandsArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where?: BrandWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
  createCollection: {
    args: Record<MutationCreateCollectionArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: CollectionCreateInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Collection> | prisma.Collection;
  }
  updateCollection: {
    args: Record<MutationUpdateCollectionArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: CollectionUpdateInput, where: CollectionWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Collection | null> | prisma.Collection | null;
  }
  updateManyCollections: {
    args: Record<MutationUpdateManyCollectionsArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: CollectionUpdateManyMutationInput, where?: CollectionWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
  upsertCollection: {
    args: Record<MutationUpsertCollectionArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where: CollectionWhereUniqueInput, create: CollectionCreateInput, update: CollectionUpdateInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Collection> | prisma.Collection;
  }
  deleteCollection: {
    args: Record<MutationDeleteCollectionArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where: CollectionWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Collection | null> | prisma.Collection | null;
  }
  deleteManyCollections: {
    args: Record<MutationDeleteManyCollectionsArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where?: CollectionWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
  createCollectionRule: {
    args: Record<MutationCreateCollectionRuleArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: CollectionRuleCreateInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRule> | prisma.CollectionRule;
  }
  updateManyCollectionRules: {
    args: Record<MutationUpdateManyCollectionRulesArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: CollectionRuleUpdateManyMutationInput, where?: CollectionRuleWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
  deleteManyCollectionRules: {
    args: Record<MutationDeleteManyCollectionRulesArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where?: CollectionRuleWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
  createCollectionRuleSet: {
    args: Record<MutationCreateCollectionRuleSetArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: CollectionRuleSetCreateInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRuleSet> | prisma.CollectionRuleSet;
  }
  updateManyCollectionRuleSets: {
    args: Record<MutationUpdateManyCollectionRuleSetsArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: CollectionRuleSetUpdateManyMutationInput, where?: CollectionRuleSetWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
  deleteManyCollectionRuleSets: {
    args: Record<MutationDeleteManyCollectionRuleSetsArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where?: CollectionRuleSetWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
  createImage: {
    args: Record<MutationCreateImageArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: ImageCreateInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Image> | prisma.Image;
  }
  updateImage: {
    args: Record<MutationUpdateImageArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: ImageUpdateInput, where: ImageWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Image | null> | prisma.Image | null;
  }
  updateManyImages: {
    args: Record<MutationUpdateManyImagesArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: ImageUpdateManyMutationInput, where?: ImageWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
  upsertImage: {
    args: Record<MutationUpsertImageArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where: ImageWhereUniqueInput, create: ImageCreateInput, update: ImageUpdateInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Image> | prisma.Image;
  }
  deleteImage: {
    args: Record<MutationDeleteImageArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where: ImageWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Image | null> | prisma.Image | null;
  }
  deleteManyImages: {
    args: Record<MutationDeleteManyImagesArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where?: ImageWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
  createOption: {
    args: Record<MutationCreateOptionArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: OptionCreateInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Option> | prisma.Option;
  }
  updateOption: {
    args: Record<MutationUpdateOptionArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: OptionUpdateInput, where: OptionWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Option | null> | prisma.Option | null;
  }
  updateManyOptions: {
    args: Record<MutationUpdateManyOptionsArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: OptionUpdateManyMutationInput, where?: OptionWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
  upsertOption: {
    args: Record<MutationUpsertOptionArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where: OptionWhereUniqueInput, create: OptionCreateInput, update: OptionUpdateInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Option> | prisma.Option;
  }
  deleteOption: {
    args: Record<MutationDeleteOptionArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where: OptionWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Option | null> | prisma.Option | null;
  }
  deleteManyOptions: {
    args: Record<MutationDeleteManyOptionsArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where?: OptionWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
  createOptionValue: {
    args: Record<MutationCreateOptionValueArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: OptionValueCreateInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OptionValue> | prisma.OptionValue;
  }
  updateOptionValue: {
    args: Record<MutationUpdateOptionValueArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: OptionValueUpdateInput, where: OptionValueWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OptionValue | null> | prisma.OptionValue | null;
  }
  updateManyOptionValues: {
    args: Record<MutationUpdateManyOptionValuesArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: OptionValueUpdateManyMutationInput, where?: OptionValueWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
  upsertOptionValue: {
    args: Record<MutationUpsertOptionValueArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where: OptionValueWhereUniqueInput, create: OptionValueCreateInput, update: OptionValueUpdateInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OptionValue> | prisma.OptionValue;
  }
  deleteOptionValue: {
    args: Record<MutationDeleteOptionValueArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where: OptionValueWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OptionValue | null> | prisma.OptionValue | null;
  }
  deleteManyOptionValues: {
    args: Record<MutationDeleteManyOptionValuesArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where?: OptionValueWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
  createProduct: {
    args: Record<MutationCreateProductArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: ProductCreateInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Product> | prisma.Product;
  }
  updateProduct: {
    args: Record<MutationUpdateProductArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: ProductUpdateInput, where: ProductWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Product | null> | prisma.Product | null;
  }
  updateManyProducts: {
    args: Record<MutationUpdateManyProductsArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: ProductUpdateManyMutationInput, where?: ProductWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
  upsertProduct: {
    args: Record<MutationUpsertProductArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where: ProductWhereUniqueInput, create: ProductCreateInput, update: ProductUpdateInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Product> | prisma.Product;
  }
  deleteProduct: {
    args: Record<MutationDeleteProductArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where: ProductWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Product | null> | prisma.Product | null;
  }
  deleteManyProducts: {
    args: Record<MutationDeleteManyProductsArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where?: ProductWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
  createVariant: {
    args: Record<MutationCreateVariantArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: VariantCreateInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Variant> | prisma.Variant;
  }
  updateVariant: {
    args: Record<MutationUpdateVariantArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: VariantUpdateInput, where: VariantWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Variant | null> | prisma.Variant | null;
  }
  updateManyVariants: {
    args: Record<MutationUpdateManyVariantsArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { data: VariantUpdateManyMutationInput, where?: VariantWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
  upsertVariant: {
    args: Record<MutationUpsertVariantArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where: VariantWhereUniqueInput, create: VariantCreateInput, update: VariantUpdateInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Variant> | prisma.Variant;
  }
  deleteVariant: {
    args: Record<MutationDeleteVariantArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where: VariantWhereUniqueInput }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Variant | null> | prisma.Variant | null;
  }
  deleteManyVariants: {
    args: Record<MutationDeleteManyVariantsArgs, ArgDefinition>
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "Mutation">,
      args: { where?: VariantWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload;
  }
}
  

// Types for BatchPayload

type BatchPayloadObject =
  | BatchPayloadFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type BatchPayloadFields =
  | 'count'



  

export interface BatchPayloadFieldDetails<GenTypes = GraphQLNexusGen> {
  count: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "BatchPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<undefined> | undefined;
  }
}
  

// Types for Subscription

type SubscriptionObject =
  | SubscriptionFields
  | { name: 'attribute', args?: SubscriptionAttributeArgs[] | false, alias?: string  } 
  | { name: 'brand', args?: SubscriptionBrandArgs[] | false, alias?: string  } 
  | { name: 'collection', args?: SubscriptionCollectionArgs[] | false, alias?: string  } 
  | { name: 'collectionRule', args?: SubscriptionCollectionRuleArgs[] | false, alias?: string  } 
  | { name: 'collectionRuleSet', args?: SubscriptionCollectionRuleSetArgs[] | false, alias?: string  } 
  | { name: 'image', args?: SubscriptionImageArgs[] | false, alias?: string  } 
  | { name: 'option', args?: SubscriptionOptionArgs[] | false, alias?: string  } 
  | { name: 'optionValue', args?: SubscriptionOptionValueArgs[] | false, alias?: string  } 
  | { name: 'product', args?: SubscriptionProductArgs[] | false, alias?: string  } 
  | { name: 'variant', args?: SubscriptionVariantArgs[] | false, alias?: string  } 

type SubscriptionFields =
  | 'attribute'
  | 'brand'
  | 'collection'
  | 'collectionRule'
  | 'collectionRuleSet'
  | 'image'
  | 'option'
  | 'optionValue'
  | 'product'
  | 'variant'


type SubscriptionAttributeArgs =
  | 'where'
type SubscriptionBrandArgs =
  | 'where'
type SubscriptionCollectionArgs =
  | 'where'
type SubscriptionCollectionRuleArgs =
  | 'where'
type SubscriptionCollectionRuleSetArgs =
  | 'where'
type SubscriptionImageArgs =
  | 'where'
type SubscriptionOptionArgs =
  | 'where'
type SubscriptionOptionValueArgs =
  | 'where'
type SubscriptionProductArgs =
  | 'where'
type SubscriptionVariantArgs =
  | 'where'
  

export interface SubscriptionFieldDetails<GenTypes = GraphQLNexusGen> {
  attribute: {
    args: Record<SubscriptionAttributeArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Subscription">,
      args: { where?: AttributeSubscriptionWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AttributeSubscriptionPayload | null> | prisma.AttributeSubscriptionPayload | null;
  }
  brand: {
    args: Record<SubscriptionBrandArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Subscription">,
      args: { where?: BrandSubscriptionWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BrandSubscriptionPayload | null> | prisma.BrandSubscriptionPayload | null;
  }
  collection: {
    args: Record<SubscriptionCollectionArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Subscription">,
      args: { where?: CollectionSubscriptionWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionSubscriptionPayload | null> | prisma.CollectionSubscriptionPayload | null;
  }
  collectionRule: {
    args: Record<SubscriptionCollectionRuleArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Subscription">,
      args: { where?: CollectionRuleSubscriptionWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRuleSubscriptionPayload | null> | prisma.CollectionRuleSubscriptionPayload | null;
  }
  collectionRuleSet: {
    args: Record<SubscriptionCollectionRuleSetArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Subscription">,
      args: { where?: CollectionRuleSetSubscriptionWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRuleSetSubscriptionPayload | null> | prisma.CollectionRuleSetSubscriptionPayload | null;
  }
  image: {
    args: Record<SubscriptionImageArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Subscription">,
      args: { where?: ImageSubscriptionWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ImageSubscriptionPayload | null> | prisma.ImageSubscriptionPayload | null;
  }
  option: {
    args: Record<SubscriptionOptionArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Subscription">,
      args: { where?: OptionSubscriptionWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OptionSubscriptionPayload | null> | prisma.OptionSubscriptionPayload | null;
  }
  optionValue: {
    args: Record<SubscriptionOptionValueArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Subscription">,
      args: { where?: OptionValueSubscriptionWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OptionValueSubscriptionPayload | null> | prisma.OptionValueSubscriptionPayload | null;
  }
  product: {
    args: Record<SubscriptionProductArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Subscription">,
      args: { where?: ProductSubscriptionWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ProductSubscriptionPayload | null> | prisma.ProductSubscriptionPayload | null;
  }
  variant: {
    args: Record<SubscriptionVariantArgs, ArgDefinition>
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "Subscription">,
      args: { where?: VariantSubscriptionWhereInput | null }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.VariantSubscriptionPayload | null> | prisma.VariantSubscriptionPayload | null;
  }
}
  

// Types for AttributeSubscriptionPayload

type AttributeSubscriptionPayloadObject =
  | AttributeSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type AttributeSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface AttributeSubscriptionPayloadFieldDetails<GenTypes = GraphQLNexusGen> {
  mutation: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AttributeSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType;
  }
  node: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "AttributeSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Attribute | null> | prisma.Attribute | null;
  }
  updatedFields: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AttributeSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string[]> | string[];
  }
  previousValues: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "AttributeSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AttributePreviousValues | null> | prisma.AttributePreviousValues | null;
  }
}
  

// Types for AttributePreviousValues

type AttributePreviousValuesObject =
  | AttributePreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'key', args?: [] | false, alias?: string  } 
  | { name: 'value', args?: [] | false, alias?: string  } 

type AttributePreviousValuesFields =
  | 'id'
  | 'key'
  | 'value'



  

export interface AttributePreviousValuesFieldDetails<GenTypes = GraphQLNexusGen> {
  id: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AttributePreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  key: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AttributePreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  value: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "AttributePreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for BrandSubscriptionPayload

type BrandSubscriptionPayloadObject =
  | BrandSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type BrandSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface BrandSubscriptionPayloadFieldDetails<GenTypes = GraphQLNexusGen> {
  mutation: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "BrandSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType;
  }
  node: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "BrandSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand | null> | prisma.Brand | null;
  }
  updatedFields: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "BrandSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string[]> | string[];
  }
  previousValues: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "BrandSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BrandPreviousValues | null> | prisma.BrandPreviousValues | null;
  }
}
  

// Types for BrandPreviousValues

type BrandPreviousValuesObject =
  | BrandPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 

type BrandPreviousValuesFields =
  | 'id'
  | 'name'



  

export interface BrandPreviousValuesFieldDetails<GenTypes = GraphQLNexusGen> {
  id: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "BrandPreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  name: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "BrandPreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for CollectionSubscriptionPayload

type CollectionSubscriptionPayloadObject =
  | CollectionSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type CollectionSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface CollectionSubscriptionPayloadFieldDetails<GenTypes = GraphQLNexusGen> {
  mutation: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType;
  }
  node: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "CollectionSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Collection | null> | prisma.Collection | null;
  }
  updatedFields: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string[]> | string[];
  }
  previousValues: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "CollectionSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionPreviousValues | null> | prisma.CollectionPreviousValues | null;
  }
}
  

// Types for CollectionPreviousValues

type CollectionPreviousValuesObject =
  | CollectionPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 

type CollectionPreviousValuesFields =
  | 'id'
  | 'name'



  

export interface CollectionPreviousValuesFieldDetails<GenTypes = GraphQLNexusGen> {
  id: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionPreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  name: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionPreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for CollectionRuleSubscriptionPayload

type CollectionRuleSubscriptionPayloadObject =
  | CollectionRuleSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type CollectionRuleSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface CollectionRuleSubscriptionPayloadFieldDetails<GenTypes = GraphQLNexusGen> {
  mutation: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType;
  }
  node: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRule | null> | prisma.CollectionRule | null;
  }
  updatedFields: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string[]> | string[];
  }
  previousValues: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRulePreviousValues | null> | prisma.CollectionRulePreviousValues | null;
  }
}
  

// Types for CollectionRulePreviousValues

type CollectionRulePreviousValuesObject =
  | CollectionRulePreviousValuesFields
  | { name: 'field', args?: [] | false, alias?: string  } 
  | { name: 'relation', args?: [] | false, alias?: string  } 
  | { name: 'value', args?: [] | false, alias?: string  } 

type CollectionRulePreviousValuesFields =
  | 'field'
  | 'relation'
  | 'value'



  

export interface CollectionRulePreviousValuesFieldDetails<GenTypes = GraphQLNexusGen> {
  field: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRulePreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRuleField> | prisma.CollectionRuleField;
  }
  relation: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRulePreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRuleRelation> | prisma.CollectionRuleRelation;
  }
  value: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRulePreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for CollectionRuleSetSubscriptionPayload

type CollectionRuleSetSubscriptionPayloadObject =
  | CollectionRuleSetSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type CollectionRuleSetSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface CollectionRuleSetSubscriptionPayloadFieldDetails<GenTypes = GraphQLNexusGen> {
  mutation: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleSetSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType;
  }
  node: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleSetSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRuleSet | null> | prisma.CollectionRuleSet | null;
  }
  updatedFields: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleSetSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string[]> | string[];
  }
  previousValues: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleSetSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.CollectionRuleSetPreviousValues | null> | prisma.CollectionRuleSetPreviousValues | null;
  }
}
  

// Types for CollectionRuleSetPreviousValues

type CollectionRuleSetPreviousValuesObject =
  | CollectionRuleSetPreviousValuesFields
  | { name: 'appliesDisjunctively', args?: [] | false, alias?: string  } 

type CollectionRuleSetPreviousValuesFields =
  | 'appliesDisjunctively'



  

export interface CollectionRuleSetPreviousValuesFieldDetails<GenTypes = GraphQLNexusGen> {
  appliesDisjunctively: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "CollectionRuleSetPreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<boolean> | boolean;
  }
}
  

// Types for ImageSubscriptionPayload

type ImageSubscriptionPayloadObject =
  | ImageSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type ImageSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface ImageSubscriptionPayloadFieldDetails<GenTypes = GraphQLNexusGen> {
  mutation: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "ImageSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType;
  }
  node: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "ImageSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Image | null> | prisma.Image | null;
  }
  updatedFields: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "ImageSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string[]> | string[];
  }
  previousValues: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "ImageSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ImagePreviousValues | null> | prisma.ImagePreviousValues | null;
  }
}
  

// Types for ImagePreviousValues

type ImagePreviousValuesObject =
  | ImagePreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'url', args?: [] | false, alias?: string  } 

type ImagePreviousValuesFields =
  | 'id'
  | 'url'



  

export interface ImagePreviousValuesFieldDetails<GenTypes = GraphQLNexusGen> {
  id: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "ImagePreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  url: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "ImagePreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for OptionSubscriptionPayload

type OptionSubscriptionPayloadObject =
  | OptionSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type OptionSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface OptionSubscriptionPayloadFieldDetails<GenTypes = GraphQLNexusGen> {
  mutation: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType;
  }
  node: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "OptionSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Option | null> | prisma.Option | null;
  }
  updatedFields: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string[]> | string[];
  }
  previousValues: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "OptionSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OptionPreviousValues | null> | prisma.OptionPreviousValues | null;
  }
}
  

// Types for OptionPreviousValues

type OptionPreviousValuesObject =
  | OptionPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 

type OptionPreviousValuesFields =
  | 'id'
  | 'name'



  

export interface OptionPreviousValuesFieldDetails<GenTypes = GraphQLNexusGen> {
  id: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionPreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  name: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionPreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for OptionValueSubscriptionPayload

type OptionValueSubscriptionPayloadObject =
  | OptionValueSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type OptionValueSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface OptionValueSubscriptionPayloadFieldDetails<GenTypes = GraphQLNexusGen> {
  mutation: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionValueSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType;
  }
  node: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "OptionValueSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OptionValue | null> | prisma.OptionValue | null;
  }
  updatedFields: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionValueSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string[]> | string[];
  }
  previousValues: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "OptionValueSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.OptionValuePreviousValues | null> | prisma.OptionValuePreviousValues | null;
  }
}
  

// Types for OptionValuePreviousValues

type OptionValuePreviousValuesObject =
  | OptionValuePreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 

type OptionValuePreviousValuesFields =
  | 'id'
  | 'name'



  

export interface OptionValuePreviousValuesFieldDetails<GenTypes = GraphQLNexusGen> {
  id: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionValuePreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  name: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "OptionValuePreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for ProductSubscriptionPayload

type ProductSubscriptionPayloadObject =
  | ProductSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type ProductSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface ProductSubscriptionPayloadFieldDetails<GenTypes = GraphQLNexusGen> {
  mutation: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "ProductSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType;
  }
  node: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "ProductSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Product | null> | prisma.Product | null;
  }
  updatedFields: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "ProductSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string[]> | string[];
  }
  previousValues: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "ProductSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ProductPreviousValues | null> | prisma.ProductPreviousValues | null;
  }
}
  

// Types for ProductPreviousValues

type ProductPreviousValuesObject =
  | ProductPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 

type ProductPreviousValuesFields =
  | 'id'
  | 'name'



  

export interface ProductPreviousValuesFieldDetails<GenTypes = GraphQLNexusGen> {
  id: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "ProductPreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  name: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "ProductPreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
}
  

// Types for VariantSubscriptionPayload

type VariantSubscriptionPayloadObject =
  | VariantSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type VariantSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface VariantSubscriptionPayloadFieldDetails<GenTypes = GraphQLNexusGen> {
  mutation: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "VariantSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType;
  }
  node: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "VariantSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Variant | null> | prisma.Variant | null;
  }
  updatedFields: {
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "VariantSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string[]> | string[];
  }
  previousValues: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "VariantSubscriptionPayload">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.VariantPreviousValues | null> | prisma.VariantPreviousValues | null;
  }
}
  

// Types for VariantPreviousValues

type VariantPreviousValuesObject =
  | VariantPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'price', args?: [] | false, alias?: string  } 
  | { name: 'availableForSale', args?: [] | false, alias?: string  } 
  | { name: 'sku', args?: [] | false, alias?: string  } 

type VariantPreviousValuesFields =
  | 'id'
  | 'price'
  | 'availableForSale'
  | 'sku'



  

export interface VariantPreviousValuesFieldDetails<GenTypes = GraphQLNexusGen> {
  id: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "VariantPreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string> | string;
  }
  price: {
    args: {}
    description: string
    list: false
    nullable: false
    resolve: (
      root: RootValue<GenTypes, "VariantPreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<number> | number;
  }
  availableForSale: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "VariantPreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<boolean | null> | boolean | null;
  }
  sku: {
    args: {}
    description: string
    list: false
    nullable: true
    resolve: (
      root: RootValue<GenTypes, "VariantPreviousValues">,
      args: {  }  ,
      context: ContextValue<GenTypes>,
      info?: GraphQLResolveInfo
    ) => Promise<string | null> | string | null;
  }
}
  


export interface AttributeWhereUniqueInput {
  id?: string | null
}
  
export interface ProductWhereInput {
  id?: string | null
  id_not?: string | null
  id_in: string[]
  id_not_in: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in: string[]
  name_not_in: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  brand?: BrandWhereInput | null
  image?: ImageWhereInput | null
  variants_every?: VariantWhereInput | null
  variants_some?: VariantWhereInput | null
  variants_none?: VariantWhereInput | null
  collections_every?: CollectionWhereInput | null
  collections_some?: CollectionWhereInput | null
  collections_none?: CollectionWhereInput | null
  attributes_every?: AttributeWhereInput | null
  attributes_some?: AttributeWhereInput | null
  attributes_none?: AttributeWhereInput | null
  AND: ProductWhereInput[]
  OR: ProductWhereInput[]
  NOT: ProductWhereInput[]
}
  
export interface BrandWhereInput {
  id?: string | null
  id_not?: string | null
  id_in: string[]
  id_not_in: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in: string[]
  name_not_in: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  products_every?: ProductWhereInput | null
  products_some?: ProductWhereInput | null
  products_none?: ProductWhereInput | null
  AND: BrandWhereInput[]
  OR: BrandWhereInput[]
  NOT: BrandWhereInput[]
}
  
export interface ImageWhereInput {
  id?: string | null
  id_not?: string | null
  id_in: string[]
  id_not_in: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  url?: string | null
  url_not?: string | null
  url_in: string[]
  url_not_in: string[]
  url_lt?: string | null
  url_lte?: string | null
  url_gt?: string | null
  url_gte?: string | null
  url_contains?: string | null
  url_not_contains?: string | null
  url_starts_with?: string | null
  url_not_starts_with?: string | null
  url_ends_with?: string | null
  url_not_ends_with?: string | null
  AND: ImageWhereInput[]
  OR: ImageWhereInput[]
  NOT: ImageWhereInput[]
}
  
export interface VariantWhereInput {
  id?: string | null
  id_not?: string | null
  id_in: string[]
  id_not_in: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  optionValues_every?: OptionValueWhereInput | null
  optionValues_some?: OptionValueWhereInput | null
  optionValues_none?: OptionValueWhereInput | null
  price?: number | null
  price_not?: number | null
  price_in: number[]
  price_not_in: number[]
  price_lt?: number | null
  price_lte?: number | null
  price_gt?: number | null
  price_gte?: number | null
  availableForSale?: boolean | null
  availableForSale_not?: boolean | null
  sku?: string | null
  sku_not?: string | null
  sku_in: string[]
  sku_not_in: string[]
  sku_lt?: string | null
  sku_lte?: string | null
  sku_gt?: string | null
  sku_gte?: string | null
  sku_contains?: string | null
  sku_not_contains?: string | null
  sku_starts_with?: string | null
  sku_not_starts_with?: string | null
  sku_ends_with?: string | null
  sku_not_ends_with?: string | null
  image?: ImageWhereInput | null
  AND: VariantWhereInput[]
  OR: VariantWhereInput[]
  NOT: VariantWhereInput[]
}
  
export interface OptionValueWhereInput {
  id?: string | null
  id_not?: string | null
  id_in: string[]
  id_not_in: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in: string[]
  name_not_in: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  option?: OptionWhereInput | null
  AND: OptionValueWhereInput[]
  OR: OptionValueWhereInput[]
  NOT: OptionValueWhereInput[]
}
  
export interface OptionWhereInput {
  id?: string | null
  id_not?: string | null
  id_in: string[]
  id_not_in: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in: string[]
  name_not_in: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  values_every?: OptionValueWhereInput | null
  values_some?: OptionValueWhereInput | null
  values_none?: OptionValueWhereInput | null
  AND: OptionWhereInput[]
  OR: OptionWhereInput[]
  NOT: OptionWhereInput[]
}
  
export interface CollectionWhereInput {
  id?: string | null
  id_not?: string | null
  id_in: string[]
  id_not_in: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in: string[]
  name_not_in: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  rules?: CollectionRuleSetWhereInput | null
  products_every?: ProductWhereInput | null
  products_some?: ProductWhereInput | null
  products_none?: ProductWhereInput | null
  AND: CollectionWhereInput[]
  OR: CollectionWhereInput[]
  NOT: CollectionWhereInput[]
}
  
export interface CollectionRuleSetWhereInput {
  rules_every?: CollectionRuleWhereInput | null
  rules_some?: CollectionRuleWhereInput | null
  rules_none?: CollectionRuleWhereInput | null
  appliesDisjunctively?: boolean | null
  appliesDisjunctively_not?: boolean | null
  AND: CollectionRuleSetWhereInput[]
  OR: CollectionRuleSetWhereInput[]
  NOT: CollectionRuleSetWhereInput[]
}
  
export interface CollectionRuleWhereInput {
  field?: prisma.CollectionRuleField | null
  field_not?: prisma.CollectionRuleField | null
  field_in: prisma.CollectionRuleField[]
  field_not_in: prisma.CollectionRuleField[]
  relation?: prisma.CollectionRuleRelation | null
  relation_not?: prisma.CollectionRuleRelation | null
  relation_in: prisma.CollectionRuleRelation[]
  relation_not_in: prisma.CollectionRuleRelation[]
  value?: string | null
  value_not?: string | null
  value_in: string[]
  value_not_in: string[]
  value_lt?: string | null
  value_lte?: string | null
  value_gt?: string | null
  value_gte?: string | null
  value_contains?: string | null
  value_not_contains?: string | null
  value_starts_with?: string | null
  value_not_starts_with?: string | null
  value_ends_with?: string | null
  value_not_ends_with?: string | null
  AND: CollectionRuleWhereInput[]
  OR: CollectionRuleWhereInput[]
  NOT: CollectionRuleWhereInput[]
}
  
export interface AttributeWhereInput {
  id?: string | null
  id_not?: string | null
  id_in: string[]
  id_not_in: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  key?: string | null
  key_not?: string | null
  key_in: string[]
  key_not_in: string[]
  key_lt?: string | null
  key_lte?: string | null
  key_gt?: string | null
  key_gte?: string | null
  key_contains?: string | null
  key_not_contains?: string | null
  key_starts_with?: string | null
  key_not_starts_with?: string | null
  key_ends_with?: string | null
  key_not_ends_with?: string | null
  value?: string | null
  value_not?: string | null
  value_in: string[]
  value_not_in: string[]
  value_lt?: string | null
  value_lte?: string | null
  value_gt?: string | null
  value_gte?: string | null
  value_contains?: string | null
  value_not_contains?: string | null
  value_starts_with?: string | null
  value_not_starts_with?: string | null
  value_ends_with?: string | null
  value_not_ends_with?: string | null
  products_every?: ProductWhereInput | null
  products_some?: ProductWhereInput | null
  products_none?: ProductWhereInput | null
  AND: AttributeWhereInput[]
  OR: AttributeWhereInput[]
  NOT: AttributeWhereInput[]
}
  
export interface BrandWhereUniqueInput {
  id?: string | null
}
  
export interface CollectionWhereUniqueInput {
  id?: string | null
}
  
export interface ImageWhereUniqueInput {
  id?: string | null
}
  
export interface OptionWhereUniqueInput {
  id?: string | null
}
  
export interface OptionValueWhereUniqueInput {
  id?: string | null
}
  
export interface ProductWhereUniqueInput {
  id?: string | null
}
  
export interface VariantWhereUniqueInput {
  id?: string | null
}
  
export interface AttributeCreateInput {
  key: string
  value: string
  products?: ProductCreateManyWithoutAttributesInput | null
}
  
export interface ProductCreateManyWithoutAttributesInput {
  create: ProductCreateWithoutAttributesInput[]
  connect: ProductWhereUniqueInput[]
}
  
export interface ProductCreateWithoutAttributesInput {
  name: string
  brand: BrandCreateOneWithoutProductsInput
  image?: ImageCreateOneInput | null
  variants?: VariantCreateManyInput | null
  collections?: CollectionCreateManyWithoutProductsInput | null
}
  
export interface BrandCreateOneWithoutProductsInput {
  create?: BrandCreateWithoutProductsInput | null
  connect?: BrandWhereUniqueInput | null
}
  
export interface BrandCreateWithoutProductsInput {
  name: string
}
  
export interface ImageCreateOneInput {
  create?: ImageCreateInput | null
  connect?: ImageWhereUniqueInput | null
}
  
export interface ImageCreateInput {
  url: string
}
  
export interface VariantCreateManyInput {
  create: VariantCreateInput[]
  connect: VariantWhereUniqueInput[]
}
  
export interface VariantCreateInput {
  optionValues?: OptionValueCreateManyInput | null
  price: number
  availableForSale?: boolean | null
  sku?: string | null
  image?: ImageCreateOneInput | null
}
  
export interface OptionValueCreateManyInput {
  create: OptionValueCreateInput[]
  connect: OptionValueWhereUniqueInput[]
}
  
export interface OptionValueCreateInput {
  name: string
  option: OptionCreateOneWithoutValuesInput
}
  
export interface OptionCreateOneWithoutValuesInput {
  create?: OptionCreateWithoutValuesInput | null
  connect?: OptionWhereUniqueInput | null
}
  
export interface OptionCreateWithoutValuesInput {
  name: string
}
  
export interface CollectionCreateManyWithoutProductsInput {
  create: CollectionCreateWithoutProductsInput[]
  connect: CollectionWhereUniqueInput[]
}
  
export interface CollectionCreateWithoutProductsInput {
  name: string
  rules?: CollectionRuleSetCreateOneInput | null
}
  
export interface CollectionRuleSetCreateOneInput {
  create?: CollectionRuleSetCreateInput | null
}
  
export interface CollectionRuleSetCreateInput {
  rules?: CollectionRuleCreateManyInput | null
  appliesDisjunctively: boolean
}
  
export interface CollectionRuleCreateManyInput {
  create: CollectionRuleCreateInput[]
}
  
export interface CollectionRuleCreateInput {
  field: prisma.CollectionRuleField
  relation: prisma.CollectionRuleRelation
  value: string
}
  
export interface AttributeUpdateInput {
  key?: string | null
  value?: string | null
  products?: ProductUpdateManyWithoutAttributesInput | null
}
  
export interface ProductUpdateManyWithoutAttributesInput {
  create: ProductCreateWithoutAttributesInput[]
  delete: ProductWhereUniqueInput[]
  connect: ProductWhereUniqueInput[]
  disconnect: ProductWhereUniqueInput[]
  update: ProductUpdateWithWhereUniqueWithoutAttributesInput[]
  upsert: ProductUpsertWithWhereUniqueWithoutAttributesInput[]
  deleteMany: ProductScalarWhereInput[]
  updateMany: ProductUpdateManyWithWhereNestedInput[]
}
  
export interface ProductUpdateWithWhereUniqueWithoutAttributesInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateWithoutAttributesDataInput
}
  
export interface ProductUpdateWithoutAttributesDataInput {
  name?: string | null
  brand?: BrandUpdateOneRequiredWithoutProductsInput | null
  image?: ImageUpdateOneInput | null
  variants?: VariantUpdateManyInput | null
  collections?: CollectionUpdateManyWithoutProductsInput | null
}
  
export interface BrandUpdateOneRequiredWithoutProductsInput {
  create?: BrandCreateWithoutProductsInput | null
  update?: BrandUpdateWithoutProductsDataInput | null
  upsert?: BrandUpsertWithoutProductsInput | null
  connect?: BrandWhereUniqueInput | null
}
  
export interface BrandUpdateWithoutProductsDataInput {
  name?: string | null
}
  
export interface BrandUpsertWithoutProductsInput {
  update: BrandUpdateWithoutProductsDataInput
  create: BrandCreateWithoutProductsInput
}
  
export interface ImageUpdateOneInput {
  create?: ImageCreateInput | null
  update?: ImageUpdateDataInput | null
  upsert?: ImageUpsertNestedInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: ImageWhereUniqueInput | null
}
  
export interface ImageUpdateDataInput {
  url?: string | null
}
  
export interface ImageUpsertNestedInput {
  update: ImageUpdateDataInput
  create: ImageCreateInput
}
  
export interface VariantUpdateManyInput {
  create: VariantCreateInput[]
  update: VariantUpdateWithWhereUniqueNestedInput[]
  upsert: VariantUpsertWithWhereUniqueNestedInput[]
  delete: VariantWhereUniqueInput[]
  connect: VariantWhereUniqueInput[]
  disconnect: VariantWhereUniqueInput[]
  deleteMany: VariantScalarWhereInput[]
  updateMany: VariantUpdateManyWithWhereNestedInput[]
}
  
export interface VariantUpdateWithWhereUniqueNestedInput {
  where: VariantWhereUniqueInput
  data: VariantUpdateDataInput
}
  
export interface VariantUpdateDataInput {
  optionValues?: OptionValueUpdateManyInput | null
  price?: number | null
  availableForSale?: boolean | null
  sku?: string | null
  image?: ImageUpdateOneInput | null
}
  
export interface OptionValueUpdateManyInput {
  create: OptionValueCreateInput[]
  update: OptionValueUpdateWithWhereUniqueNestedInput[]
  upsert: OptionValueUpsertWithWhereUniqueNestedInput[]
  delete: OptionValueWhereUniqueInput[]
  connect: OptionValueWhereUniqueInput[]
  disconnect: OptionValueWhereUniqueInput[]
  deleteMany: OptionValueScalarWhereInput[]
  updateMany: OptionValueUpdateManyWithWhereNestedInput[]
}
  
export interface OptionValueUpdateWithWhereUniqueNestedInput {
  where: OptionValueWhereUniqueInput
  data: OptionValueUpdateDataInput
}
  
export interface OptionValueUpdateDataInput {
  name?: string | null
  option?: OptionUpdateOneRequiredWithoutValuesInput | null
}
  
export interface OptionUpdateOneRequiredWithoutValuesInput {
  create?: OptionCreateWithoutValuesInput | null
  update?: OptionUpdateWithoutValuesDataInput | null
  upsert?: OptionUpsertWithoutValuesInput | null
  connect?: OptionWhereUniqueInput | null
}
  
export interface OptionUpdateWithoutValuesDataInput {
  name?: string | null
}
  
export interface OptionUpsertWithoutValuesInput {
  update: OptionUpdateWithoutValuesDataInput
  create: OptionCreateWithoutValuesInput
}
  
export interface OptionValueUpsertWithWhereUniqueNestedInput {
  where: OptionValueWhereUniqueInput
  update: OptionValueUpdateDataInput
  create: OptionValueCreateInput
}
  
export interface OptionValueScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in: string[]
  id_not_in: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in: string[]
  name_not_in: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  AND: OptionValueScalarWhereInput[]
  OR: OptionValueScalarWhereInput[]
  NOT: OptionValueScalarWhereInput[]
}
  
export interface OptionValueUpdateManyWithWhereNestedInput {
  where: OptionValueScalarWhereInput
  data: OptionValueUpdateManyDataInput
}
  
export interface OptionValueUpdateManyDataInput {
  name?: string | null
}
  
export interface VariantUpsertWithWhereUniqueNestedInput {
  where: VariantWhereUniqueInput
  update: VariantUpdateDataInput
  create: VariantCreateInput
}
  
export interface VariantScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in: string[]
  id_not_in: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  price?: number | null
  price_not?: number | null
  price_in: number[]
  price_not_in: number[]
  price_lt?: number | null
  price_lte?: number | null
  price_gt?: number | null
  price_gte?: number | null
  availableForSale?: boolean | null
  availableForSale_not?: boolean | null
  sku?: string | null
  sku_not?: string | null
  sku_in: string[]
  sku_not_in: string[]
  sku_lt?: string | null
  sku_lte?: string | null
  sku_gt?: string | null
  sku_gte?: string | null
  sku_contains?: string | null
  sku_not_contains?: string | null
  sku_starts_with?: string | null
  sku_not_starts_with?: string | null
  sku_ends_with?: string | null
  sku_not_ends_with?: string | null
  AND: VariantScalarWhereInput[]
  OR: VariantScalarWhereInput[]
  NOT: VariantScalarWhereInput[]
}
  
export interface VariantUpdateManyWithWhereNestedInput {
  where: VariantScalarWhereInput
  data: VariantUpdateManyDataInput
}
  
export interface VariantUpdateManyDataInput {
  price?: number | null
  availableForSale?: boolean | null
  sku?: string | null
}
  
export interface CollectionUpdateManyWithoutProductsInput {
  create: CollectionCreateWithoutProductsInput[]
  delete: CollectionWhereUniqueInput[]
  connect: CollectionWhereUniqueInput[]
  disconnect: CollectionWhereUniqueInput[]
  update: CollectionUpdateWithWhereUniqueWithoutProductsInput[]
  upsert: CollectionUpsertWithWhereUniqueWithoutProductsInput[]
  deleteMany: CollectionScalarWhereInput[]
  updateMany: CollectionUpdateManyWithWhereNestedInput[]
}
  
export interface CollectionUpdateWithWhereUniqueWithoutProductsInput {
  where: CollectionWhereUniqueInput
  data: CollectionUpdateWithoutProductsDataInput
}
  
export interface CollectionUpdateWithoutProductsDataInput {
  name?: string | null
  rules?: CollectionRuleSetUpdateOneInput | null
}
  
export interface CollectionRuleSetUpdateOneInput {
  create?: CollectionRuleSetCreateInput | null
  update?: CollectionRuleSetUpdateDataInput | null
  upsert?: CollectionRuleSetUpsertNestedInput | null
  delete?: boolean | null
  disconnect?: boolean | null
}
  
export interface CollectionRuleSetUpdateDataInput {
  rules?: CollectionRuleUpdateManyInput | null
  appliesDisjunctively?: boolean | null
}
  
export interface CollectionRuleUpdateManyInput {
  create: CollectionRuleCreateInput[]
  deleteMany: CollectionRuleScalarWhereInput[]
  updateMany: CollectionRuleUpdateManyWithWhereNestedInput[]
}
  
export interface CollectionRuleScalarWhereInput {
  field?: prisma.CollectionRuleField | null
  field_not?: prisma.CollectionRuleField | null
  field_in: prisma.CollectionRuleField[]
  field_not_in: prisma.CollectionRuleField[]
  relation?: prisma.CollectionRuleRelation | null
  relation_not?: prisma.CollectionRuleRelation | null
  relation_in: prisma.CollectionRuleRelation[]
  relation_not_in: prisma.CollectionRuleRelation[]
  value?: string | null
  value_not?: string | null
  value_in: string[]
  value_not_in: string[]
  value_lt?: string | null
  value_lte?: string | null
  value_gt?: string | null
  value_gte?: string | null
  value_contains?: string | null
  value_not_contains?: string | null
  value_starts_with?: string | null
  value_not_starts_with?: string | null
  value_ends_with?: string | null
  value_not_ends_with?: string | null
  AND: CollectionRuleScalarWhereInput[]
  OR: CollectionRuleScalarWhereInput[]
  NOT: CollectionRuleScalarWhereInput[]
}
  
export interface CollectionRuleUpdateManyWithWhereNestedInput {
  where: CollectionRuleScalarWhereInput
  data: CollectionRuleUpdateManyDataInput
}
  
export interface CollectionRuleUpdateManyDataInput {
  field?: prisma.CollectionRuleField | null
  relation?: prisma.CollectionRuleRelation | null
  value?: string | null
}
  
export interface CollectionRuleSetUpsertNestedInput {
  update: CollectionRuleSetUpdateDataInput
  create: CollectionRuleSetCreateInput
}
  
export interface CollectionUpsertWithWhereUniqueWithoutProductsInput {
  where: CollectionWhereUniqueInput
  update: CollectionUpdateWithoutProductsDataInput
  create: CollectionCreateWithoutProductsInput
}
  
export interface CollectionScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in: string[]
  id_not_in: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in: string[]
  name_not_in: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  AND: CollectionScalarWhereInput[]
  OR: CollectionScalarWhereInput[]
  NOT: CollectionScalarWhereInput[]
}
  
export interface CollectionUpdateManyWithWhereNestedInput {
  where: CollectionScalarWhereInput
  data: CollectionUpdateManyDataInput
}
  
export interface CollectionUpdateManyDataInput {
  name?: string | null
}
  
export interface ProductUpsertWithWhereUniqueWithoutAttributesInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateWithoutAttributesDataInput
  create: ProductCreateWithoutAttributesInput
}
  
export interface ProductScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in: string[]
  id_not_in: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in: string[]
  name_not_in: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  AND: ProductScalarWhereInput[]
  OR: ProductScalarWhereInput[]
  NOT: ProductScalarWhereInput[]
}
  
export interface ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput
  data: ProductUpdateManyDataInput
}
  
export interface ProductUpdateManyDataInput {
  name?: string | null
}
  
export interface AttributeUpdateManyMutationInput {
  key?: string | null
  value?: string | null
}
  
export interface BrandCreateInput {
  name: string
  products?: ProductCreateManyWithoutBrandInput | null
}
  
export interface ProductCreateManyWithoutBrandInput {
  create: ProductCreateWithoutBrandInput[]
  connect: ProductWhereUniqueInput[]
}
  
export interface ProductCreateWithoutBrandInput {
  name: string
  image?: ImageCreateOneInput | null
  variants?: VariantCreateManyInput | null
  collections?: CollectionCreateManyWithoutProductsInput | null
  attributes?: AttributeCreateManyWithoutProductsInput | null
}
  
export interface AttributeCreateManyWithoutProductsInput {
  create: AttributeCreateWithoutProductsInput[]
  connect: AttributeWhereUniqueInput[]
}
  
export interface AttributeCreateWithoutProductsInput {
  key: string
  value: string
}
  
export interface BrandUpdateInput {
  name?: string | null
  products?: ProductUpdateManyWithoutBrandInput | null
}
  
export interface ProductUpdateManyWithoutBrandInput {
  create: ProductCreateWithoutBrandInput[]
  delete: ProductWhereUniqueInput[]
  connect: ProductWhereUniqueInput[]
  disconnect: ProductWhereUniqueInput[]
  update: ProductUpdateWithWhereUniqueWithoutBrandInput[]
  upsert: ProductUpsertWithWhereUniqueWithoutBrandInput[]
  deleteMany: ProductScalarWhereInput[]
  updateMany: ProductUpdateManyWithWhereNestedInput[]
}
  
export interface ProductUpdateWithWhereUniqueWithoutBrandInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateWithoutBrandDataInput
}
  
export interface ProductUpdateWithoutBrandDataInput {
  name?: string | null
  image?: ImageUpdateOneInput | null
  variants?: VariantUpdateManyInput | null
  collections?: CollectionUpdateManyWithoutProductsInput | null
  attributes?: AttributeUpdateManyWithoutProductsInput | null
}
  
export interface AttributeUpdateManyWithoutProductsInput {
  create: AttributeCreateWithoutProductsInput[]
  delete: AttributeWhereUniqueInput[]
  connect: AttributeWhereUniqueInput[]
  disconnect: AttributeWhereUniqueInput[]
  update: AttributeUpdateWithWhereUniqueWithoutProductsInput[]
  upsert: AttributeUpsertWithWhereUniqueWithoutProductsInput[]
  deleteMany: AttributeScalarWhereInput[]
  updateMany: AttributeUpdateManyWithWhereNestedInput[]
}
  
export interface AttributeUpdateWithWhereUniqueWithoutProductsInput {
  where: AttributeWhereUniqueInput
  data: AttributeUpdateWithoutProductsDataInput
}
  
export interface AttributeUpdateWithoutProductsDataInput {
  key?: string | null
  value?: string | null
}
  
export interface AttributeUpsertWithWhereUniqueWithoutProductsInput {
  where: AttributeWhereUniqueInput
  update: AttributeUpdateWithoutProductsDataInput
  create: AttributeCreateWithoutProductsInput
}
  
export interface AttributeScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in: string[]
  id_not_in: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  key?: string | null
  key_not?: string | null
  key_in: string[]
  key_not_in: string[]
  key_lt?: string | null
  key_lte?: string | null
  key_gt?: string | null
  key_gte?: string | null
  key_contains?: string | null
  key_not_contains?: string | null
  key_starts_with?: string | null
  key_not_starts_with?: string | null
  key_ends_with?: string | null
  key_not_ends_with?: string | null
  value?: string | null
  value_not?: string | null
  value_in: string[]
  value_not_in: string[]
  value_lt?: string | null
  value_lte?: string | null
  value_gt?: string | null
  value_gte?: string | null
  value_contains?: string | null
  value_not_contains?: string | null
  value_starts_with?: string | null
  value_not_starts_with?: string | null
  value_ends_with?: string | null
  value_not_ends_with?: string | null
  AND: AttributeScalarWhereInput[]
  OR: AttributeScalarWhereInput[]
  NOT: AttributeScalarWhereInput[]
}
  
export interface AttributeUpdateManyWithWhereNestedInput {
  where: AttributeScalarWhereInput
  data: AttributeUpdateManyDataInput
}
  
export interface AttributeUpdateManyDataInput {
  key?: string | null
  value?: string | null
}
  
export interface ProductUpsertWithWhereUniqueWithoutBrandInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateWithoutBrandDataInput
  create: ProductCreateWithoutBrandInput
}
  
export interface BrandUpdateManyMutationInput {
  name?: string | null
}
  
export interface CollectionCreateInput {
  name: string
  rules?: CollectionRuleSetCreateOneInput | null
  products?: ProductCreateManyWithoutCollectionsInput | null
}
  
export interface ProductCreateManyWithoutCollectionsInput {
  create: ProductCreateWithoutCollectionsInput[]
  connect: ProductWhereUniqueInput[]
}
  
export interface ProductCreateWithoutCollectionsInput {
  name: string
  brand: BrandCreateOneWithoutProductsInput
  image?: ImageCreateOneInput | null
  variants?: VariantCreateManyInput | null
  attributes?: AttributeCreateManyWithoutProductsInput | null
}
  
export interface CollectionUpdateInput {
  name?: string | null
  rules?: CollectionRuleSetUpdateOneInput | null
  products?: ProductUpdateManyWithoutCollectionsInput | null
}
  
export interface ProductUpdateManyWithoutCollectionsInput {
  create: ProductCreateWithoutCollectionsInput[]
  delete: ProductWhereUniqueInput[]
  connect: ProductWhereUniqueInput[]
  disconnect: ProductWhereUniqueInput[]
  update: ProductUpdateWithWhereUniqueWithoutCollectionsInput[]
  upsert: ProductUpsertWithWhereUniqueWithoutCollectionsInput[]
  deleteMany: ProductScalarWhereInput[]
  updateMany: ProductUpdateManyWithWhereNestedInput[]
}
  
export interface ProductUpdateWithWhereUniqueWithoutCollectionsInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateWithoutCollectionsDataInput
}
  
export interface ProductUpdateWithoutCollectionsDataInput {
  name?: string | null
  brand?: BrandUpdateOneRequiredWithoutProductsInput | null
  image?: ImageUpdateOneInput | null
  variants?: VariantUpdateManyInput | null
  attributes?: AttributeUpdateManyWithoutProductsInput | null
}
  
export interface ProductUpsertWithWhereUniqueWithoutCollectionsInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateWithoutCollectionsDataInput
  create: ProductCreateWithoutCollectionsInput
}
  
export interface CollectionUpdateManyMutationInput {
  name?: string | null
}
  
export interface CollectionRuleUpdateManyMutationInput {
  field?: prisma.CollectionRuleField | null
  relation?: prisma.CollectionRuleRelation | null
  value?: string | null
}
  
export interface CollectionRuleSetUpdateManyMutationInput {
  appliesDisjunctively?: boolean | null
}
  
export interface ImageUpdateInput {
  url?: string | null
}
  
export interface ImageUpdateManyMutationInput {
  url?: string | null
}
  
export interface OptionCreateInput {
  name: string
  values?: OptionValueCreateManyWithoutOptionInput | null
}
  
export interface OptionValueCreateManyWithoutOptionInput {
  create: OptionValueCreateWithoutOptionInput[]
  connect: OptionValueWhereUniqueInput[]
}
  
export interface OptionValueCreateWithoutOptionInput {
  name: string
}
  
export interface OptionUpdateInput {
  name?: string | null
  values?: OptionValueUpdateManyWithoutOptionInput | null
}
  
export interface OptionValueUpdateManyWithoutOptionInput {
  create: OptionValueCreateWithoutOptionInput[]
  delete: OptionValueWhereUniqueInput[]
  connect: OptionValueWhereUniqueInput[]
  disconnect: OptionValueWhereUniqueInput[]
  update: OptionValueUpdateWithWhereUniqueWithoutOptionInput[]
  upsert: OptionValueUpsertWithWhereUniqueWithoutOptionInput[]
  deleteMany: OptionValueScalarWhereInput[]
  updateMany: OptionValueUpdateManyWithWhereNestedInput[]
}
  
export interface OptionValueUpdateWithWhereUniqueWithoutOptionInput {
  where: OptionValueWhereUniqueInput
  data: OptionValueUpdateWithoutOptionDataInput
}
  
export interface OptionValueUpdateWithoutOptionDataInput {
  name?: string | null
}
  
export interface OptionValueUpsertWithWhereUniqueWithoutOptionInput {
  where: OptionValueWhereUniqueInput
  update: OptionValueUpdateWithoutOptionDataInput
  create: OptionValueCreateWithoutOptionInput
}
  
export interface OptionUpdateManyMutationInput {
  name?: string | null
}
  
export interface OptionValueUpdateInput {
  name?: string | null
  option?: OptionUpdateOneRequiredWithoutValuesInput | null
}
  
export interface OptionValueUpdateManyMutationInput {
  name?: string | null
}
  
export interface ProductCreateInput {
  name: string
  brand: BrandCreateOneWithoutProductsInput
  image?: ImageCreateOneInput | null
  variants?: VariantCreateManyInput | null
  collections?: CollectionCreateManyWithoutProductsInput | null
  attributes?: AttributeCreateManyWithoutProductsInput | null
}
  
export interface ProductUpdateInput {
  name?: string | null
  brand?: BrandUpdateOneRequiredWithoutProductsInput | null
  image?: ImageUpdateOneInput | null
  variants?: VariantUpdateManyInput | null
  collections?: CollectionUpdateManyWithoutProductsInput | null
  attributes?: AttributeUpdateManyWithoutProductsInput | null
}
  
export interface ProductUpdateManyMutationInput {
  name?: string | null
}
  
export interface VariantUpdateInput {
  optionValues?: OptionValueUpdateManyInput | null
  price?: number | null
  availableForSale?: boolean | null
  sku?: string | null
  image?: ImageUpdateOneInput | null
}
  
export interface VariantUpdateManyMutationInput {
  price?: number | null
  availableForSale?: boolean | null
  sku?: string | null
}
  
export interface AttributeSubscriptionWhereInput {
  mutation_in: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every: string[]
  updatedFields_contains_some: string[]
  node?: AttributeWhereInput | null
  AND: AttributeSubscriptionWhereInput[]
  OR: AttributeSubscriptionWhereInput[]
  NOT: AttributeSubscriptionWhereInput[]
}
  
export interface BrandSubscriptionWhereInput {
  mutation_in: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every: string[]
  updatedFields_contains_some: string[]
  node?: BrandWhereInput | null
  AND: BrandSubscriptionWhereInput[]
  OR: BrandSubscriptionWhereInput[]
  NOT: BrandSubscriptionWhereInput[]
}
  
export interface CollectionSubscriptionWhereInput {
  mutation_in: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every: string[]
  updatedFields_contains_some: string[]
  node?: CollectionWhereInput | null
  AND: CollectionSubscriptionWhereInput[]
  OR: CollectionSubscriptionWhereInput[]
  NOT: CollectionSubscriptionWhereInput[]
}
  
export interface CollectionRuleSubscriptionWhereInput {
  mutation_in: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every: string[]
  updatedFields_contains_some: string[]
  node?: CollectionRuleWhereInput | null
  AND: CollectionRuleSubscriptionWhereInput[]
  OR: CollectionRuleSubscriptionWhereInput[]
  NOT: CollectionRuleSubscriptionWhereInput[]
}
  
export interface CollectionRuleSetSubscriptionWhereInput {
  mutation_in: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every: string[]
  updatedFields_contains_some: string[]
  node?: CollectionRuleSetWhereInput | null
  AND: CollectionRuleSetSubscriptionWhereInput[]
  OR: CollectionRuleSetSubscriptionWhereInput[]
  NOT: CollectionRuleSetSubscriptionWhereInput[]
}
  
export interface ImageSubscriptionWhereInput {
  mutation_in: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every: string[]
  updatedFields_contains_some: string[]
  node?: ImageWhereInput | null
  AND: ImageSubscriptionWhereInput[]
  OR: ImageSubscriptionWhereInput[]
  NOT: ImageSubscriptionWhereInput[]
}
  
export interface OptionSubscriptionWhereInput {
  mutation_in: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every: string[]
  updatedFields_contains_some: string[]
  node?: OptionWhereInput | null
  AND: OptionSubscriptionWhereInput[]
  OR: OptionSubscriptionWhereInput[]
  NOT: OptionSubscriptionWhereInput[]
}
  
export interface OptionValueSubscriptionWhereInput {
  mutation_in: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every: string[]
  updatedFields_contains_some: string[]
  node?: OptionValueWhereInput | null
  AND: OptionValueSubscriptionWhereInput[]
  OR: OptionValueSubscriptionWhereInput[]
  NOT: OptionValueSubscriptionWhereInput[]
}
  
export interface ProductSubscriptionWhereInput {
  mutation_in: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every: string[]
  updatedFields_contains_some: string[]
  node?: ProductWhereInput | null
  AND: ProductSubscriptionWhereInput[]
  OR: ProductSubscriptionWhereInput[]
  NOT: ProductSubscriptionWhereInput[]
}
  
export interface VariantSubscriptionWhereInput {
  mutation_in: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every: string[]
  updatedFields_contains_some: string[]
  node?: VariantWhereInput | null
  AND: VariantSubscriptionWhereInput[]
  OR: VariantSubscriptionWhereInput[]
  NOT: VariantSubscriptionWhereInput[]
}
  

export type enumTypesNames =
  | 'CollectionRuleField'
  | 'CollectionRuleRelation'
  | 'ProductOrderByInput'
  | 'VariantOrderByInput'
  | 'OptionValueOrderByInput'
  | 'CollectionOrderByInput'
  | 'CollectionRuleOrderByInput'
  | 'AttributeOrderByInput'
  | 'BrandOrderByInput'
  | 'CollectionRuleSetOrderByInput'
  | 'ImageOrderByInput'
  | 'OptionOrderByInput'
  | 'MutationType'
  

export interface PluginTypes {
  fields: {
    Query: QueryObject
    Attribute: AttributeObject
    Product: ProductObject
    Brand: BrandObject
    Image: ImageObject
    Variant: VariantObject
    OptionValue: OptionValueObject
    Option: OptionObject
    Collection: CollectionObject
    CollectionRuleSet: CollectionRuleSetObject
    CollectionRule: CollectionRuleObject
    AttributeConnection: AttributeConnectionObject
    PageInfo: PageInfoObject
    AttributeEdge: AttributeEdgeObject
    AggregateAttribute: AggregateAttributeObject
    BrandConnection: BrandConnectionObject
    BrandEdge: BrandEdgeObject
    AggregateBrand: AggregateBrandObject
    CollectionConnection: CollectionConnectionObject
    CollectionEdge: CollectionEdgeObject
    AggregateCollection: AggregateCollectionObject
    CollectionRuleConnection: CollectionRuleConnectionObject
    CollectionRuleEdge: CollectionRuleEdgeObject
    AggregateCollectionRule: AggregateCollectionRuleObject
    CollectionRuleSetConnection: CollectionRuleSetConnectionObject
    CollectionRuleSetEdge: CollectionRuleSetEdgeObject
    AggregateCollectionRuleSet: AggregateCollectionRuleSetObject
    ImageConnection: ImageConnectionObject
    ImageEdge: ImageEdgeObject
    AggregateImage: AggregateImageObject
    OptionConnection: OptionConnectionObject
    OptionEdge: OptionEdgeObject
    AggregateOption: AggregateOptionObject
    OptionValueConnection: OptionValueConnectionObject
    OptionValueEdge: OptionValueEdgeObject
    AggregateOptionValue: AggregateOptionValueObject
    ProductConnection: ProductConnectionObject
    ProductEdge: ProductEdgeObject
    AggregateProduct: AggregateProductObject
    VariantConnection: VariantConnectionObject
    VariantEdge: VariantEdgeObject
    AggregateVariant: AggregateVariantObject
    Mutation: MutationObject
    BatchPayload: BatchPayloadObject
    Subscription: SubscriptionObject
    AttributeSubscriptionPayload: AttributeSubscriptionPayloadObject
    AttributePreviousValues: AttributePreviousValuesObject
    BrandSubscriptionPayload: BrandSubscriptionPayloadObject
    BrandPreviousValues: BrandPreviousValuesObject
    CollectionSubscriptionPayload: CollectionSubscriptionPayloadObject
    CollectionPreviousValues: CollectionPreviousValuesObject
    CollectionRuleSubscriptionPayload: CollectionRuleSubscriptionPayloadObject
    CollectionRulePreviousValues: CollectionRulePreviousValuesObject
    CollectionRuleSetSubscriptionPayload: CollectionRuleSetSubscriptionPayloadObject
    CollectionRuleSetPreviousValues: CollectionRuleSetPreviousValuesObject
    ImageSubscriptionPayload: ImageSubscriptionPayloadObject
    ImagePreviousValues: ImagePreviousValuesObject
    OptionSubscriptionPayload: OptionSubscriptionPayloadObject
    OptionPreviousValues: OptionPreviousValuesObject
    OptionValueSubscriptionPayload: OptionValueSubscriptionPayloadObject
    OptionValuePreviousValues: OptionValuePreviousValuesObject
    ProductSubscriptionPayload: ProductSubscriptionPayloadObject
    ProductPreviousValues: ProductPreviousValuesObject
    VariantSubscriptionPayload: VariantSubscriptionPayloadObject
    VariantPreviousValues: VariantPreviousValuesObject
  }
  fieldsDetails: {
    Query: QueryFieldDetails
    Attribute: AttributeFieldDetails
    Product: ProductFieldDetails
    Brand: BrandFieldDetails
    Image: ImageFieldDetails
    Variant: VariantFieldDetails
    OptionValue: OptionValueFieldDetails
    Option: OptionFieldDetails
    Collection: CollectionFieldDetails
    CollectionRuleSet: CollectionRuleSetFieldDetails
    CollectionRule: CollectionRuleFieldDetails
    AttributeConnection: AttributeConnectionFieldDetails
    PageInfo: PageInfoFieldDetails
    AttributeEdge: AttributeEdgeFieldDetails
    AggregateAttribute: AggregateAttributeFieldDetails
    BrandConnection: BrandConnectionFieldDetails
    BrandEdge: BrandEdgeFieldDetails
    AggregateBrand: AggregateBrandFieldDetails
    CollectionConnection: CollectionConnectionFieldDetails
    CollectionEdge: CollectionEdgeFieldDetails
    AggregateCollection: AggregateCollectionFieldDetails
    CollectionRuleConnection: CollectionRuleConnectionFieldDetails
    CollectionRuleEdge: CollectionRuleEdgeFieldDetails
    AggregateCollectionRule: AggregateCollectionRuleFieldDetails
    CollectionRuleSetConnection: CollectionRuleSetConnectionFieldDetails
    CollectionRuleSetEdge: CollectionRuleSetEdgeFieldDetails
    AggregateCollectionRuleSet: AggregateCollectionRuleSetFieldDetails
    ImageConnection: ImageConnectionFieldDetails
    ImageEdge: ImageEdgeFieldDetails
    AggregateImage: AggregateImageFieldDetails
    OptionConnection: OptionConnectionFieldDetails
    OptionEdge: OptionEdgeFieldDetails
    AggregateOption: AggregateOptionFieldDetails
    OptionValueConnection: OptionValueConnectionFieldDetails
    OptionValueEdge: OptionValueEdgeFieldDetails
    AggregateOptionValue: AggregateOptionValueFieldDetails
    ProductConnection: ProductConnectionFieldDetails
    ProductEdge: ProductEdgeFieldDetails
    AggregateProduct: AggregateProductFieldDetails
    VariantConnection: VariantConnectionFieldDetails
    VariantEdge: VariantEdgeFieldDetails
    AggregateVariant: AggregateVariantFieldDetails
    Mutation: MutationFieldDetails
    BatchPayload: BatchPayloadFieldDetails
    Subscription: SubscriptionFieldDetails
    AttributeSubscriptionPayload: AttributeSubscriptionPayloadFieldDetails
    AttributePreviousValues: AttributePreviousValuesFieldDetails
    BrandSubscriptionPayload: BrandSubscriptionPayloadFieldDetails
    BrandPreviousValues: BrandPreviousValuesFieldDetails
    CollectionSubscriptionPayload: CollectionSubscriptionPayloadFieldDetails
    CollectionPreviousValues: CollectionPreviousValuesFieldDetails
    CollectionRuleSubscriptionPayload: CollectionRuleSubscriptionPayloadFieldDetails
    CollectionRulePreviousValues: CollectionRulePreviousValuesFieldDetails
    CollectionRuleSetSubscriptionPayload: CollectionRuleSetSubscriptionPayloadFieldDetails
    CollectionRuleSetPreviousValues: CollectionRuleSetPreviousValuesFieldDetails
    ImageSubscriptionPayload: ImageSubscriptionPayloadFieldDetails
    ImagePreviousValues: ImagePreviousValuesFieldDetails
    OptionSubscriptionPayload: OptionSubscriptionPayloadFieldDetails
    OptionPreviousValues: OptionPreviousValuesFieldDetails
    OptionValueSubscriptionPayload: OptionValueSubscriptionPayloadFieldDetails
    OptionValuePreviousValues: OptionValuePreviousValuesFieldDetails
    ProductSubscriptionPayload: ProductSubscriptionPayloadFieldDetails
    ProductPreviousValues: ProductPreviousValuesFieldDetails
    VariantSubscriptionPayload: VariantSubscriptionPayloadFieldDetails
    VariantPreviousValues: VariantPreviousValuesFieldDetails
  }
  enumTypesNames: enumTypesNames
}

declare global {
  interface GraphQLNexusGen extends PluginTypes {}
}
  