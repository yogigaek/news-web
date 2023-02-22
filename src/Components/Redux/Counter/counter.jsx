import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    let {count} = useSelector(state =>state.counter)
    const dispatch = useDispatch();

    return(
        <div style={{textAlign: `center`, padding: `250px`, fontSize: `100px`}} >
            <Button onClick={()=> dispatch({type :'DEC', count :1}) }> - </Button>
            {' '}<span>{count} </span>{' '}
           <Button onClick={()=> dispatch({type :'INC', count :1}) }> + </Button>
           {
               console.log({count})
               
           }
        </div>
        
    )
}

export default Counter;