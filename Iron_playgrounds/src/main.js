import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { Router, ROUTES_NAMES } from '@/routes';
import { getFavorites } from './firebase/API';

Router.navigate(ROUTES_NAMES.home);

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  Router.changeAuth(user);
  if (user) {
    getFavorites();
  }
});
