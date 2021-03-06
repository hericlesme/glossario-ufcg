import React from 'react';
import "./Description.css"

const Description = (props) => (
    <div className={"description__container"}>
        <span className={"description__title"}>- Significado:</span>
        <span className={"description__text"}>{props.selectedObj.meaning}</span>
        {/* For future implementation. It should describe the searched word. */}
        {/*<span className={"description__title"}>- Descrição:</span>*/}
        {/*<span className={"description__text"}>{ props.selectedObj.text }</span>*/}
    </div>
);

export default Description;