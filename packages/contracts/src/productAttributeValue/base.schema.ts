import { z } from 'zod';

export const ProductAttributeValueBaseSchema = z.object({
  id: z.number(),
  productId: z.number(),
  attributeId: z.number(),
  optionId: z.number().nullable(),
  textValue: z.string().nullable(),
  numberValue: z.number().nullable(),
  booleanValue: z.boolean().nullable(),
  createdAt: z.string(),
  updatedAt: z.string().nullable(),
});

export default ProductAttributeValueBaseSchema;

export type ProductAttributeValueDto = z.infer<typeof ProductAttributeValueBaseSchema>;
