import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBoxBuilder, selectBox } from '../../store/boxBuilderSlice';
import Box from '../Box/Box';
const Boxes = props => {
    const { selectedBox, boxType } = useSelector(selectBoxBuilder);
    const dispatch = useDispatch();
    return (
        <div className="boxes">
            {boxType.map(box => {
                return (
                    <Box
                        id={box.id}
                        key={box.id}
                        name={box.name}
                        selectedBox={selectedBox?.id || 0}
                        click={()=>dispatch(selectBox(box))}
                    />
                );
            })}
        </div>
    );
}
export default Boxes;