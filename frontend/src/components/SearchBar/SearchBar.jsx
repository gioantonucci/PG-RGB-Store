import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { searchProducts } from "../../redux/actions";
import {BiSearchAlt2} from 'react-icons/bi'

export default function SearchBar() {
  const [search, setSearch] = useState("");
  let dispatch = useDispatch();
  const navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault();
    dispatch(searchProducts(search));
    setSearch("");
    navigate('/categories')
  }

  function onInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);

  
  }
  return (
 
      <form onSubmit={onSubmit} className='flex items-center sm:max-w-max lg:w-full  '>
  
        <input
          className=" border border-primary-400 lg:border-2
          bg-primary-200 lg:h-10 rounded-lg text-sm focus:outline-none 
         sm:placeholder:text-xs md:max-w-max md:h-9 md:placeholder:text-lg sm:max-w-max lg:pr-36 "
          type="text"
          placeholder="Search..."
          value={search}
          onChange={onInputChange}
        ></input>
      
<<<<<<< HEAD
          <button type="submit" className=" relative right-0  sm:ml-[-1rem] sm:mt-[0.5rem] md:pt-3 lg:ml-[-2rem] lg:mt-0 ">
        <BiSearchAlt2 className="sm:h-5 sm:w-5 sm:pb-2 sm:pr-2 text-primary-400 lg:h-11 lg:w-8 "/>
        </button>
=======
        <input type="submit" className="absolute right-0 top-0 mt-5 mr-4" value='🔍'>
        </input>
>>>>>>> 7524d3353ff9aa383ba1d9753642b1f731da80b9
      
      </form>
  
  );
}
