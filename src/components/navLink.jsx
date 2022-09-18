import React from "react";


const NavLink = (props) => {   
    const handleClick = () => {
        props.onActiveChange(props.id);
    };

    const getClasses = () => {
        let classes = "nav-link";
        return (classes += props.active ? " active" : "");
    }

    return (
        
            <li className="nav-item" onClick={handleClick}>
                <a href={props.link} className={getClasses()}>{props.text}</a>
            </li> 
    );
};

export default NavLink;











