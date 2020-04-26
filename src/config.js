import image from './assets/homepage/group.jpg';
import group from './assets/homepage/group.png';
import twitter from './assets/homepage/sm-twitter.png';
import facebook from './assets/homepage/facebook.png';
import instagram from './assets/homepage/instagram.png';
import donateLogo from './assets/homepage/combined-shape.png';
export default {
  image,
  nav: {
    backgroundColor: '',
    logo: group,
    links: [
      {
        class: 'nav-link',
        href: '/',
        content: 'MEET CANDIDATE',
      },
      {
        class: 'nav-link',
        href: '/',
        content: 'ISSUES',
      },
      {
        class: 'nav-link',
        href: '/',
        content: 'UPDATES',
      },
      {
        class: 'nav-link',
        href: '/',
        content: 'GET INVOLVED',
      },
      {
        class: 'nav-link active',
        href: '/',
        content: 'DONATE',
      },
    ],
    socialMedia: [ twitter, facebook, instagram ],
  },
  hero: {
    title: 'A fresh new \n voice for this \n new era',
    description: 'Elevator pitch. Lorem ipsum dolor sit amet, \n consectetur adipiscing elit, sed do eiusmod \n tempor ut labore et dolore magna aliqua.'
  },
  donate: {
    backgroundColor: '#F2541B',
    logo: donateLogo,
    buttons: ['$5', '$10', '$50', '$100', '$250', 'OTHER']
  }
};