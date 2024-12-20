import { useState } from "react";
import "../styles/Cards.css";
import { addBookRead, deleteBook, updateBook } from "../ApiFunctionality/ApiFunctions";

const CardsToBeRead = ({ books, className }) => {
    if (!books || books.length === 0) {
        return <div className={className}>No books found.</div>;
    }
    const [updatedBooks, setupdatedBooks] = useState([])

    const [buttonText, setbuttonText] = useState(
        books.map(() => ({text: "Read", disabled: false}))
    );

    const handlePageRender = (index) => {
        const newBooks = books.splice(index, 1);
        setupdatedBooks(newBooks);
    }

    const handleReadButton = (index) => {
        const updatedStates = [...buttonText];
        updatedStates[index] = { text: "Done", disabled: true};
        setbuttonText(updatedStates);
    }
        
    return (
        <div className={className}>

            {books.map((bookArray, index) => {
                return (
                    <div key={index} className="card">
                        <img
                            src={bookArray.coverImage}
                            alt={`Book Cover ${index + 1}`}
                            className="card-book-img"
                        />
                        <button 
                            className="move-button"
                            onClick={() => { 
                                    if (bookArray?.olid) {
                                        updateBook(bookArray.title, "read", bookArray.rating); handleReadButton(index);
                                    } else {
                                        console.error('Invalid OLID');
                                    }
                                }}
                                disabled={buttonText[index].disabled}
                            >{buttonText[index].text}</button>
                            <button 
                                className="remove-button"
                                onClick={() => { 
                                    if (bookArray?.olid) {
                                        console.log(bookArray.title)
                                        deleteBook(bookArray.title)
                                        handlePageRender(index)
                                    } else {
                                        console.error('Invalid OLID');
                                    }
                                }}
                            >Remove</button>
                    </div>
                )
            })}
        </div>
    );
};

export default CardsToBeRead;