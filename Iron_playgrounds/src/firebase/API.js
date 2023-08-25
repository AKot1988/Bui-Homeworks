import { getDocs } from 'firebase/firestore';
import { playgroundCollectionRef } from './firebase';

export const getAllPlaygrounds = async () => {
  const responseSnapShot = await getDocs(playgroundCollectionRef);
  const res = [];
  await responseSnapShot.forEach((p) => res.push(p.data()));

  return res;
};

export const getAllPlaygroundsByUser = (userId) => {
  console.log('API -> getAllPlaygroundsByUser');
  return [];
};

export const getAllPlaygroundsByFilter = (userId, filter) => {
  console.log('API -> getAllPlaygroundsByFilter');
  return [];
};
