import "./Cards.css";

const Cards = () => {
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