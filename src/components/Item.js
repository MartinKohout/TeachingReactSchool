import React from 'react';


function Item({item, incrementNumber, decrementNumber, index}){
    return(
        <div>
            <div>
                {item}
            </div>
            <div >
                <button onClick={() => incrementNumber(index)}>Increment</button>
                <button onClick={() => decrementNumber(index)}>Decrement</button>
            </div>
        </div>
    );
}

export default Item;