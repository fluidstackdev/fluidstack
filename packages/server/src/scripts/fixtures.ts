//@ts-ignore
import {
  prisma,
  Brand,
  Product,
  Attribute,
  ProductType,
  OptionValueWhereUniqueInput,
  VariantCreateInput,
} from '../generated/prisma-client'
import * as faker from 'faker'
import * as _ from 'lodash'

interface Option {
  id: string
  name: string
  values: { id: string; name: string }[]
}

main()

async function main() {
  //await options(50)
  await products(50)
  //await deleteProducts()
}

// @ts-ignore
async function productTypes(n: number): Promise<ProductType[]> {
  return job(n, () => {
    return prisma.createProductType({
      name: faker.commerce.product(),
    })
  })
}

// @ts-ignore
async function products(n: number): Promise<Product[]> {
  let allBrands = await prisma.brands()
  let allAttributes = await prisma.attributes()
  let allOptions: Option[] = await prisma
    .options()
    .$fragment(`fragment tmp on Option { id name values { id name } }`)
  let allProductTypes = await prisma.productTypes()

  if (allBrands.length === 0) {
    allBrands = await brands(20)
  }
  if (allAttributes.length === 0) {
    allAttributes = await attributes(20)
  }
  if (allProductTypes.length === 0) {
    allProductTypes = await productTypes(20)
  }
  if (allOptions.length === 0) {
    allOptions = await options(20)
  }

  return job(n, () => {
    return prisma.createProduct({
      name: faker.commerce.productName(),
      brand: {
        connect: { id: pickRnd(allBrands).id },
      },
      attributes: {
        connect: arr(_.random(0, 20)).map(() => ({
          id: pickRnd(allAttributes).id,
        })),
      },
      type: {
        connect: { id: pickRnd(allProductTypes).id },
      },
      variants: {
        create: arr(_.random(0, 10)).map(() => generateVariant(allOptions)),
      },
    })
  })
}

// @ts-ignore
async function attributes(n: number): Promise<Attribute[]> {
  return job(n, () => {
    return prisma.createAttribute({
      key: faker.company.bsAdjective(),
      value: faker.company.bsNoun(),
    })
  })
}

// @ts-ignore
async function options(n: number): Promise<Option[]> {
  return job(n, () => {
    return prisma
      .createOption({
        name: faker.commerce.productAdjective(),
        values: {
          create: _.uniqBy(
            arr(5).map(() => ({ name: faker.commerce.productMaterial() })),
            'name',
          ),
        },
      })
      .$fragment(`fragment tmp on Option { id name values { id name } }`)
  })
}

// @ts-ignore
async function deleteOptions(): Promise<{}> {
  const options = await prisma.options()

  return Promise.all(options.map(o => prisma.deleteOption({ id: o.id })))
}
// @ts-ignore
async function deleteProducts(): Promise<{}> {
  const products = await prisma.products()

  return Promise.all(products.map(p => prisma.deleteProduct({ id: p.id })))
}

// @ts-ignore
async function brands(n: number): Promise<Brand[]> {
  return job(n, () => {
    return prisma.createBrand({
      name: faker.company.companyName(),
    })
  })
}

// @ts-ignore
function generateVariant(options: Option[]): VariantCreateInput {
  const optionValuesToConnect: OptionValueWhereUniqueInput[] = [
    { id: pickRnd(pickRnd(options).values).id },
    { id: pickRnd(pickRnd(options).values).id },
  ]

  return {
    optionValues: {
      connect: optionValuesToConnect,
    },
    price: _.random(0, 100),
    availableForSale: true,
  }
}

function pickRnd<T>(arr: T[]): T {
  return _.sample(arr) as T
}

function arr(n: number) {
  return new Array(n).fill(0)
}

async function job(n: number, fn: () => any) {
  return Promise.all(
    arr(n).map(() => {
      return fn()
    }),
  )
}
