export const styleChange = () => {
  const currentTime = new Date().getHours();
  const container = document.getElementById('pageContent');

  if (currentTime < 7 && currentTime >= 18) {
    // Нічний час
    container.style.setProperty(
      'background-image',
      "url('https://firebasestorage.googleapis.com/v0/b/ironplaygrounds.appspot.com/o/playgroundPhotos%2FbackgroundNight.jpg?alt=media&token=ded40433-3c37-40b2-8687-cdea8d3d4819')"
    );
  } else {
    // Денний час
    container.style.setProperty(
      'background-image',
      "url('https://firebasestorage.googleapis.com/v0/b/ironplaygrounds.appspot.com/o/playgroundPhotos%2FbacgroundDay.jpg?alt=media&token=d779d86d-8b9e-4f98-9c57-eac712010c6d')"
    );
  }
};
