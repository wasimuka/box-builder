import React from 'react';
import { useSelector } from 'react-redux';
import { selectBoxBuilder } from '../../store/boxBuilderSlice';
const BoxContent = props => {
    const { selectedBox, selectedItems } = useSelector(selectBoxBuilder);
    let subTotal = selectedBox?.price || 0;
    selectedItems.forEach(item => {
        console.log(item);
        subTotal += item.price * item.quantity;
    });
    return (
        <div className="boxContent">
            <div className="Left">
                {selectedBox && (
                    <div className="box-selected">
                        <span>{selectedBox.name}</span>
                    </div>
                )}
                {selectedItems.map(item => {
                    return (
                        <div key={item.id} className="selected-item">
                            <span className="name">{item.name}</span>
                            <span className="quantity">{item.quantity}</span>
                        </div>
                    );
                })}
            </div>
            <div className="Right">
                <h3>Box Contents</h3>
                <div>
                    <span className="quantity">Quantity</span>
                    <span className="name">Name</span>
                    <span className="price">Price</span>
                </div>
                {selectedBox && (
                    <div className="box-selected">
                        <span>{"1"}</span>
                        <span>{selectedBox.name}</span>
                        <span>${selectedBox.price}</span>

                    </div>
                )}
                {selectedItems.map(item => {
                    return (
                        <div key={item.id}>
                            <span className="quantity">{item.quantity}</span>
                            <span className="name">{item.name}</span>
                            <span className="price">${item.price}</span>
                        </div>
                    );
                })}
                <div>
                    <span> Box Subtotal ${subTotal}</span>
                </div>
            </div>
        </div>
    );
}
export default BoxContent;