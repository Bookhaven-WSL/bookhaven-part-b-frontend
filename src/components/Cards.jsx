import "../styles/Cards.css";

const Cards = () => {
    console.log("Cards component is rendering!");
    return (
        <div className="cards-container">
            {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="card">
                    Card {i + 1}
                </div>
            ))}
        </div>
    );
};

export default Cards;