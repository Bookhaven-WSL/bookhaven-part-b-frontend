import axios from "axios";
import { useState } from "react";
import Cards from "../components/Cards";

export default function Search(props) {
    const [title, setTitle] = useState("");
    const [books, setBooks] = useState([]);

    const findBooks = async () => {
        const jwtToken = localStorage.getItem('token');

        
        if (!jwtToken) {
            console.error('JWT token not found, please log in.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/book/search-new', {title: title}, {
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
                onChange={(e) => setTitle(e.target.value)}
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
