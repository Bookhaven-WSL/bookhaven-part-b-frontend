import React, {useEffect, useState} from 'react';
import { addBookRead, getBookRead } from '../ApiFunctionality/ApiFunctions';
import Cards from '../components/Cards';


function ReadPage(props) {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getBooks = async () => {
            try {
                const bookData = await getBookRead();
                setBooks(bookData);
            } catch (error) {
                console.error(error)
            }
        };

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
