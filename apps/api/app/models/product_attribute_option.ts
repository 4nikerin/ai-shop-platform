import { ProductAttributeOptionSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

import ProductAttribute from '#models/product_attribute'
import ProductAttributeValue from '#models/product_attribute_value'

export default class ProductAttributeOption extends ProductAttributeOptionSchema {
  @belongsTo(() => ProductAttribute, {
    foreignKey: 'attributeId',
  })
  declare attribute: BelongsTo<typeof ProductAttribute>

  @hasMany(() => ProductAttributeValue, {
    foreignKey: 'optionId',
  })
  declare values: HasMany<typeof ProductAttributeValue>
}
