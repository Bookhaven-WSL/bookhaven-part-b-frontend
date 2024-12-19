import React, {useEffect, useState} from 'react';
import { addBookRead, getBookRead, getBookToBeRead } from '../ApiFunctionality/ApiFunctions';
import CardsRead from '../components/CardsRead';
import { useAuth } from '../contexts/authProvider';

export default function ToBeReadPage(props) {
        const [books, setBooks] = useState([]);
        const [error, setError] = useState(null);
        const { token, setToken } = useAuth();
    
    
        const getBooks = async () => {
            const jwtToken = localStorage.getItem('token');
            
            if (!jwtToken) {
                console.error('JWT token not found, please log in.');
                return;
            }
    
    
            try {
                const bookData = await getBookToBeRead();
                setBooks(bookData);
            } catch (error) {
                console.error(error)
            }
        };
      
        console.log(books.books)
        
        const result = books.books
    
        console.log(result)
    return (
        <>
            <h1>To Be Read Page</h1>
            <button onClick={getBooks}>Generate</button>

            <CardsRead classname="Cards" books={result} />
        </>
    )
}