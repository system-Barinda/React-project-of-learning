import { useEffect, useState } from "react";
import Card from "./card";
import url from "./data";

export default function Pagination() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const[currentPage,setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Network connection failed");
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error}</h2>;


    const itemParPage = 6;
    const totalPage = Math.ceil(data.length / itemParPage);
    const startIndex = (currentPage - 1) * itemParPage
    const endIndex = startIndex + itemParPage


    currentPage = data.slice(startIndex,endIndex);
    return <Card data={data} />;
}