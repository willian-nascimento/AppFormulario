import Realm from 'realm';

export class Mongo {
    public async conectMongo() {
        try {
            const app = new Realm.App({ id: "application-0-umjby" });
            const credentials = Realm.Credentials.anonymous();
            const user = await app.logIn(credentials);
        } catch (err) {
            console.error("Failed to log in", err);
        }
        console.log("teste classe");
    }

}