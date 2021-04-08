import React from 'react';
import './Box.css';
const Box = props => {
    return (
        <div
            className={props.id === props.selectedBox ? `box-outer selected_box` : `box-outer`}
            onClick={props.click}
        >
            <div className={`box-inner ${props.name}`}>
                <div className="box-name">
                    <span>{props.name}</span>
                </div>
            </div>
        </div>
    );
}
export default Box;