import { useEffect, useState } from "react";
import axios from 'axios';

export default function useGetData(url) {
    const [data, setData] = useState([]);
    useEffect(()=> {
        axios.get(url).then(res => {
            setData(res.data);
        }).catch(err=> console.log(err));
    },[data]);
    return data;
}
