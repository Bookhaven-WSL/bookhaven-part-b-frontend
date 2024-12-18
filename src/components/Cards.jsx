import "../styles/Cards.css";

const Cards = ({books, classname}) => {
    console.log('Books:', books); // Check the value of books

    if (!Array.isArray(books)) {
        return <div>No books available or invalid format.</div>; // Handle the error gracefully
    }
    return (
        <div className={classname}>
            {books.map((book,index) => (
                <div key={index} className="card">
                    <img
                    src={book.coverImage}
                    alt={"Book Cover"}
                    classname = "card-book-img"
                    />
                    <Card />
                </div>
            ))}
        </div>
    );
};

export default Cards;