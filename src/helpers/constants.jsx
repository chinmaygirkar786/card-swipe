import {Dimensions} from 'react-native';

const CARDS = [
  {id: 1, bgColor: '#0564fc'},
  {id: 2, bgColor: '#05fc11'},
  {id: 3, bgColor: '#fcec05'},
  {id: 4, bgColor: '#fc052e'},
  {id: 5, bgColor: '#f405fc'},
];

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export {CARDS, screenHeight, screenWidth};
