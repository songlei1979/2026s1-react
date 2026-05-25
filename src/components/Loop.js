import React from 'react';

function Loop(props) {
    return (
        <div>
            {props.names.map(name =>
                <p key={name}>{name}</p>
            )}
        </div>
    );
}

export default Loop;