import { makeAutoObservable, runInAction } from "mobx";
import { Octokit } from "octokit";
import { createContext, useContext } from "react";


class GhProfileStore
{
    kit: Octokit | null = null;
    constructor() {
        makeAutoObservable(this);
    }

    authorize = async (token: string) => {
        try {
           const _kit = new Octokit({auth: token});
           let user = await _kit.rest.users.getAuthenticated()
           runInAction(() => {
            this.kit = _kit;

           })
        } catch (error) {
            console.log(error);
        }
    }
    
    isAuthorized = () => {return this.kit !== null;}


}

interface ProfileContext {
    profile: GhProfileStore
}

const profileStore: ProfileContext = {
    profile: new GhProfileStore()
}

const storeContext = createContext(profileStore);

export function useGhProfile() {
    return useContext(storeContext);
}

