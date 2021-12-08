import axios from 'axios';
import {useState, useEffect} from 'react';
import MediaCard from '../components/MediaCard';
import Loader from '../components/Loader';
let nasaKey = process.env.REACT_APP_NASA_API_KEY;


export default function Home() {
    let reqUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async () => {
        try {
            setIsLoading(true);
            let res = await axios.get(reqUrl);
            setData(res.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    },[])



    return (
        <div className='home'>
            {isLoading ? <Loader /> : <MediaCard data={data} />}
        </div>
    );
}