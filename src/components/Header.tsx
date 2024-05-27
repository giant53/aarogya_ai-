"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"


const Header = () => {

  const {data: session } = useSession()
  const user = session?.user


  const router = useRouter()
 
  return (
    <>
    
    <div className='flex justify-center items-center p-2 bg-blue-500'>
    </div>
    
    <header className="bg-blue-50 py-2 w-full">
      
    <div className="flex justify-between items-center px-5">
    <Link href="/" className=' cursor-pointer items-center gap- flex'>
                <Image
                    src="/icons/logo.png"
                    alt='logo'
                    width={34}
                    height={34}
                    className='size-[44px] max-xl:size-14'
                />
                <h1 className='navbar-logo'>
                    Aarogya AI
                </h1>
            </Link>
        <nav className="space-x-10">
          <Link href="/">
            <Button className=" hover:underline">Home</Button>
          </Link>
          <Link href="/find-doctor">
            <Button className=" hover:underline">Find Doctor</Button>
          </Link>
          <Link href="/my-appointments">
            <Button className=" hover:underline">Appointments</Button>
          </Link>
          <Link href="/facilities">
            <Button className=" hover:underline">Facilities</Button>
          </Link>
        </nav>

        {
          session ? (
            <div className="flex gap-7 items-center justify-around">
                <Link href="/patient/profile">
                  <div className="flex items-center gap-2">
                    <Image
                      src={session.user.image as string || "/icons/profile.png"}
                      alt="profile"
                      width={30}
                      height={30}
                    />
                    <p>{session.user.name}</p>
                  </div>
                </Link>

                <Button
                  className="text-red-500 px-3 py-2 rounded-3xl w-28 border-red-500 hover:bg-red-500 hover:text-white"
                  onClick={async() => {
                  await signOut();
                  router.push('/sign-in');
                }
                 }
                 variant={'outline'}
                 color={'red'}
                
                >
                    Sign Out
                </Button>
            </div>
          ) : (
            <Link href="/sign-up">
            <Button className="text-white bg-blue-500 bg-opacity-95 px-3 py-2 rounded-3xl w-40 hover:bg-blue-700">
              SignUp/Login
            </Button>
            </Link>
          )
        }
        
        </div>
    </header>
    </>
  )
}

export default Header