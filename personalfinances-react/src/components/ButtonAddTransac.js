import React from 'react';


export default function ButtonAddTransac({ icon, classType, classVisible, onclick }) {
    return (
        <button className={`add-${classType} ${classVisible}`} onClick={onclick}>
            {icon}
        </button>
    );
}