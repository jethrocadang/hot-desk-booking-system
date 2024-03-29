'use client';

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

// type Props = {
//     children?: React.ReactNode,
//     session?: Session
    
// }



// export function Providers({children, session}: Props) {
    
//     return <SessionProvider session={session}>{children}</SessionProvider>
// }


interface Props {
    children : React.ReactNode;
}


export function Providers(props:Props){
    return <SessionProvider>{props.children}</SessionProvider>
}