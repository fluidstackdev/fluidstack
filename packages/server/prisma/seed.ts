//@ts-ignore
import * as faker from 'faker'
import * as _ from 'lodash'
import {
  Attribute,
  AttributeCreateInput,
  Brand,
  OptionCreateInput,
  prisma,
  Product,
  ProductType,
  VariantCreateInput,
} from '../.yoga/prisma-client'

interface Option {
  id: string
  name: string
  values: { id: string; name: string }[]
}

const IMAGES = [
  'https://mosaic03.ztat.net/vgs/media/catalog-lg/KA/32/1C/06/UC/11/KA321C06U-C11@4.jpg',
  'https://mosaic03.ztat.net/vgs/media/catalog-lg/PU/12/1J/04/9A/11/PU121J049-A11@11.jpg',
  'https://mosaic04.ztat.net/vgs/media/catalog-lg/TO/22/1C/0A/QT/11/TO221C0AQ-T11@12.jpg',
  'https://mosaic03.ztat.net/vgs/media/catalog-lg/TO/22/1C/0A/PK/11/TO221C0AP-K11@31.1.jpg',
  'https://mosaic04.ztat.net/vgs/media/catalog-lg/TO/72/1C/08/3E/11/TO721C083-E11@2.2.jpg',
  'https://mosaic03.ztat.net/vgs/media/catalog-lg/KA/32/1C/0D/1K/11/KA321C0D1-K11@5.jpg',
]

main()

async function main() {
  await products(200)
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

  const materials = allAttributes.filter(a => a.key === 'Material')
  const heels = allAttributes.filter(a => a.key === 'Heels')
  const length = allAttributes.filter(a => a.key === 'Length')

  return job(n, () => {
    const productName = faker.commerce.productName()

    return prisma.createProduct({
      name: productName,
      description: faker.random.words(),
      slug: faker.helpers.slugify(productName),
      brand: {
        connect: { id: pickRnd(allBrands).id },
      },
      thumbnail: {
        create: { url: _.sample(IMAGES)! },
      },
      attributes: {
        connect: [
          { id: pickRnd(materials).id },
          { id: pickRnd(heels).id },
          { id: pickRnd(length).id },
        ],
      },
      type: {
        connect: { id: pickRnd(allProductTypes).id },
      },
      variants: {
        create: generateVariant(allOptions),
      },
    })
  })
}

// @ts-ignore
async function attributes(n: number): Promise<Attribute[]> {
  const attributesToCreate: AttributeCreateInput[] = [
    {
      key: 'Material',
      value: 'Leather',
    },
    {
      key: 'Material',
      value: 'Tissue',
    },
    {
      key: 'Material',
      value: 'Cotton',
    },
    {
      key: 'Heels',
      value: 'Small',
    },
    {
      key: 'Heels',
      value: 'High',
    },
    {
      key: 'Heels',
      value: 'Super high',
    },
    {
      key: 'Length',
      value: 'Short',
    },
    {
      key: 'Length',
      value: 'Normal',
    },
    {
      key: 'Length',
      value: 'Mid-length',
    },
    {
      key: 'Length',
      value: 'Long',
    },
    {
      key: 'Length',
      value: 'Extra-Long',
    },
  ]

  return Promise.all(
    attributesToCreate.map(attribute => prisma.createAttribute(attribute)),
  )
}

// @ts-ignore
async function options(n: number): Promise<Option[]> {
  const optionsToCreate: OptionCreateInput[] = [
    {
      name: 'Color',
      values: {
        create: [
          { name: 'Red' },
          { name: 'Blue' },
          { name: 'Green' },
          { name: 'Violet' },
        ],
      },
      isColor: true,
    },
    {
      name: 'Size',
      values: {
        create: [{ name: 'S' }, { name: 'M' }, { name: 'L' }, { name: 'XL' }],
      },
      isColor: false,
    },
  ]

  return Promise.all(
    optionsToCreate.map(option =>
      prisma
        .createOption(option)
        .$fragment(`fragment tmp on Option { id name values { id name } }`),
    ),
  ) as Promise<Option[]>
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
function generateVariant(options: Option[]): VariantCreateInput[] {
  const colorOption = options.find(o => o.name === 'Color')
  const sizeOption = options.find(o => o.name === 'Size')
  const variants: Array<[{ id: string }, { id: string }]> = cartesianProduct([
    colorOption!.values,
    sizeOption!.values,
  ])
  const randomVariants = _.sampleSize(variants, _.random(1, variants.length))

  return randomVariants.map(
    variant =>
      ({
        optionValues: {
          connect: variant.map(optionValue => ({ id: optionValue.id })),
        },
        images: {
          create: _.sampleSize(IMAGES, _.random(1, IMAGES.length - 1)).map(
            url => ({ url }),
          ),
        },
        price: _.random(10, 100) * 100,
        availableForSale: true,
      } as VariantCreateInput),
  )
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

function cartesianProduct(arr: Array<any[]>) {
  return arr.reduce(
    (a, b) =>
      a.map(x => b.map(y => x.concat(y))).reduce((a, b) => a.concat(b), []),
    [[]],
  )
}
