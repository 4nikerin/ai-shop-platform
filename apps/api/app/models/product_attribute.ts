import { ProductAttributeSchema } from '#database/schema'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'

import ProductAttributeOption from '#models/product_attribute_option'
import ProductAttributeValue from '#models/product_attribute_value'

export default class ProductAttribute extends ProductAttributeSchema {
  @hasMany(() => ProductAttributeOption, {
    foreignKey: 'attributeId',
  })
  declare options: HasMany<typeof ProductAttributeOption>

  @hasMany(() => ProductAttributeValue, {
    foreignKey: 'attributeId',
  })
  declare values: HasMany<typeof ProductAttributeValue>
}
