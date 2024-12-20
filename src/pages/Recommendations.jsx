import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { findBookRecommended, getBookRecommended } from "../ApiFunctionality/ApiFunctions";


export default function Recommendations(props) {
    const [genre, setGenre] = useState("");
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState(false);
    const [loading, setLoading] = useState(false);
    const URL = "https://bookhaven-part-b-backend.onrender.com"
    const findBooksRecommended = async () => {
        const jwtToken = localStorage.getItem('token');

        
        if (!jwtToken) {
            console.error('JWT token not found, please log in.');
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(`${URL}/book/recommended-new`, {genre: genre}, {
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
        } finally {
            setSearch(true);
            setLoading(false);
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
                onChange={(event) => setGenre(event.target.value)}
            />
            <button onClick={findBooksRecommended}>Search</button>

            <div>
                {loading && <p>Loading books...</p>}
                
                {!loading && (result && result.length > 0 ? (
                        <Cards className="Cards" books={result} />
                ) : (
                        search && <p>Sorry, no books matching that search</p>
                ))}
            </div>
        </>
     );
}