import { z } from 'zod';

export const ProductStatusSchema = z.enum(['draft', 'active', 'archived']);

export const ProductBaseSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable(),
  priceCents: z.number(),
  currency: z.literal('USD'),
  stock: z.number(),
  status: ProductStatusSchema,
  createdAt: z.string(),
  updatedAt: z.string().nullable(),
});

export default ProductBaseSchema;

export type ProductDto = z.infer<typeof ProductBaseSchema>;
export type ProductStatusDto = z.infer<typeof ProductStatusSchema>;
