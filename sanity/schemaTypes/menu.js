export default menu = [
  {
    id: 1,
    name: 'Food',
    subcategories: [
      {
        id: 11,
        name: 'Wraps',
        items: [
          {
            id: 111,
            name: 'Tandoori Wrap',
            price: 65,
            description: 'Wrap with pulled tandoori chicken, peppers, and cabbage.',
          },
          // Additional wrap items...
        ],
      },
      {
        id: 12,
        name: 'Pizza',
        items: [
          {
            id: 121,
            name: 'Pizza Pepperoni',
            price: 179,
            description: 'Tomato sauce, cheese, oregano, pepperoni.',
          },
          {
            id: 122,
            name: 'Pizza Ham',
            price: 179,
            description: 'Tomato sauce, cheese, ham, mushrooms.',
          },
          {
            id: 123,
            name: 'Pizza Meatlover',
            price: 179,
            description: 'Tomato sauce, cheese, onion, beef, ham, pepperoni.',
          },
          // Additional pizza items...
        ],
      },
      // Additional subcategories...
    ],
  },
  {
    id: 2,
    name: 'Alcohol',
    subcategories: [
      {
        id: 21,
        name: 'Beers',
        items: [
          {
            id: 211,
            name: 'Local Beer',
            price: 50,
            description: 'A refreshing locally brewed beer.',
          },
          {
            id: 212,
            name: 'Imported Beer',
            price: 70,
            description: 'A premium imported beer for fine tastes.',
          },
          // Additional beer items...
        ],
      },
      {
        id: 22,
        name: 'Wines',
        items: [
          {
            id: 221,
            name: 'Red Wine',
            price: 90,
            description: 'Rich and smooth red wine.',
          },
          {
            id: 222,
            name: 'White Wine',
            price: 90,
            description: 'Crisp and refreshing white wine.',
          },
          // Additional wine items...
        ],
      },
      // Additional alcohol subcategories...
    ],
  },
  {
    id: 3,
    name: 'Soft Drinks',
    subcategories: [
      {
        id: 31,
        name: 'Sodas',
        items: [
          {
            id: 311,
            name: 'Cola',
            price: 25,
            description: 'Classic cola flavor.',
          },
          {
            id: 312,
            name: 'Lemon-Lime',
            price: 25,
            description: 'Refreshing lemon and lime blend.',
          },
          // Additional soda items...
        ],
      },
      // Additional soft drinks subcategories...
    ],
  },
  // Additional categories like Desserts, etc.
]
