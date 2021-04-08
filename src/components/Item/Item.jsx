import React from 'react';
import { useSelector } from 'react-redux';
import { selectBoxBuilder } from '../../store/boxBuilderSlice';
const Box = props => {
    const { selectedItems } = useSelector(selectBoxBuilder);
    return (
        <div
            className={'item'}
        >
            <div className="item-image">
                <img src={props.image} />
                <div className="item-button">
                    {props.selected ? (
                        <div>
                            <button onClick={props.dec}>-</button>
                            <span>{selectedItems.find(item=> item.id === props.id).quantity} IN BOX</span>
                            <button onClick={props.inc}>+</button>

                        </div>
                    ) : (
                        <div>
                            <button onClick={props.addItem}>ADD TO BOX</button>
                        </div>
                    )}
                </div>
            </div>
            <div className="item-details">
                <span>Name: {props.name}</span>
                <span>Category: {props.category}</span>
                <span>Price: ${props.price}</span>
            </div>
        </div>
    );
}
export default Box;