import { useState } from "react";
import { addBookRead, addBookToBeRead } from "../ApiFunctionality/ApiFunctions";
import "../styles/Cards.css";

const Cards = ({ books, className }) => {
    if (!books || books.length === 0) {
        return <div className={className}>No books found.</div>;
    }


    const [buttonReadText, setbuttonReadText] = useState(
        books.map(() => ({text: "Read", disabled: false}))
    );

    const [buttonToBeReadText, setbuttonToBeReadText] = useState(
        books.map(() => ({text: "Want To Read", disabled: false}))
    );

    const handleButton = (index) => {
        const updatedReadStates = [...buttonReadText];
        const updatedToBeReadStates = [...buttonToBeReadText];
        updatedReadStates[index] = { text: "", disabled: true};
        updatedToBeReadStates[index] = { text: "", disabled: true};
        setbuttonReadText(updatedReadStates);
        setbuttonToBeReadText(updatedToBeReadStates);
    }

    return (
        <div className="cards-container">
            {books.map((bookArray, index) => {
                return (
                    <>
                        <div key={index} className="card">
                            <img
                                src={bookArray[5].coverImage}
                                alt={`Book Cover ${index + 1}`}
                                className="card-book-img"
                            />
                            <button 
                                className="read-button"
                                onClick={() => { 
                                    if (bookArray[0]?.olid) {
                                        addBookRead(bookArray[0].olid); handleButton(index);
                                    } else {
                                        console.error('Invalid OLID');
                                    }
                                }}
                                disabled={buttonReadText[index].disabled}
                                >{buttonReadText[index].text}</button>
                                
                            <button 
                                className="tbr-button"
                                onClick={() => { 
                                    if (bookArray[0]?.olid) {
                                        addBookToBeRead(bookArray[0].olid); handleButton(index);
                                    } else {
                                        console.error('Invalid OLID');
                                    }
                                }}
                                disabled={buttonToBeReadText[index].disabled}
                                >{buttonToBeReadText[index].text}</button>
                        </div> 
                    </>
                  
                );
            })}
        </div>
    );
};

export default Cards;