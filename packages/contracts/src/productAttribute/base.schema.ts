import { z } from 'zod';

export const ProductAttributeTypeSchema = z.enum(['text', 'number', 'boolean', 'select']);

export const ProductAttributeBaseSchema = z.object({
  id: z.number(),
  name: z.string(),
  code: z.string(),
  type: ProductAttributeTypeSchema,
  unit: z.string().nullable(),
  position: z.number(),
  createdAt: z.string(),
  updatedAt: z.string().nullable(),
});

export default ProductAttributeBaseSchema;

export type ProductAttributeDto = z.infer<typeof ProductAttributeBaseSchema>;
export type ProductAttributeTypeDto = z.infer<typeof ProductAttributeTypeSchema>;
