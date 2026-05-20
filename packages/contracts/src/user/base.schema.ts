import { z } from 'zod';

export const UserRoleSchema = z.enum(['admin', 'customer']);

export const UserBaseSchema = z.object({
  id: z.number(),
  role: UserRoleSchema,
  name: z.string(),
  email: z.string().email(),
  phone: z.string().nullable(),
  deliveryAddress: z.string().nullable(),
  emailVerifiedAt: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string().nullable(),
});

export default UserBaseSchema;

export type UserRoleDto = z.infer<typeof UserRoleSchema>;
export type UserDto = z.infer<typeof UserBaseSchema>;
