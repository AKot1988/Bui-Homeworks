import { getDocs } from 'firebase/firestore';
import { playgroundCollectionRef } from './firebase';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

const auth = getAuth();

export const getAllPlaygrounds = async () => {
  const responseSnapShot = await getDocs(playgroundCollectionRef);
  const res = [];
  responseSnapShot.forEach((p) => res.push(p.data()));
  return res;
};

export const getAllPlaygroundsByUser = async () => {
  const userId = onAuthStateChanged(auth, (user) => {
    user.uid;
    return user.uid;
  });

  const responseSnapShot = await getDocs(playgroundCollectionRef);
  const res = [];
  responseSnapShot.forEach((p) => {
    if (p.data().author === auth.lastNotifiedUid) {
      res.push(p.data());
    }
  });

  console.log('API -> getAllPlaygroundsByUser');
  return res;
};

export const getAllPlaygroundsFavorites = async () => {
  const allCardsData = await getAllPlaygrounds();
  const res = [];
  allCardsData.forEach((p) => {
    if (p.usersToFavorite.includes(auth.lastNotifiedUid)) {
      res.push(p);
    }
  });
  console.log('API -> getAllPlaygroundsByFilter');
  return res;
};

// const responseSnapShot = await getDocs(playgroundCollectionRef);
// const res = [];
// responseSnapShot.forEach((p) => {
//   console.log(p.data().usersToFavorite);
//   if (p.data().usersToFavorite.filter(auth.lastNotifiedUid)) {
//     res.push(p.data());
//   }
// });
