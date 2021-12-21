import './App.css';
import React, {useEffect, useState, useContext} from 'react';


function Modal(props){
    return(
        <div className="popup">
            <a className="close-btn"></a>
            <div className="pop-con">
                <div className="pop-box">
                    <div className="title">test</div>
                    <div className="text">test</div>
                </div>
            </div>
        </div>
    )
}

export default Modal;