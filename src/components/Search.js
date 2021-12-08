import axios from "axios";
import { useState } from "react";
import MediaCard from "./MediaCard";

export default function Search() {
    
    const [searchInput, setSearchInput] = useState ('')
    const [searchRes, setSearchRes] = useState ([])
    
    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSubmitSearch = async () => {
        let dataFromApi = await axios.get(`https://images-api.nasa.gov/search?q=${searchInput}`)
        dataFromApi = dataFromApi.data.collection.items
        setSearchRes(dataFromApi)
        setSearchInput('')
        console.log(dataFromApi);
    }

//item.links[0].href
//item.data[0].title
    return (
        <>
            <div className='Search'>
                <input value={searchInput} type='text' placeholder='Search' onChange={handleChange} />
                <button onClick={handleSubmitSearch}>Search</button>
            </div>
            <div className='SearchResults'>
                {searchRes.map(item => {
                    console.log(item.data[0].title);
                })}
            </div>
        </>
    );
}