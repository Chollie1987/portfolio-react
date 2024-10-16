import bakingPic from '../assets/baking-pic.jpg'
import myflixPic from '../assets/myflix-pic.png'
import travelPic from '../assets/travel-pic.jpg'

const portfolioData = [
    {
        id: 1,
        title: 'Go Chef Yourself',
        description: 'An app that allows you to find recipes based off ingredients you already have at home',
        technologies: ['JavaScript, MongoDB, CSS, API, Express'],
        link: 'https://go-chef-yourself.netlify.app',
        image: {bakingPic},

},
{
     id: 2,
        title: 'Myflix',
        description: 'Movie app that renders popular movies. You can watch clips and trailers of those movies, you can log in with authentication, and write reviews of your favoirite movies',
        technologies:['JavaScript, React, Firebase, CSS, HTML'],
        link: 'https://github.com/Chollie1987/myflix-app',
        image: {myflixPic},
},
{
     id: 3,
        title: 'Nomad 2.0',
        description: 'An all in one travel app where you can find airbnbs, campsites, hiking, and check the weather for your destination. There is also a blogging section where you can connect with other travelers.',
        technologies:['JavaScript, React, Expo, API integration, MongoDB'],
        link: 'https://github.com/tech-enigmas/my-app',
        image: {travelPic},
},
];

export default portfolioData;