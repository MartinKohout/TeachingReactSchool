import React from 'react';

import Item from './Item';

function ListItem({list, incrementNumber, decrementNumber}){
    function renderList(){
        return list.map((item, index) => {
            return (
               <Item key={index} index={index} item={item} incrementNumber={incrementNumber} decrementNumber={decrementNumber}/>
            );
        })
    }
    return(
        <>
            {renderList()}
        </>
    );
}

export default ListItem;