import firebase from "../firebase";
import { CompleteMessage } from "../components/MessageForm";


const db = firebase.ref("/messages");

class MessageService {

    create(message: CompleteMessage) {
        // TODO GDPR
        // return db.push(message);
    }
}

export default new MessageService();