import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';
import { Logger } from '@nestjs/common';

dotenv.config();

admin.initializeApp({
    credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PK,
    }),
});

export const getToken = authHeader => {
    return authHeader.split(' ')[1];
};

export const validateToken = async (token: string) => {
    try {
        const res = await admin.auth().verifyIdToken(token);
        return res.uid;
    } catch (e) {
        Logger.error(e);
        throw e;
    }
};

export const validateAndGetUid = async (authHeader: string) => {
    try {
        const token = getToken(authHeader);
        const res = await admin.auth().verifyIdToken(token);
        return res.uid;
    } catch (e) {
        Logger.error(e);
        throw e;
    }
}