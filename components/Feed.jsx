'use client'

import { useState, useEffect } from 'react'

import PromptCard from './PromptCard'

const PromptCardList = ({ data, handleTag }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {
        data.map((prompt) => (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            handleTag={handleTag}
          />
        ))
      }
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPrompts = async () => {
      const res = await fetch('/api/prompt')
      const data = await res.json()

      setPosts(data)
    }

    fetchPrompts()
  }, [])

  const filteredPosts = posts.filter((item) => {
    // tags

    if(item.tag.toLowerCase() == searchText.toLowerCase()){
      return item
    }

    // prompts

    if(item.prompt.toLowerCase().includes(searchText.toLowerCase())){
      return item
    }

    if(searchText == ""){
      return item
    }
  })

  const Items = [
    {
      id: 1,
      tag: "life"
    },
    {
      id: 1,
      tag: "self-development"
    },
    {
      id: 1,
      tag: "webdevelopment"
    },
  ]

  return (
    <section className='feed pb-12'>
      <form className='relative w-full flex-center'>
        <input 
          type="text" 
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          required
          className='search_input peer'  
        />
      </form>

      <div className='flex flex-wrap gap-5 my-3'>
        {Items && Items.map((item) => (
          <div className='font-inter text-sm blue_gradient cursor-pointer' onClick={() => setSearchText(item.tag)}>
            #{item.tag}
          </div>
        ))}
      </div>

      <PromptCardList
        data={filteredPosts}
        handleTag={() => {}}
      />
    </section>
  )
}

export default Feed