import { useState } from "react";
import "../styles/Cards.css";
import { addBookRead, updateBook } from "../ApiFunctionality/ApiFunctions";

const CardsToBeRead = ({ books, className }) => {
    if (!books || books.length === 0) {
        return <div className={className}>No books found.</div>;
    }

    

    const [buttonText, setbuttonText] = useState(
        books.map(() => ({text: "Read", disabled: false}))
    );

    const handleReadButton = (index) => {
        const updatedStates = [...buttonText];
        updatedStates[index] = { text: "Added", disabled: true};
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
                        <button onClick={() => { 
                                    if (bookArray?.olid) {
                                        updateBook(bookArray?.title); handleReadButton(index);
                                    } else {
                                        console.error('Invalid OLID');
                                    }
                                }}
                                disabled={buttonText[index].disabled}
                            >{buttonText[index].text}</button>
                    </div>
                )
            })}
        </div>
    );
};

export default CardsToBeRead;