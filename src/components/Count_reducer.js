import React, {useReducer} from 'react';

const initialState = {count: 0};

const reducer = (state, actions) => {
        switch (actions.type){
            case "Add":
                return {count: state.count + 1};
            case "Sub":
                return {count: state.count - 1};
        }

    }

function CountReducer(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>{state.count}</h2>
            <button onClick={()=>{dispatch({type:"Add"})}}>Add</button>
            <button onClick={()=>{dispatch({type:"Sub"})}}>Sub</button>
        </div>
    );
}

export default CountReducer;