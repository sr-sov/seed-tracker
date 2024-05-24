'use client';

import mysql from "mysql2/promise";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import SupplierPromptCard from './SupplierPromptCard';

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
      {data.map((supplier) => (
        <SupplierPromptCard
          key={supplier.id}
          supplier={supplier}
          handleAdd={handleAdd}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [suppliers, setSuppliers] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    const fetchSuppliers = async () => {
      const response = await fetch('/api/suppliers');
      const data = await response.json();

      setSuppliers(data);
      console.log(data);
    }


    fetchSuppliers();

  }, []);

  // Filter suppliers based on search text
  const filteredSuppliers = suppliers.filter((supplier) => {
    // Implement your search logic here
    // You can search by supplier name, contact name, etc.
    const searchTermLower = searchText.toLowerCase();
    return (
      supplier.supplier_name.toLowerCase().includes(searchTermLower) || supplier.supply.toLowerCase().includes(searchTermLower) 
    );
  });

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a supplier OR the species available to a supplier'
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={filteredSuppliers}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed