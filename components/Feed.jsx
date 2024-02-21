'use client';

import mysql from "mysql2/promise";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
    const router = useRouter();

    const [posts, setPosts] = useState([]);

    const handleAdd = (post) => {
      router.push(`update-prompt?id=${post._id}`);
    }

    const handleEdit = (post) => {
      router.push(`update-prompt?id=${post._id}`);
    }
  
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((seed) => (
        <PromptCard
          key={seed.seed_collection_id}
          seed={seed}
          handleAdd={handleAdd}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [seeds, setSeeds] = useState([]);

  const handleSearchChange = (e) => {

  }

  useEffect(() => {
    const fetchSeeds = async () => {
      const response = await fetch('/api/seed-collection');
      const data = await response.json();

      setSeeds(data);
      console.log(data);
    }


    fetchSeeds();

  }, []);

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for an item'
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={seeds}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed