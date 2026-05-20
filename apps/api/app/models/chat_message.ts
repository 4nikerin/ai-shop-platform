import { ChatMessageSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import Chat from '#models/chat'

export default class ChatMessage extends ChatMessageSchema {
  @belongsTo(() => Chat)
  declare chat: BelongsTo<typeof Chat>
}
