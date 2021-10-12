import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (path: string) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<any>();
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(path)
            .then(res => {
                setLoading(false)
                return res.data;
            })
            .catch(err => {
                setError(err)
            })
            .then(res => {
                setData(res)
            })
    }, [path]);

    return {loading, data, error};
};

export default useFetch;