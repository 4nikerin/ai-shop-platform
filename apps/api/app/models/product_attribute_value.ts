import { ProductAttributeValueSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import Product from '#models/product'
import ProductAttribute from '#models/product_attribute'
import ProductAttributeOption from '#models/product_attribute_option'

export default class ProductAttributeValue extends ProductAttributeValueSchema {
  @belongsTo(() => Product)
  declare product: BelongsTo<typeof Product>

  @belongsTo(() => ProductAttribute, {
    foreignKey: 'attributeId',
  })
  declare attribute: BelongsTo<typeof ProductAttribute>

  @belongsTo(() => ProductAttributeOption, {
    foreignKey: 'optionId',
  })
  declare option: BelongsTo<typeof ProductAttributeOption>
}
