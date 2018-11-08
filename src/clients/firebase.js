import * as firebase from 'firebase';

async function loadDatabase() {
    const app = firebase.initializeApp({
      apiKey: "AIzaSyCpc1noPpADSu0vm5AYdUmNSnjEUMt5ZQI",
      authDomain: "studio2-331cf.firebaseapp.com",
      databaseURL: "https://studio2-331cf.firebaseio.com",
      projectId: "studio2-331cf",
      storageBucket: "studio2-331cf.appspot.com",
      messagingSenderId: "1016551157105"
    }, "Studio2");
  
    return firebase.database(app);
}

export async function getQuestions() {
  const database = await loadDatabase();
  const databaseValues = await database.ref('/').once('value');
  return databaseValues.val();
}
