import { z } from 'zod';

export const ChatBaseSchema = z.object({
  id: z.number(),
  userId: z.number().nullable(),
  title: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string().nullable(),
});

export default ChatBaseSchema;

export type ChatDto = z.infer<typeof ChatBaseSchema>;
