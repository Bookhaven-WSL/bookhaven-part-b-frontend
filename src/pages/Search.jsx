import axios from "axios";
import { useState } from "react";
import Cards from "../components/Cards";

export default function Search(props) {
    const [title, setTitle] = useState("");
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState(false);
    const [loading, setLoading] = useState(false);
    const URL = "https://bookhaven-part-b-backend.onrender.com"
    const findBooks = async () => {

        const jwtToken = localStorage.getItem('token');

        
        if (!jwtToken) {
            console.error('JWT token not found, please log in.');
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(`${URL}/book/search-new`, {title: title}, {
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


            
        
    
    return (
        <>
            <h1>Search Page</h1>
            <label htmlFor="bookTitle">Book Title: </label>
            <input
                type="text"
                id="bookTitle"
                name="bookTitle"
                value={title} 
                placeholder="e.g The Wizard of Oz"
                onChange={(event) => setTitle(event.target.value)}
            />
            <button onClick={findBooks}>Search</button>

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
