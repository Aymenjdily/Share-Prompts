"use client";

import Link from "next/link"

import Image from "next/image"

import { useState, useEffect } from "react"

import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Navbar = () => {
    const { data:session } = useSession()

    const [providers, setProviders] = useState(null)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const Providers = async () => {
            const res = await getProviders()
            setProviders(res);
        }

        Providers()
    }, [])

  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
            <Image src="/assets/images/logo.svg" alt="Logo" width={30} height={30} className="object-contain" />
            <p className="Logo_text">
                Prompts
            </p>
        </Link>
        {/* Desktop Nav */}
        <div className="sm:flex hidden">
            {
                session?.user ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create" className="black_btn">
                            Create Post
                        </Link>
                        <button className="outline_btn" type="button" onClick={signOut}>
                            Sign Out
                        </button>
                        <Link href="/profile">
                            <Image
                                src={session?.user.image}
                                width={37}
                                height={37}
                                className="rounded-full"
                                alt="profile"
                            />
                        </Link>
                    </div>
                ) : 
                (
                    <>
                        {
                            providers && Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className="black_btn"
                                >
                                    Sign In
                                </button>
                            ))
                        }
                    </>
                )
            }
        </div>

        {/* Mobile Nav */}
        <div className="sm:hidden flex relative">
            {
                session?.user ? (
                    <div className="flex">
                        <Image
                            src={session?.user.image}
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="profile"
                            onClick={() => setToggle((prev) => !prev)}
                        />
                        {
                            toggle && (
                                <div className="dropdown">
                                    <Link 
                                        className="dropdown_link"
                                        href="/profile"
                                        onClick={() => setToggle(false)}
                                    >
                                        My Profile
                                    </Link>
                                    <Link 
                                        className="dropdown_link"
                                        href="/create"
                                        onClick={() => setToggle(false)}
                                    >
                                        Create Prompt
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setToggle(false)
                                            signOut()
                                        }}
                                        className="mt-5 w-full black_btn"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <>
                        {
                            providers && Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className="black_btn"
                                >
                                    Sign In
                                </button>
                            ))
                        }
                    </>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar