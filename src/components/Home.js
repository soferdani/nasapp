
let nasaKey = process.env.REACT_APP_NASA_API_KEY;

export default function Home() {
    console.log(nasaKey);
    let reqUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`;

    return (
        <div className='home'>
            this is a component
        </div>
    );
}