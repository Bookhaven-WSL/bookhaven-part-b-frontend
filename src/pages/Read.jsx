import React, {useEffect, useState} from 'react';
import { addBookRead, getBookRead } from '../ApiFunctionality/ApiFunctions';
import CardsRead from '../components/CardsRead';
import { useAuth } from '../contexts/authProvider';


export default function ReadPage(props) {
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
            const bookData = await getBookRead();
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
            <h1>Read Page</h1>
            <button onClick={getBooks}>Generate</button>

            <CardsRead classname="Cards" books={result} />
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