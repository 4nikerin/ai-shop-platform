import { z } from 'zod';

export const OrderItemProductAttributeSnapshotSchema = z.object({
  attributeId: z.number(),
  code: z.string(),
  name: z.string(),
  value: z.union([z.string(), z.number(), z.boolean()]),
  unit: z.string().nullable(),
});

export const OrderItemBaseSchema = z.object({
  id: z.number(),
  orderId: z.number(),
  productId: z.number(),
  productName: z.string(),
  productAttributesSnapshot: z.array(OrderItemProductAttributeSnapshotSchema),
  quantity: z.number(),
  unitPriceCents: z.number(),
  lineTotalCents: z.number(),
  createdAt: z.string(),
  updatedAt: z.string().nullable(),
});

export default OrderItemBaseSchema;

export type OrderItemDto = z.infer<typeof OrderItemBaseSchema>;
export type OrderItemProductAttributeSnapshotDto = z.infer<
  typeof OrderItemProductAttributeSnapshotSchema
>;
