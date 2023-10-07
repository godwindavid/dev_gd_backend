import admin from "firebase-admin";
import { MongoClient } from "mongodb";


export const mongoQuery = async (query) => {
    try {
    } catch (error) {
        console.log(error);
    }
}

//------FIREBASE--------//

const serviceAccount = {
    "type": "service_account",
    "project_id": "devgd-4431d",
    "private_key_id": "bdd3c982b261e3bb6f8a698281474943a51fe59e",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDtNhyOBIYOgemI\n64jeMMGn7voPGpRINFrQzUHvOnStPezXRjwjl+TPdoJClHf+f/KQx9U+oDKgAZaV\nch7HmdioWBnEpvKEJmnavMLJLUF2k41Lgf+1xRF50fIKTBVfQ+cUsLnD+kDRSvmZ\nS4kx6aX12UYLU/Tpav3WnGxOpeBJacNcf8nkfZUh53yHCwYjitWnkiuMP1oto3ZE\np15DjJ2c6Mp6SfvjTPZoyV+QknuzgWks00NTkqEVpSpdhlg6TQWZ0lcS7tGeEyZZ\n+bUfggKDSebF4oBrtb49nyX6RlvG1G36T6E+TZZWrnsatKeGnyJbH8+UTURuaFmP\n7buRzL0ZAgMBAAECggEABMYtBvKyXAJjV90dsRMcIqwdnkYzq8xZ84/d/tmXVZFE\nfgSs2y6IbWB+OKbST231zNIoyYzh1/SQOkvEsNG42ZKEWj/d66j2Qm/AH9poUeGg\nW1+vbNIdiu0dyPVFDNjKAtGXu4kC2vN+WIZ7qWSBcZRA46N572S23SXizCZsgC21\n1FtBLSgyEC5G6zngXAfq9QCY43s+mVR+Us1UBpVDrViEHWGeQjKT2qCKLIN4uqo7\nmDbGVxcg2KxHRUZIcUj4EsWg5G6yKkT1pl4v3O2W9YIoIO4hkJL3haso6ItCiPhl\nU5NmixFUSb6+Sc/7KBgfD4cjUB/f4fjqPE88iLtkgQKBgQD5IzVigGXmyuzS8XDv\nXfoLIpTUT/qGRRG4cA0oE1xBK3gNZ+pHIvpkL1SlZScEnsv5Jj3zB+Ucw/CzbNJk\nEiT7hQXta5jnLzPl0SJD7UEv0GFsedm2rFGBqop2kcirzso0+RbcKJArN4lOenEy\nKo46Y+rBDS9oUmEkguwQVXa56QKBgQDzvs5Hex3ZWpnLQf2KqMl3d0vF2XP5pNCx\nWgHjIu9KqbAdjXn6RRwF3DfSnTkmUH6npE3IRGfaJNjFDLzvxtbXeZZT53bLYtCE\nZrbKdCedHKmqBoA/zzQVokgBkHCrEnL4xIaTTtN5qekx89zK7+fsf2rZfcObs9fP\nTlJwbwG7sQKBgQD3hpSutfUIdYsQFdPn7o3UbFpECuZUauEtRx67N2kMUrznTNxG\nKyltSl0mKra2b3MmqmkYQjrO9pn6Gl96D1DxGHwIJEP5RTuh1MPfiySd9cIlvXai\neNhOJPuGzFb84+qg8O5WdHKwjW/9Kce3WPKQbt85SPlWA6sCVJVnsRHRqQKBgQCB\nW4kkPH3J5aBrU9lYJl3Njj1jghVfrw2moesQfXDbghTaikPrA5Rss8PYfeJfqCaf\nl75EA7HN/vIgGbOH2VIZxwh1/Qh5xjZ9nflylpSTeCu+9XZI5xFwTdDDK8HvuHnV\n9o6pTRNEpV0CSrap6Qp/49t0E5+lWZu2BI4R54fW8QKBgCExB2rr/KIRwnltVAP2\nFbjXp2mTTv7S3QLdkOP6fP450knqwafoOXbFOBDCH7+EJ5gae/q5x60Y/J3UUog0\nLEsE70VqSc4u3ERWitGYMnEeQx0d4zHSQua50YxnjJbK7JnacKMqpqcHcDbLiirG\nHStuKOXvWjtGkKvneDx3xOLD\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-649sk@devgd-4431d.iam.gserviceaccount.com",
    "client_id": "103411319158313175565",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-649sk%40devgd-4431d.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
export const db = admin.firestore();

export const User = db.collection("User")