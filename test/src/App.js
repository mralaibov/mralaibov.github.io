import './App.css';
import Routes from "./routes/Routes";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Jobs from "./pages/jobs/Jobs";

const App = () => {
    // <Routes>
    //     <Jobs></Jobs>
    // </Routes>
    const [items, setItems] = useState([])
    const requestAPI = async () => {
        try {
            const res = await axios.post(process.env.REACT_APP_API_URL, {
                access_token:"wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
            });
            setItems(res.data)
            // const res2 = await axios.get(process.env.REACT_APP_API_URL);
            console.log(res)
        } catch (err) {
            console.log(err);
        }
    };

    useEffect( () => {
        requestAPI()
    }, [])
};

export default App;
