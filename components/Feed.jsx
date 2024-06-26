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
    setSearchText(e.target.value);
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

  // Filter seeds based on search text
  const filteredSeeds = seeds.filter((seed) => {
    // Implement your search logic here
    // You can search by supplier name, contact name, etc.
    const searchTermLower = searchText.toLowerCase();
    return (
      seed.botanical_name.toLowerCase().includes(searchTermLower) || seed.species_name.toLowerCase().includes(searchTermLower) 
    );
  });

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a seed via their botanical name OR species name'
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={filteredSeeds}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed