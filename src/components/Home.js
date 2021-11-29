import axios from 'axios';
import {useState, useEffect} from 'react';
import MediaCard from '../components/MediaCard';
let nasaKey = process.env.REACT_APP_NASA_API_KEY;


export default function Home() {
    let reqUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`;
    const [data, setData] = useState([]);

    useEffect(async () => {
        try {
            let res = await axios.get(reqUrl);
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    },[])


    return (
        <div className='home'>
            <MediaCard data={data}/>
        </div>
    );
}