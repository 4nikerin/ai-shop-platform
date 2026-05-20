import { UserSchema } from '#database/schema'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'

import Chat from '#models/chat'
import Order from '#models/order'

export default class User extends compose(UserSchema, withAuthFinder(hash)) {
  @hasMany(() => Order)
  declare orders: HasMany<typeof Order>

  @hasMany(() => Chat)
  declare chats: HasMany<typeof Chat>
}
