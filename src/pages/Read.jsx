import React, {useEffect, useState} from 'react';
import { addBookRead, getBookRead } from '../ApiFunctionality/ApiFunctions';
import Cards from '../components/Cards';
import { useAuth } from '../contexts/authProvider';


function ReadPage(props) {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const { token, setToken } = useAuth();

    useEffect(() => {
        const getBooks = async () => {
            const jwtToken = localStorage.getItem('token');
            
            if (!jwtToken) {
                console.error('JWT token not found, please log in.');
                return;
            }

            try {
                
                const response = await axios.get('http://localhost:8080/book/read', {
                headers: {
                    'Authorization': `Bearer ${jwtToken}`,
                },
                });
                console.log('Books data:', response.data);
            } catch (error) {
                console.error('Failed to fetch books:', error.response);
                if (error.response && error.response.status === 403) {
                alert('Access forbidden. Please log in again.');
                window.location.href = '/';
                }
            }
        };

    //     const getBooks = async () => {
    //         try {
    //             const bookData = await getBookRead();
    //             setBooks(bookData);
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     };

        getBooks();

    }, []);

    return (
        <>
            <h1>Read Page</h1>
            <Cards classname="Cards" books={books} />
        </>
    );
};

export default ReadPage;
