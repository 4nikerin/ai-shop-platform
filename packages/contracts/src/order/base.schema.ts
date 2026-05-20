import { z } from 'zod';

export const OrderStatusSchema = z.enum(['new', 'processing', 'completed', 'cancelled']);

export const OrderBaseSchema = z.object({
  id: z.number(),
  userId: z.number().nullable(),
  status: OrderStatusSchema,
  customerName: z.string(),
  customerEmail: z.string().email(),
  customerPhone: z.string(),
  deliveryAddress: z.string(),
  comment: z.string().nullable(),
  totalCents: z.number(),
  currency: z.literal('USD'),
  createdAt: z.string(),
  updatedAt: z.string().nullable(),
});

export default OrderBaseSchema;

export type OrderDto = z.infer<typeof OrderBaseSchema>;
export type OrderStatusDto = z.infer<typeof OrderStatusSchema>;
