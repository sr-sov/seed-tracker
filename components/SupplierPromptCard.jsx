'use client';

import Image from "next/image";

const SupplierPromptCard = ({ supplier, handleAdd, handleTagClick, handleEdit, handleDelete}) => {

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div>
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">{supplier.supplier_name}</h3>
          </div>          
        </div>

      </div> 
      <p className="font-inter text-sm text-slate-700">
        Contact Name: <span className="text-slate-500">{supplier.contact_name}</span>
      </p> 
      <p className="font-inter text-sm text-slate-700">
        Contact Number: <span className="text-slate-500">{supplier.contact_num}</span>
      </p> 
      <p className="font-inter text-sm text-slate-700">
        Email Address: <span className="text-slate-500">{supplier.email_add}</span>
      </p> 
      <p className="font-inter text-sm text-slate-700">
        Address: <span className="text-slate-500">{supplier.supplier_add}</span>
      </p>
      <p className="font-inter text-sm text-slate-700">
        Website Link: <a href={supplier.link}><span className="text-blue-500">{supplier.link}</span></a>
      </p>
      <p className="font-inter text-sm text-slate-700">
        Additional Info: <span className="text-slate-500">{supplier.info}</span>
      </p>
      <br/>
      <p className="font-inter text-sm text-red-700">
        Species Available: <br/><span className="text-slate-500">{supplier.supply}</span>
      </p> 
    </div>
  )
}

export default SupplierPromptCard