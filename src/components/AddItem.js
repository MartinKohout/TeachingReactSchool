import React, {useState} from 'react';



function AddItem({list, setList}){
    const [inputV, setInputV] = useState(0);
 
    return(
        <>
            <form onSubmit={e => {
                e.preventDefault();
                setList([...list, inputV]);
                setInputV(0);
            }}>
                <input value={inputV} onChange={ e => setInputV(e.target.value)} />
            </form>
        </>
    );
}

export default AddItem;