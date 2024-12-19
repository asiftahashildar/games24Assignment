import { useState } from "react";
import "./assignment.scss";
import { Assignment } from "./Assignment";

export const ButtonClick = () =>{
    const [openModal,setOpenModal]=useState(false);

    const handleClick = (param) =>{
        setOpenModal(param)
    }
    return(
        <div className="container">
        {!openModal?
            <div className="button-container">
                    <div className="button" onClick={()=>handleClick(true)}>OPEN MODAL</div>
            </div>
            :
            <Assignment handleClick={handleClick}/>
        }
        </div>
    )
}