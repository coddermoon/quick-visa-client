import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKeyREACT_APP_apiKey,
    authDomainREACT_APP_authDomain,
    projectIdREACT_APP_projectId,
    storageBucketREACT_APP_storageBucket,
    messagingSenderIdREACT_APP_messagingSenderId,
    appIdREACT_APP_appId,
  };

  const app = initializeApp(firebaseConfig);


 export default app;
