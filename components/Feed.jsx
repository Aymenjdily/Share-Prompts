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

  const handleSearch = (e) => {

  }

  console.log(posts)

  useEffect(() => {
    const fetchPrompts = async () => {
      const res = await fetch('/api/prompt')
      const data = await res.json()

      setPosts(data)
    }

    fetchPrompts()
  }, [])
  

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
          type="text" 
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearch}
          required
          className='search_input peer'  
        />
      </form>

      <PromptCardList
        data={posts}
        handleTag={() => {}}
      />
    </section>
  )
}

export default Feed