import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.schema.createTable('products', (table) => {
      table.increments('id').notNullable()
      table.string('name').notNullable()
      table.string('slug').notNullable().unique()
      table.text('description').nullable()
      table.integer('price_cents').notNullable()
      table.enu('currency', ['USD']).notNullable().defaultTo('USD')
      table.integer('stock').notNullable().defaultTo(0)
      table.enu('status', ['draft', 'active', 'archived']).notNullable().defaultTo('draft')

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()

      table.index(['status'])
      table.index(['price_cents'])
      table.index(['created_at'])
    })

    this.schema.createTable('product_images', (table) => {
      table.increments('id').notNullable()
      table
        .integer('product_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
      table.string('url').notNullable()
      table.string('alt').nullable()
      table.integer('position').notNullable().defaultTo(0)

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()

      table.index(['product_id'])
      table.unique(['product_id', 'position'])
    })

    this.schema.createTable('product_attributes', (table) => {
      table.increments('id').notNullable()
      table.string('name').notNullable()
      table.string('code').notNullable().unique()
      table.enu('type', ['text', 'number', 'boolean', 'select']).notNullable()
      table.string('unit').nullable()
      table.integer('position').notNullable().defaultTo(0)

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()

      table.index(['position'])
    })

    this.schema.createTable('product_attribute_options', (table) => {
      table.increments('id').notNullable()
      table
        .integer('attribute_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('product_attributes')
        .onDelete('CASCADE')
      table.string('value').notNullable()
      table.string('label').notNullable()
      table.integer('position').notNullable().defaultTo(0)

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()

      table.index(['attribute_id'])
      table.unique(['attribute_id', 'value'])
      table.unique(['attribute_id', 'position'])
    })

    this.schema.createTable('product_attribute_values', (table) => {
      table.increments('id').notNullable()
      table
        .integer('product_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
      table
        .integer('attribute_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('product_attributes')
        .onDelete('CASCADE')
      table
        .integer('option_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('product_attribute_options')
        .onDelete('SET NULL')
      table.text('text_value').nullable()
      table.integer('number_value').nullable()
      table.boolean('boolean_value').nullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()

      table.index(['product_id'])
      table.index(['attribute_id'])
      table.index(['option_id'])
      table.unique(['product_id', 'attribute_id'])
    })

    this.schema.createTable('orders', (table) => {
      table.increments('id').notNullable()
      table
        .integer('user_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('users')
        .onDelete('SET NULL')
      table
        .enu('status', ['new', 'processing', 'completed', 'cancelled'])
        .notNullable()
        .defaultTo('new')
      table.string('customer_name').notNullable()
      table.string('customer_email', 254).notNullable()
      table.string('customer_phone', 32).notNullable()
      table.text('delivery_address').notNullable()
      table.text('comment').nullable()
      table.integer('total_cents').notNullable()
      table.enu('currency', ['USD']).notNullable().defaultTo('USD')

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()

      table.index(['user_id'])
      table.index(['status'])
      table.index(['created_at'])
    })

    this.schema.createTable('order_items', (table) => {
      table.increments('id').notNullable()
      table
        .integer('order_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('orders')
        .onDelete('CASCADE')
      table.integer('product_id').unsigned().notNullable().references('id').inTable('products')
      table.string('product_name').notNullable()
      table.jsonb('product_attributes_snapshot').notNullable()
      table.integer('quantity').notNullable()
      table.integer('unit_price_cents').notNullable()
      table.integer('line_total_cents').notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()

      table.index(['order_id'])
      table.index(['product_id'])
    })

    this.schema.createTable('chats', (table) => {
      table.increments('id').notNullable()
      table
        .integer('user_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('users')
        .onDelete('SET NULL')
      table.string('title').nullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()

      table.index(['user_id'])
      table.index(['created_at'])
    })

    this.schema.createTable('chat_messages', (table) => {
      table.increments('id').notNullable()
      table
        .integer('chat_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('chats')
        .onDelete('CASCADE')
      table.enu('role', ['user', 'assistant']).notNullable()
      table.text('content').notNullable()

      table.timestamp('created_at').notNullable()

      table.index(['chat_id'])
      table.index(['created_at'])
    })
  }

  async down() {
    this.schema.dropTable('chat_messages')
    this.schema.dropTable('chats')
    this.schema.dropTable('order_items')
    this.schema.dropTable('orders')
    this.schema.dropTable('product_attribute_values')
    this.schema.dropTable('product_attribute_options')
    this.schema.dropTable('product_attributes')
    this.schema.dropTable('product_images')
    this.schema.dropTable('products')
  }
}
