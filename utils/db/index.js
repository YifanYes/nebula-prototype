import admin from 'firebase-admin';

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(
                JSON.parse(Buffer.from(process.env.FIREBASE_CONFIG_BASE_64, 'base64').toString('ascii')))
        });
        console.log('Initialized Firebase!')
    } catch (error) {
        console.log('Firebase admin initialization error', error.stack);
    }
}

export default admin.firestore();