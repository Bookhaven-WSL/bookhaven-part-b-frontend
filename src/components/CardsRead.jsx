import { useState } from "react";
import { deleteBook } from "../ApiFunctionality/ApiFunctions";
import "../styles/Cards.css";

const CardsRead = ({ books, className }) => {
    if (!books || books.length === 0) {
        return <div className={className}>No books found.</div>;
    }

    const [updatedBooks, setupdatedBooks] = useState([])

    const handlePageRender = (index) => {
        const newBooks = books.splice(index, 1);
        setupdatedBooks(newBooks);
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
                            className="remove-button"
                            onClick={() => { 
                                if (bookArray?.olid) {
                                    console.log(bookArray.title)
                                    deleteBook(bookArray.title);
                                    handlePageRender(index)
                                } else {
                                    console.error('Invalid OLID');
                                }
                            }}
                        >Remove</button>
                        <select name="rating" id="ratingSelection">
                            <option value="0">N/A</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button
                            className="update-button"
                        >Update Rating</button>
                    </div>
                    
                );
            })}
        </div>
    );
};

export default CardsRead;