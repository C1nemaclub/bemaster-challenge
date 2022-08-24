import oldMovie from './assets/images/oldmovie.gif';
import modernMovies from './assets/images/modernmovies.gif';
import liveTv from './assets/images/livetv.gif';
import liveSports from './assets/images/livesports.gif';
import premiere from './assets/images/premiere.gif';
import bts from './assets/images/bts.gif';
export default [
  {
    type: 'Free',
    price: '0',
    features: ['Limited', '2hr Watch Time', '1 User'],
    recommended: false,
    id: 1,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, sint.',
    content: [
      {
        name: 'Old Movies',
        sinopsis: 'Go back to the good old times and watch old movies',
        image: oldMovie,
        id: 10,
      },
    ],
  },
  {
    type: 'Standard',
    price: '29.99',
    features: ['12hr Watch Time', '3 Users'],
    recommended: false,
    id: 2,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, sint.',
    content: [
      {
        name: 'Old Movies',
        sinopsis: 'Go back to the good old times and watch old movies',
        image: oldMovie,
        id: 10,
      },
      ,
      {
        name: 'Modern Movies',
        sinopsis: 'Watch the best movies on the current era',
        image: modernMovies,
        id: 11,
      },
    ],
  },
  {
    type: 'Pro',
    price: '39.99',
    features: ['Unlimited', '5 Users', 'Offline Watch'],
    recommended: true,
    id: 3,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, sint.',
    content: [
      {
        name: 'Old Movies',
        sinopsis: 'Go back to the good old times and watch old movies',
        image: oldMovie,
        id: 10,
      },
      ,
      {
        name: 'Modern Movies',
        sinopsis: 'Watch the best movies on the current era',
        image: modernMovies,
        id: 11,
      },
      {
        name: 'Live TV',
        sinopsis: 'You dont need a Tv Anymore',
        image: liveTv,
        id: 12,
      },
      {
        name: 'Live Sports',
        sinopsis: 'Watch your favorite team live and on the best quality!',
        image: liveSports,
      },
    ],
  },
  {
    type: 'Premium',
    price: '59.99',
    features: ['Unlimited', '8 Users', 'Watch Party'],
    recommended: false,
    id: 4,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, sint.',
    content: [
      {
        name: 'Old Movies',
        sinopsis: 'Go back to the good old times and watch old movies',
        image: oldMovie,
        id: 10,
      },
      ,
      {
        name: 'Modern Movies',
        sinopsis: 'Watch the best movies on the current era',
        image: modernMovies,
        id: 11,
      },
      {
        name: 'Live TV',
        sinopsis: 'You dont need a Tv Anymore',
        image: liveTv,
        id: 12,
      },
      {
        name: 'Live Sports',
        sinopsis: 'Watch your favorite team live and on the best quality!',
        image: liveSports,
        id: 13,
      },
      {
        name: 'Premiere',
        sinopsis: 'Enjoy the new releases for your favorite movies and series!',
        image: premiere,
        id: 14,
      },
    ],
  },
  {
    type: 'Deluxe',
    price: '69.99',
    features: ['Unlimited', 'Unlimited Users', 'Exclusive Content'],
    recommended: false,
    id: 5,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, sint.',
    content: [
      {
        name: 'Old Movies',
        sinopsis: 'Go back to the good old times and watch old movies',
        image: oldMovie,
        id: 10,
      },
      ,
      {
        name: 'Modern Movies',
        sinopsis: 'Watch the best movies on the current era',
        image: modernMovies,
        id: 11,
      },
      {
        name: 'Live TV',
        sinopsis: 'You dont need a Tv Anymore',
        image: liveTv,
        id: 12,
      },
      {
        name: 'Live Sports',
        sinopsis: 'Watch your favorite team live and on the best quality!',
        image: liveSports,
        id: 13,
      },
      {
        name: 'Premiere',
        sinopsis: 'Enjoy the new releases for your favorite movies and series!',
        image: premiere,
        id: 14,
      },
      {
        name: 'Behind the Scenes Content',
        sinopsis:
          'Enjoy the best behind the scenes content from your favorite movies and series!',
        image: bts,
        id: 15,
      },
    ],
  },
];
