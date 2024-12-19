import "../styles/Cards.css";

const CardsRead = ({ books, className }) => {
    if (!books || books.length === 0) {
        return <div className={className}>No books found.</div>;
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
                    </div>
                );
            })}
        </div>
    );
};

export default CardsRead;