import React from 'react';

/**
 * Exporting variable name on line 16 (not file name)
 */
const Pictures = (props) => (
    <ul>
        {/* Pictures pictures={...}  */}
        {props.pictures.map((imageFromJson) => {
            return (
                <li key={imageFromJson.id}>
                    <img src={imageFromJson.image} alt="Weimaraner" onClick={() => props.handleClick(imageFromJson.id)} />
                </li>
            );
        })}
    </ul>
);

export default Pictures;
