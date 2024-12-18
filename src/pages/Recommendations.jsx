import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";


export default function Recommendations(props) {
    const [genre, setGenre] = useState("");
    const [books, setBooks] = useState([]);

    const findBooks = async () => {
        const jwtToken = localStorage.getItem('token');

        
        if (!jwtToken) {
            console.error('JWT token not found, please log in.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/book/recommended', {genre: genre}, {
                headers: {
                    'Authorization': `Bearer ${jwtToken}`,
                },
            });
            console.log('Books data:', response.data);
            setBooks(response.data);
        } catch (error) {
            console.error('Failed to fetch books:', error.response);
            // if (error.response && error.response.status === 403) {
            //     alert('Access forbidden. Please log in again.');
            //     window.location.href = '/';
            // }
        }
    };

    const result = books.books;

    return (
        <>
            <h1>Recommended</h1>
            <label htmlFor="bookTitle">Genre: </label>
            <input
                type="text"
                id="bookGenre"
                name="bookGenre"
                value={genre} 
                placeholder="e.g Science Fiction"
                onChange={(e) => setGenre(e.target.value)}
            />
            <button onClick={findBooks}>Search</button>

            <div>
                {result && result.length > 0 ? (
                        <Cards className="Cards" books={result} />
                ) : (
                        <p>No books matching that search</p>
                )}
            </div>
        </>
     );
}