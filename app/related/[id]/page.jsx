"use client"

import React,{ useState, useEffect } from 'react'

import { useRouter } from 'next/navigation'

import { useSession } from 'next-auth/react'

import Link from 'next/link'

import Image from 'next/image'

import { useParams } from 'next/navigation'

import PromptCard from '@components/PromptCard'

const Related = () => {
    const { data:session } = useSession()

    const params = useParams()
    const promptId = params.id

    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchTheUser = async () => {
          const res = await fetch(`/api/profile/${promptId}`)
          const data = await res.json()
    
          setUser(data)
        }   
        
        fetchTheUser()
    }, [])

    useEffect(() => {
        const fetchPrompts = async () => {
          const res = await fetch(`/api/users/${promptId}/posts`)
          const data = await res.json()
    
          setPosts(data)
        }   
        
        fetchPrompts()
    }, [])

    console.log(posts)

    return (
        <section className='flex flex-col items-center justify-center'>
            <h1 className='head_text text-center'>
                Hello, I'm <span className='orange_gradient'>{user && user.username}</span> 
                <br/>
                Here my Prompts
            </h1>
            <Image
                src={user && user.image}
                alt={user && user.username}
                width={200}
                height={200}
                className='flex items-center justify-center my-6 object-contain rounded-full'
            />
            <p className='desc'>
                {user && user.email}
            </p>

            <div className='mt-16 prompt_layout'>
                {
                    posts && posts.map((prompt) => (
                        <PromptCard
                            key={prompt._id}
                            prompt={prompt}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Related