import React, {useEffect, useState} from 'react';
import { addBookRead, getBookRead } from '../ApiFunctionality/ApiFunctions';
import CardsRead from '../components/CardsRead';
import { useAuth } from '../contexts/authProvider';


export default function ReadPage(props) {
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
            const bookData = await getBookRead();
            setBooks(bookData);
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    };
  
    useEffect(() => {
        getBooks();
    }, []);
    
    
    const result = books?.books || []

    console.log(result)

    return (
        <>
            <h1>Read Page</h1>
            {loading ? (
                <p>Loading books...</p>
            ) : result.length > 0 ? (
                <CardsRead classname="Cards" books={result} />
            ) : (
                <p>No books in this bookshelf</p>
            )}
        </>
    );
};


        // const getBooks = async () => {
        //     const jwtToken = localStorage.getItem('token');
            
        //     if (!jwtToken) {
        //         console.error('JWT token not found, please log in.');
        //         return;
        //     }

        //     try {
                
        //         const response = await axios.get('http://localhost:8080/book/read', {
        //         headers: {
        //             'Authorization': `Bearer ${jwtToken}`,
        //         },
        //         });
        //         console.log('Books data:', response.data);
        //     } catch (error) {
        //         console.error('Failed to fetch books:', error.response);
        //         if (error.response && error.response.status === 403) {
        //         alert('Access forbidden. Please log in again.');
        //         window.location.href = '/';
        //         }
        //     }
        // };