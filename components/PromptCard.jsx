'use client';

import Image from "next/image";

const PromptCard = ({ seed, handleAdd, handleTagClick, handleEdit, handleDelete}) => {

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div>
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">{seed.species_name}</h3>
          </div>          
        </div>

      </div> 
      <p className="font-inter text-sm text-slate-700">
        Botanical Name: <span className="text-slate-500">{seed.botanical_name}</span>
      </p> 
      <p className="font-inter text-sm text-slate-700">
        Location: <span className="text-slate-500">{seed.location}</span>
      </p> 
      <p className="font-inter text-sm text-slate-700">
        Region: <span className="text-slate-500">{seed.region}</span>
      </p> 
      <p className="font-inter text-sm text-slate-700">
        Quantity: <span className="text-slate-500">{seed.quantity}</span>
      </p> 
      {/*<div className="copy_btn">
          <Image 
            src='/assets/icons/add.svg'
            width={12}
            height={12}
          />
        </div>
        */
    }
    </div>
  )
}

export default PromptCard