import React, { FC } from "react";
import { Props } from "./index";
import { useEffect } from "react";
import getGhCredential from "./gh-access/getGhCredential";
import { useGhProfile } from "./gh-access/useGhProfile";

// export default function ProfileHeader () {
//     const {profile} = useGhProfile();
//     useEffect(() => {
//         if (!profile.isAuthorized()) {
//             profile.authorize(getGhCredential()).then(() => {
//                 console.log("Authorized to GitHub");
//             });
//         }

//     }, [profile])

//     return (
//         <div>
//             {profile.isAuthorized() && (
//                 <span>User is authenticated!</span>
//             )}
//         </div>
//     )
// }

export const ProfileHeader: FC<Props> = ({children}) => {
    const {profile} = useGhProfile();
        useEffect(() => {
            if (!profile.isAuthorized()) {
                profile.authorize(getGhCredential()).then(() => {
                    console.log("Authorized to GitHub");
                });
            }
    
        }, [profile])
    
        return (
            <div>
                {profile.isAuthorized() && (
                    <span>User is authenticated!</span>
                )}
                {children}
            </div>
        ) 

  }