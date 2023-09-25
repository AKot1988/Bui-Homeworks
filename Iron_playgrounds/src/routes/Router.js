import { Home, LoginPage, PlacesPage } from '@/pages';
import { ROUTES_NAMES } from './helper';
import Header from '@/components/Header/Header';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

//TODO: перенести рендер хедера сюди в навігейт

const auth = getAuth();

const Router = {
  header: new Header(),
  user: null,
  pages: {
    [ROUTES_NAMES.home]: new Home(),
    [ROUTES_NAMES.login]: new LoginPage(),
    [ROUTES_NAMES.places]: new PlacesPage(),
  },
  currentPage: null,
  contentContainer: document.getElementById('pageContent'),
  headerContainer: document.getElementById('pageHead'),

  navigate(route) {
    // check if the route is one of the registered in ROUTES_NAMES
    const isRouteValid = Object.values(ROUTES_NAMES).some(
      (routeName) => routeName === route
    );
    // if route is invalid - fuck them all! throw this fucking error and see what happens!
    if (!isRouteValid) throw new TypeError(`Route doesn't exist - ${route}`);

    this.currentPage = this.pages[route];

    this.contentContainer.replaceChildren();

    this.currentPage.render(this.contentContainer);
  },

  changeAuth(user) {
    this.user = user;
    if (this.user) {
      this.header.renderLoggedIn(this.headerContainer);
    } else {
      this.header.renderLoggedOut(this.headerContainer);
    }
  },
};

export default Router;
