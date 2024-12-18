import axios from "axios";
import { useState } from "react";

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

    return (
        <>
            <h1>Search Page</h1>
            <label htmlFor="bookTitle">Book Title: </label>
            <input
                type="text"
                id="bookTitle"
                name="bookTitle"
                value={title} 
                onChange={(e) => setTitle(e.target.value)} // Track the book title
            />
            <button onClick={findBooks}>Search</button>

            {books.length > 0 && (
                <ul>
                    {books.map((book, index) => (
                        <li key={index}>{book.title}</li>
                    ))}
                </ul>
            )}
        </>
    );
}