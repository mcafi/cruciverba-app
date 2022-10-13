import { firestore } from '../utils/firebase';

export default defineEventHandler(async event => { 
    const ref = firestore.doc(`test/asd`);
    const snapshot = await ref.get();
    const data = snapshot.data();
    return data;
})