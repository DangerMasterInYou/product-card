// 2. Create a js file where an array of objects will be stored, which are grocery cards from the layout (keep in mind that UI data does not relate to product data. Google it).
// You need to describe the object completely and duplicate it for all the cards and then import it into homework-8 for further work with it.
export const products = [
  {
    id: 1,
    name: 'Увлажняющий мусс',
    typeSkin: 'ДЛЯ НОРМАЛЬНОЙ КОЖИ',
    description: 'Глубоко увлажняет кожу лица, оставляя её мягкой и гладкой.',
    composition: [
      'активные натуральные комплексы',
      'витамины C, A, PP, B и E',
      'солнцезащитные компоненты'
    ],
    price: 2750,
    currency: '&#8381',
    imageUrl: 'moisturizing_mousse@1x.png',
    imageAlt: 'Увлажняющий мусс в бутыльке'
  },
  {
    id: 2,
    name: 'Увлажняющая маска',
    typeSkin: 'ДЛЯ НОРМАЛЬНОЙ КОЖИ',
    description: 'Способствует удерживанию влаги в верхних слоях кожи.',
    composition: [
      'воски',
      'минералы',
      'масла'
    ],
    price: 3500,
    currency: '&#8381',
    imageUrl: 'moisturizing_mask@1x.png',
    imageAlt: 'Увлажняющая маска'
  },
  {
    id: 3,
    name: 'Гель для умывания',
    typeSkin: 'ДЛЯ НОРМАЛЬНОЙ КОЖИ',
    description: 'Интенсивно очищает, не повреждает защитный барьер кожи.',
    composition: [
      'минералы',
      'витамины С, А, РР, В И Е',
      'солнцезащитные компоненты'
    ],
    price: 1650,
    currency: '&#8381',
    imageUrl: 'wash_gel@1x.png',
    imageAlt: 'Гель для умывания'
  },
  {
    id: 4,
    name: 'Подарочный набор №1',
    typeSkin: 'ДЛЯ НОРМАЛЬНОЙ КОЖИ',
    description: 'Набор, состоящий из увлажняющего крема и маски.',
    composition: [
      'воски',
      'минералы',
      'масла'
    ],
    price: 4750,
    currency: '&#8381',
    imageUrl: 'gift_set_1@1x.png',
    imageAlt: 'Подарочный набор №1'
  },
  {
    id: 5,
    name: 'Подарочный набор №5',
    typeSkin: 'ДЛЯ НОРМАЛЬНОЙ КОЖИ',
    description: 'Весь набор средств Invisible symphony, крем, маска, мусс и гель для умывания.',
    composition: [
      'воски',
      'минералы',
      'масла'
    ],
    price: 7520,
    currency: '&#8381',
    imageUrl: 'gift_set_5@1x.png',
    imageAlt: 'Подарочный набор №5'
  }
];
