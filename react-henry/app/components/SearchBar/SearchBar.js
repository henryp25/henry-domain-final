import React from 'react'
// import { useRouter } from 'next/router'
import {useState, ChangeEvent } from 'react'


export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')

  const captureSearchQuery = (event) => {
    setSearchQuery(event.target.value)
  }

  const fetPostData = async () => {
    fetch(`/api/search/${searchQuery}`)
  }

  return (
    <div>
        <input type="text" placeholder="Search.." value={searchQuery} onChange={captureSearchQuery}></input>
    </div>
  )
}
