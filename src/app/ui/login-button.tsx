'use client';

import Image from "next/image";
import { signIn } from "next-auth/react";
import { Button } from "./button";

export default function GoogleSignIn(){

    const handleClick = () => {
        signIn("google",{callbackUrl:'/users/dashboard'})
    }

    return(
       <Button className="w-full" onClick={handleClick}>
        Sign In Google 
        <Image src={'/googleLOGO.png'}
        height={50}
        width={50}
        alt=''
        className="ml-auto h-6 w-6 text-gray-50" 
        />
       </Button>
    )
}