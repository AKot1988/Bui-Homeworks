import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { Router, ROUTES_NAMES } from '@/routes';

Router.navigate(ROUTES_NAMES.home);

const auth = getAuth();

// const userID = onAuthStateChanged(auth, (user) => {console.log(user.uid)});

onAuthStateChanged(auth, (user) => {
  Router.changeAuth(user);
});
