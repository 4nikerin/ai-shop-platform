import { type SchemaRules } from '@adonisjs/lucid/types/schema_generator'

export default {
  tables: {
    chat_messages: {
      columns: {
        role: {
          tsType: "'user' | 'assistant'",
          decorators: [{ name: '@column' }],
        },
      },
    },
    order_items: {
      columns: {
        product_attributes_snapshot: {
          tsType: 'OrderItemProductAttributeSnapshot',
          decorators: [{ name: '@column' }],
          imports: [
            {
              source: '#types/order',
              typeImports: ['OrderItemProductAttributeSnapshot'],
            },
          ],
        },
      },
    },
    orders: {
      columns: {
        currency: {
          tsType: "'USD'",
          decorators: [{ name: '@column' }],
        },
        status: {
          tsType: "'new' | 'processing' | 'completed' | 'cancelled'",
          decorators: [{ name: '@column' }],
        },
      },
    },
    product_attributes: {
      columns: {
        type: {
          tsType: "'text' | 'number' | 'boolean' | 'select'",
          decorators: [{ name: '@column' }],
        },
      },
    },
    products: {
      columns: {
        currency: {
          tsType: "'USD'",
          decorators: [{ name: '@column' }],
        },
        status: {
          tsType: "'draft' | 'active' | 'archived'",
          decorators: [{ name: '@column' }],
        },
      },
    },
    users: {
      columns: {
        role: {
          tsType: "'admin' | 'customer'",
          decorators: [{ name: '@column' }],
        },
      },
    },
  },
} satisfies SchemaRules
