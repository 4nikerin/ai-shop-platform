import { z } from 'zod';

export const ProductImageBaseSchema = z.object({
  id: z.number(),
  productId: z.number(),
  url: z.string(),
  alt: z.string().nullable(),
  position: z.number(),
  createdAt: z.string(),
  updatedAt: z.string().nullable(),
});

export default ProductImageBaseSchema;

export type ProductImageDto = z.infer<typeof ProductImageBaseSchema>;
