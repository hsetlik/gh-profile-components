import React from "react";
import { useEffect } from "react";
import getGhCredential from "./gh-access/getGhCredential";
import { useGhProfile } from "./gh-access/useGhProfile";

export default function ProfileHeader () {
    const gh = useGhProfile();
    useEffect(() => {
        if (!gh.profile.isAuthorized()) {
            gh.profile.authorize(getGhCredential()).then(() => {
                console.log("Authorized to GitHub");
            });
        }

    }, [gh])

    return (
        <div>


        </div>
    )
}