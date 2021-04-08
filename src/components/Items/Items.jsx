import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBoxBuilder, addItem, increment, decrement } from '../../store/boxBuilderSlice';
import BoxContent from '../BoxContent/BoxContent';
import Item from '../Item/Item';
const Items = props => {
    const { items } = useSelector(selectBoxBuilder);
    const dispatch = useDispatch();
    return (
        <>
            <BoxContent />
            <div className="items">
                {items.map(item => {
                    return (
                        <Item
                            id={item.id}
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            category={item.category}
                            addItem={() => dispatch(addItem(item))}
                            inc={()=> dispatch(increment(item.id))}
                            dec={()=> dispatch(decrement(item.id))}
                            image={item.image}
                            selected={item.selected}
                        />
                    );
                })}
            </div>
        </>
    );
}
export default Items;