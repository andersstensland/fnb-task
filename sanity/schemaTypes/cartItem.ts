export default {
  name: 'cartItem',
  title: 'Cart Item',
  type: 'object',
  fields: [
    {
      name: 'productId',
      title: 'Product ID',
      type: 'string',
      description: 'Identifier for the product.',
    },
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
      description: 'Quantity of this item in the cart.',
    },
    {
      name: 'unitPrice',
      title: 'Unit Price',
      type: 'number',
      description: 'Price per unit of the item.',
    },
    {
      name: 'subtotal',
      title: 'Subtotal',
      type: 'number',
      description: 'Total price for this quantity of the item.',
      readOnly: true,
      validation: (Rule: any) => Rule.required().min(0),
    },
  ],
}
