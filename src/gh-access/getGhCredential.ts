
// importing credentials as 
import * as myCreds from '../../../gh-secrets/token.json';

interface Cred {token: string;}

export default function getGhCredential(): string {
    const data = require("../../../gh-secrets/token.json");
    const cred: Cred = JSON.parse(data);
    return data.token;
}