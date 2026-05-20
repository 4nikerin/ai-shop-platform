import { z } from 'zod';

export const ChatMessageRoleSchema = z.enum(['user', 'assistant']);

export const ChatMessageBaseSchema = z.object({
  id: z.number(),
  chatId: z.number(),
  role: ChatMessageRoleSchema,
  content: z.string(),
  createdAt: z.string(),
});

export default ChatMessageBaseSchema;

export type ChatMessageDto = z.infer<typeof ChatMessageBaseSchema>;
export type ChatMessageRoleDto = z.infer<typeof ChatMessageRoleSchema>;
