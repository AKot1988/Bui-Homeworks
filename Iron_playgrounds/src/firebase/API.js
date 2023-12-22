import { doc, getDoc, getDocs } from 'firebase/firestore';
import { getStorage, ref } from "firebase/storage";
import { playgroundCollectionRef, favoritesCollectionRef, storage } from './firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Router } from '@/routes';

export const auth = getAuth();
// console.log(Router.user);
// const userID = onAuthStateChanged(auth, (user) => {
//   console.log(user.uid);
// });
// console.log(userID);

export const getAllPlaygrounds = async () => {
  const responseSnapShot = await getDocs(playgroundCollectionRef);
  const res = [];

  responseSnapShot.forEach((playGroundReference) => {
    const playGround = {
      ...playGroundReference.data(),

      id: playGroundReference.id,
    };

    res.push(playGround);
  });

  return res;
};

export const getAllPlaygroundsByUser = async () => {
  const responseSnapShot = await getDocs(playgroundCollectionRef);
  const res = [];
  responseSnapShot.forEach((p) => {
    const playGround = {
      ...p.data(),
      id: p.id,
    };

    if (playGround.author === auth.lastNotifiedUid) {
      res.push(playGround);
    }
  });

  return res;
};

export const getFavorites = async () => {
  //отримуємо докРеф (посилання на документ у колекції фейворітс)
  const docRef = doc(favoritesCollectionRef, Router.user.uid);
  //отримуємо документСнепшот (на один конкретний документ)
  const res = await getDoc(docRef);
  // console.log(res);
  //отримуємо масив з посиланнями (докРефи) на документи у колекції плейграундс
  const currentUserFavoritesList = res.data()?.list;
  // console.log(currentUserFavoritesList);
  //отримуємо масив з документСнепшотами у колекції плейграундс
  const favDocumentsSnapshots = await Promise.all(
    currentUserFavoritesList.map((favDocRef) => getDoc(favDocRef)) //
  );
  //отримуемо масив з повноцінними даними (обєкт для створення АйронКард), розпаковуємо кожний обєкт
  //і пхаємо в нього ще й айдішнік документа (у документСнепшота є айдішнік)
  return favDocumentsSnapshots.map((docSnapshot) => ({
    ...docSnapshot.data(),
    id: docSnapshot.id,
  })); //
};

// export const userIDCardList = async () => {
//   const favArray = await getFavorites();
//   const favIDArray = [];
//   favArray.forEach((data) => {
//     favIDArray.push(data.id);
//   });
//   return favIDArray;
// };

export const doesCardInFavorites = async function (
  id,
  unCheckedSVG,
  checkedSVG
) {
  const favArray = await getFavorites();
  const favIDArray = [];
  favArray.forEach((data) => {
    favIDArray.push(data.id);
  });
  if (favIDArray.includes(id)) {
    return checkedSVG;
  } else {
    return unCheckedSVG;
  }
};
