import { getPost } from '../api/Axios'
import React,{useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import ListPage from './ListPage'

function SearchPost() {

    const [posts, setPosts] = useState([])
    const [searchResults, setSearchResults] = useState([])

    useEffect(()=> {
        getPost().then(json =>{
            setPosts(json)
            return json
        }).then(json =>{
            setSearchResults(json)
        })
    },[])

  return (
    <div>
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults}/>
    </div>
  )
}

export default SearchPost
