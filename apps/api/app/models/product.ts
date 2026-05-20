import { ProductSchema } from '#database/schema'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'

import OrderItem from '#models/order_item'
import ProductAttributeValue from '#models/product_attribute_value'
import ProductImage from '#models/product_image'

export default class Product extends ProductSchema {
  @hasMany(() => ProductImage)
  declare images: HasMany<typeof ProductImage>

  @hasMany(() => ProductAttributeValue)
  declare attributeValues: HasMany<typeof ProductAttributeValue>

  @hasMany(() => OrderItem)
  declare orderItems: HasMany<typeof OrderItem>
}
