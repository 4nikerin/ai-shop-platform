import { z } from 'zod';

export const ProductAttributeOptionBaseSchema = z.object({
  id: z.number(),
  attributeId: z.number(),
  value: z.string(),
  label: z.string(),
  position: z.number(),
  createdAt: z.string(),
  updatedAt: z.string().nullable(),
});

export default ProductAttributeOptionBaseSchema;

export type ProductAttributeOptionDto = z.infer<typeof ProductAttributeOptionBaseSchema>;
