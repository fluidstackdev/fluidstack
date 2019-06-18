//@ts-ignore
import * as faker from 'faker'
import * as _ from 'lodash'
import Photon, {
  Attribute,
  AttributeCreateInput,
  Brand,
  OptionCreateInput,
  Product,
  ProductType,
  VariantCreateInput,
} from '@generated/photon'
import console = require('console')

const photon = new Photon()

interface Option {
  id: string
  name: string
  values: { id: string; name: string }[]
}

const IMAGES = [
  'https://tinypng.com/web/output/e8hxgepvepcmw5u5y87yk49j3zdgdnzw/mb06-gray-0.jpg',
  'https://tinypng.com/web/output/ukcxgwh688aw7n21q88j3wy5feka15ey/mb05-black-0.jpg',
  'https://tinypng.com/web/output/zjhmkqazg8hmmtdkb9zzt4fjm1pdt6uv/mb04-black-0.jpg',
  'https://tinypng.com/web/output/8zfn072e0yhkwv1qbewh55kp24mygn8g/mb04-black-0_alt1.jpg',
  'https://tinypng.com/web/output/dpm6h6pj2zngd952hnuxtuyrruz1hjb7/mb03-black-0.jpg',
  'https://tinypng.com/web/output/ycb012zebun79axbnfva6189anpehr4k/mb03-black-0_alt1.jpg',
  'https://tinypng.com/web/output/mx658qjw8u5kgz0wtf43puywy12rhrz7/mb02-gray-0.jpg',
  'https://tinypng.com/web/output/zxzqmxpb4kpj4pzk60d258ka7vhnhna2/mb02-blue-0.jpg',
  'https://tinypng.com/web/output/y1gxvvyx30rthteepm0qj59rmhh01f9w/mb01-blue-0.jpg',
]

main()

async function main() {
  // const someProducts = await photon.products.findMany({
  //   select: {
  //     variants: {
  //       select: {
  //         id: true,
  //         optionValues: {
  //           select: {
  //             id: true,
  //             name: true,
  //           },
  //         },
  //       },
  //     },
  //   },
  // })

  //console.log(JSON.stringify(someProducts, null, 2))

  // const allOptions = await options(20)

  // const variant = await photon.variants.create({
  //   data: {
  //     price: 100,
  //     optionValues: {
  //       connect: [
  //         { id: allOptions[0].values[0].id },
  //         { id: allOptions[1].values[0].id },
  //       ],
  //     },
  //   },
  // })

  //console.log(updatedVariant)

  await products(1)
  // console.log('done')

  //await deleteProducts()
  //await brands(10)
}

// @ts-ignore
async function productTypes(n: number): Promise<ProductType[]> {
  return job(n, () => {
    return photon.productTypes.create({
      data: {
        name: faker.commerce.product(),
      },
    })
  })
}

// @ts-ignore
async function products(n: number): Promise<Product[]> {
  let allBrands = await photon.brands.findMany()
  let allAttributes = await photon.attributes.findMany()
  let allOptions: Option[] = await photon.options.findMany({
    select: {
      id: true,
      name: true,
      values: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  })
  let allProductTypes = await photon.productTypes.findMany()

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
  const length = allAttributes.filter(a => a.key === 'Length')

  return job(n, async () => {
    const productName = faker.commerce.productName()

    const product = await photon.products.create({
      data: {
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
          connect: [{ id: pickRnd(materials).id }, { id: pickRnd(length).id }],
        },
        type: {
          connect: { id: pickRnd(allProductTypes).id },
        },
      },
    })

    const variants = await generateVariant(allOptions)

    await photon.products.update({
      where: { id: product.id },
      data: {
        variants: {
          connect: variants.map(v => ({ id: v.id })),
        },
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
    attributesToCreate.map(attribute =>
      photon.attributes.create({ data: attribute }),
    ),
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
      photon.options.create({
        data: option,
        select: {
          id: true,
          name: true,
          values: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      }),
    ),
  ) as Promise<Option[]>
}

// @ts-ignore
async function deleteOptions(): Promise<{}> {
  const options = await photon.options()

  return Promise.all(
    options.map(o => photon.options.delete({ where: { id: o.id } })),
  )
}
// @ts-ignore
async function deleteProducts(): Promise<{}> {
  const products = await photon.products()

  return Promise.all(
    products.map(p => photon.products.delete({ where: { id: p.id } })),
  )
}

// @ts-ignore
async function brands(n: number): Promise<Brand[]> {
  return job(n, () => {
    return photon.brands.create({
      data: {
        name: faker.company.companyName(),
      },
    })
  })
}

// @ts-ignore
async function generateVariant(options: Option[]): Promise<Variant[]> {
  const colorOption = options.find(o => o.name === 'Color')!
  const sizeOption = options.find(o => o.name === 'Size')!

  const variants: Array<[{ id: string }, { id: string }]> = cartesianProduct([
    colorOption!.values,
    sizeOption!.values,
  ])
  const randomVariants = _.sampleSize(variants, _.random(1, variants.length))
  const dbVariants: any[] = []

  for (const __ of randomVariants) {
    const tmpVariant = await photon.variants.create({
      data: {
        images: {
          create: _.sampleSize(IMAGES, _.random(1, IMAGES.length - 1)).map(
            url => ({ url }),
          ),
        },
        price: _.random(10, 100) * 100,
        availableForSale: true,
      } as VariantCreateInput,
    })

    dbVariants.push(tmpVariant)
  }

  const optionsValuesToCreate = randomVariants.map(randomVariant => ({
    connect: randomVariant.map(optionValue => ({ id: optionValue.id })),
  }))

  console.log({ optionsValuesToCreate })

  for (let i = 0; i < dbVariants.length; i++) {
    await photon.variants.update({
      where: { id: dbVariants[i].id },
      data: {
        optionValues: optionsValuesToCreate[i],
      },
    })
  }

  return dbVariants
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
