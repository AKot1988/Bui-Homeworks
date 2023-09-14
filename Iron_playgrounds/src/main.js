import { Home, LoginPage } from '@/pages';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import Header from '@/components/Header/Header';
import Places from '@/pages/Places/Places.js';
import {
  getAllPlaygrounds,
  getAllPlaygroundsByUser,
  getAllPlaygroundsByFilter,
} from '@/firebase/API.js';

const header = new Header();
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    header.renderLoggedIn(document.getElementById('app'));
    console.log('User is signed in');
    console.log(auth);
  } else {
    header.renderLoggedOut(document.getElementById('app'));
    console.log('User is signed out');
  }
});

const newPlaces = new Places();
newPlaces.render(document.getElementById('app'));
console.log(getAllPlaygrounds);
newPlaces.renderFilteredPlaces(getAllPlaygrounds);
newPlaces.render(document.getElementById('app'));

// const homePage = new Home();
// homePage.render(document.getElementById('app'));
