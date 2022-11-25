import React, { useState } from "react"
import 'flowbite';

function Hero() {

  return (
<div className="hero">
<div className="herocontent">
<div className="headAndPraghrap">
<h1 className="head">Search Your Next Home</h1>
 <h4 className="praghraph">
     Find new featured property located in your local city
</h4>
</div>
<div className="selectcity">
     <div className="section1">
      <div id="dropdownDivider" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Istanbul</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ankara</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Izmir</a>
      </li>
      <li >
      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Adana</a>
    </li>
    </ul>
</div>
</div>
 
  <div class='section2'>
  <label className="label">property Type</label>
  
  <div id="dropdownDivider" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All Categories</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Apartement</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Villas</a>
      </li>
      <li >
      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Offices</a>
    </li>
    <li >
      <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Garage</a>
    </li>
    </ul>
</div>
  </div>
  <div>
 
</div>
  <div class='section2'>
  <label className="label">city</label>
  <select className="select">
    Be
    <option>1+1</option>
    <option>1+2</option>
    <option>1+3</option>
    <option>1+4</option>
  </select>
  </div>
 <div>
 <label className="label">city</label>
 <button id="dropdownUsersButton" data-dropdown-toggle="dropdownUsers" data-dropdown-placement="bottom" class="text-black bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Price Range
  <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

<div id="dropdownUsers" class="hidden z-10 w-60 bg-white rounded shadow dark:bg-gray-700">
  <ul class="overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUsersButton">
    <li>
      <a href="#" class="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
        From 40.000 To 10m
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
   
      From 60.000 To 20m
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">

      From 70.000 To 30m
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">

      From 80.000 To 40m
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
     
      From 90.000 To 60m
      </a>
    </li>
  </ul> 
</div>
 </div>
  <div class='section5'>
    <button className='go__btn'>
      GO!
    </button>
  </div>
</div>
</div>

 </div>

  )
}

export default Hero
