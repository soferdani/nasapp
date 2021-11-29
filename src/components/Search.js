import axios from "axios";
import { useState } from "react";

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

    return (
        <div className='Search'>
            <input value={searchInput} type='text' placeholder='Search' onChange={handleChange} />
            <button onClick={handleSubmitSearch}>Search</button>
        </div>
    );
}