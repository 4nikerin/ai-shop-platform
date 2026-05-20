import { ChatSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

import ChatMessage from '#models/chat_message'
import User from '#models/user'

export default class Chat extends ChatSchema {
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasMany(() => ChatMessage)
  declare messages: HasMany<typeof ChatMessage>
}
