/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import "./Cart.css"

const Cart = ({selectedActors, remaining,totalCost}) => {
    console.log(selectedActors)
    return (
        <div>
            <h2>Total Actors: {selectedActors.length}</h2>
            <h3>Budget: 20000 $</h3>
            <h5>Remaining: {remaining}</h5>
            <h5>Total cost: {totalCost}</h5>
            {selectedActors.map((actor) =>(
                <li key={actor.id}>{actor.name}</li>
            ))}
        </div>
    );
};

export default Cart;