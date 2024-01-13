import { ThemeProvider } from "@/components/shadcn-ui/theme-provider"
import { Inter } from 'next/font/google'
import './global.css'
import AvatarUse from "@/components/shadcn-ui/AvatarUse"
import { ModeToggle } from "@/components/shadcn-ui/ModeToggle"
import DropDown from "@/components/shadcn-ui/DropDown"
import Image from "next/image"
import Link from "next/link"
import { getServerSession } from "next-auth"
import NextAuthProvider from "@/context/SessionPovider"
import { NavLogin } from "@/components/helpers/NavLogin"
import { HomeIcon } from '@radix-ui/react-icons';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gym Guardian',
  description: 'This app allows you to add, edit and delete workout records.  Soon you will be able to track your workouts overtime and track descriptive information about each workout.',
}

export default async function RootLayout({ children }) {

  const session = await getServerSession();
  return (
    <html lang="en">
       <body className={inter.className}>
       
        <ThemeProvider
              // attribute="class"
              // defaultTheme="dark"
              // enableSystem
              // disableTransitionOnChange
            >
        <NextAuthProvider session={session}>
             
          <header className="my-8 bg-black"> {/* Increased padding for better spacing */}
            <div className="w-full p-4 px-1 mx-auto"> {/* Center content with max-width */}
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-between w-full"> {/* Center the logo and text */}
                <NavLogin />
                <Link href="/">
                  
                  <Image
                    className="rounded-full"
                    alt="GYMGUARDIAN"
                    src="https://ih1.redbubble.net/image.3440946030.3036/raf,750x1000,075,t,101010:01c5ca27c6.jpg"
                    width="40"
                    height="40"
                  />

                </Link>
                  <h1 className="ml-2 text-2xl font-bold text-white max-sm:hidden">Welcome to Gym Guardian</h1>
                
                <p className="text-sm text-gray-400">
                  &nbsp; B & D Developers
                </p>
                {/* <DropDown display={"≡≡≡"} label={"Select a page"} items={"Home"}/> */}
                <div className="flex items-center">
                  <Link href="/" className="hover:scale-150">
                  <HomeIcon className="scale-150"/>
                </Link>
                <ModeToggle />
                </div>
                
                </div>
              </div>
            </div>
          </header>
        
            
                {/* <AvatarUse/> */}
              {/* <DropDown display={"Navigation"} label={"Select a page"} items={"Home"}/> */}
        
      
            {children}  

        <footer className="flex justify-center p-4">
          GYM GUARDIAN
        </footer>
        </NextAuthProvider>
        </ThemeProvider>
       
        </body>
    </html>
  )
}
