// database.js


const database = {
    logo: 'img/logo tipo cenaduria.jpg ',
    title: 'Cenaduria',

    carousel: [
        {
          id: 1,
          imageUrl: 'img/boneless.jpg',
          altText: 'Imagen 1',
        },
        {
          id: 2,
          imageUrl: 'img/pizza.jpg', 
          altText: 'Imagen 2',
        },
        {
          id: 3,
          imageUrl: 'img/pay.jpg', 
          altText: 'Imagen 3',
        },
      ],
      
    
      categories: [
      {
        id: 1,
        name: 'pastel',
        imageUrl: 'img/pastel.jpg',
        altText: 'Categoría 1',
      },
      {
        id: 2,
        name: 'pizza',
        imageUrl: '../public/img/pizza.jpg',
        altText: 'Categoría 2',
      },
      {
        id: 3,
        name: 'pay',
        imageUrl: '../public/img/pay.jpg',
        altText: 'Categoría 3',
      },
      {
        id: 4,
        name: 'Snacks',
        imageUrl: '../public/img/snacks 1.jpg',
        altText: 'Categoría 4',
      },
      {
        id: 5,
        name: 'Snacks',
        imageUrl: '../public/img/snacks 2.jpg',
        altText: 'Categoría 5',
      },
      {
        id: 6,
        name: 'Snacks',
        imageUrl: '../public/img/snacks 3.jpg',
        altText: 'Categoría 6',
      },
    ],

    infoWithImage: {
      title: '¿Quiénes somos?',
      text: [
        '¡Hola! Somos una cenaduria que nos dedicamos a vender snacks',
        'Somos una cenaduria de confianza que busca expandirse a más lugares y abrir más sucursales.',
        'Años Activos: 2 Años',
        'CEO: Martin Eduardo Estrada Garcia',
      ],
      imageUrl: '../public/img/logo tipo cenaduria.jpg',
      altText: 'Imagen',
    },

    videoSection: {
      videoUrl: './public/img/video snacks.mp4',
      videoType: 'video snacks/mp4',
      videoTitle: 'Snacks',
    },

    relevantProducts: [
      {
        id: 1,
        name: 'Combo pizza',
        description: 'Un combo que puedes elegir en familia.',
        price: 400.00,
        imageUrl: '../public/img/combo pizza.jpg' ,
      },
      {
        id: 2,
        name: 'Combo hamburguesa',
        description: 'Un combo para disfrutar en pareja.',
        price: 290.00,
        imageUrl: '../public/img/combo hamburguesa.jpg',
      },
      {
        id: 3,
        name: 'Combo boneless',
        description: 'Un combo para que disfrutes.',
        price: 230.00,
        imageUrl: '../public/img/combo boneless.png' ,
      },
    ],
  };

  
  
  export default database;