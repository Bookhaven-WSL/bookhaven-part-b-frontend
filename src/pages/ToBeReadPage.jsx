import React, {useEffect, useState} from 'react';
import { addBookRead, getBookRead, getBookToBeRead } from '../ApiFunctionality/ApiFunctions';
import CardsRead from '../components/CardsRead';
import { useAuth } from '../contexts/authProvider';
import CardsToBeRead from '../components/CardsToBeRead';

export default function ToBeReadPage(props) {
        const [books, setBooks] = useState([]);
        const [error, setError] = useState(null);
        const { token, setToken } = useAuth();
        const [loading, setLoading] = useState(true)
    
    
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
            } finally {
                setLoading(false);
            }
        };
      
        useEffect(() => {
            getBooks();
        },[]);
        
        const result = books?.books || [];
    
        console.log(result)
    return (
        <>
            <h1>To Be Read Page</h1>
            {loading ? (
                <p>Loading books...</p>
            ) : result.length > 0 ? (
                <CardsToBeRead classname="Cards" books={result} />
            ) : (
                <p>No books in this bookshelf</p>
            )}
        </>
    )
}