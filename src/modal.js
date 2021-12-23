import './App.css';
import React, {useEffect, useState, useContext} from 'react';
import popDataList from './popData.js';

function Modal(props){
    let [popData, popDataFunc] = useState(popDataList);
    let [popArray, popArrayFunc] = useState([...popData, ...popData, ...popData]);

    let pop = props.pop;
    let setPop = props.setPop;

    let close = () =>{
        setPop(false);
    }

    let num = props.num;
    let setNum = props.setNum;

    return(
        <div className="popup">
            <a className="close-btn" onClick={()=>{close()}}></a>
            <div className="pop-con">
                <div className="pop-box">
                    <div className="title">{popArray[num].title}</div>
                    <div className="text">{popArray[num].contents}</div>
                </div>
            </div>
        </div>
    )
}

export default Modal;