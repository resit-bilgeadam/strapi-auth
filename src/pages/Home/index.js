import axios from 'axios';

function Home() {
    const fetchPrivates = async () => {
        const token = localStorage.getItem('token');
        console.log(token);
        
        const {data} = await axios.get('http://localhost:1337/privates', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log(data);
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={fetchPrivates}>Get Privates</button>
        </div>
    )
}

export default Home;
