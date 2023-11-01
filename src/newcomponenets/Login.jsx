"use client";

import React, {useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'



export default function Login(){
    const router = useRouter();

    useEffect(() => {
        //handle user session here later
      }, );
   
      const emailOrUsernameRef = useRef<any>(null)
      const passwordref = useRef<any>(null)

   


     

    
      
      
    return (
    <>
<form >
                    <input
                        className=" text-white block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email or Username" />
                        
                    <input 
                        type="password"

                      
                        className=" text-white block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <button
                        type="submit"
                        className=" bg-indigo-500 w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Login</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By Logining in, you agree to the &nbsp;
                        <Link className="no-underline border-b " href="#">
                            Terms of Service
                        </Link> and &nbsp;
                        <Link className="no-underline border-b " href="#">
                            Privacy Policy
                        </Link>
                    </div>

                <div className="text-grey-dark mt-6">
                    Don't have an account? &nbsp;
                    
                    <Link className="no-underline border-b border-blue text-blue" href="../signup/">
                    Sign up
                    </Link>.

                </div>

                </form>
    </>
    )
  }
  
