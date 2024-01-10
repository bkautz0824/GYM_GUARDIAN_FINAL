"use client"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

function AuthButton() {

const {data: session} = useSession();

if(session){
  return (
    <div className="flex p-2 ">
      <img
          src={session?.user?.image || '/default-avatar.png'} // Replace '/default-avatar.png' with your default image path
          alt={session?.user?.name}
          className="w-8 h-8 mr-2 rounded-full"
        />
    {/* {session?.user?.name}  */}
    {/* <br /> */}
    <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}
return (
    <div className="ml-6">
    Not signed in <br />
    <button onClick={() => signIn()}>Sign In</button>
    </div>
)
}


export function NavLogin() {
    return (
        <div>
            <AuthButton />
        </div>
    )
}