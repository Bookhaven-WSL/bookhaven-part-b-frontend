import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { findBookRecommended, getBookRecommended } from "../ApiFunctionality/ApiFunctions";


export default function Recommendations(props) {
    const [genre, setGenre] = useState("");
    const [books, setBooks] = useState([]);

    const findBooksRecommended = async () => {
        const jwtToken = localStorage.getItem('token');

        
        if (!jwtToken) {
            console.error('JWT token not found, please log in.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/book/recommended-new', {genre: genre}, {
                headers: {
                    'Authorization': `Bearer ${jwtToken}`,
                },
            });
            console.log('Books data:', response.data);
            setBooks(response.data);
        } catch (error) {
            console.error('Failed to fetch books:', error.response);
            if (error.response && error.response.status === 403) {
                alert('Access forbidden. Please log in again.');
                window.location.href = '/';
            }
        }
    };

    const result = books.books;
    console.log (result)
    
    return (
        <>
            <h1>Recommended</h1>
            <label htmlFor="bookGenre">Genre: </label>
            <input
                type="text"
                id="bookGenre"
                name="bookGenre"
                value={genre} 
                placeholder="e.g Science Fiction"
                onChange={(e) => setGenre(e.target.value)}
            />
            <button onClick={findBooksRecommended}>Search</button>

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