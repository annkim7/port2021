import React, { useState, useEffect, useContext } from 'react';
// import logo from './logo.svg';
import './App.css';
import './style.scss';
import Slider from './slider.js';
import Modal from './modal.js';
import $ from "jquery";


function App() {
    
    let [modal, modalFunc] = useState(false);
    let [num, numFunc] = useState(0);

    useEffect(()=>{        
        $('.mainSlide').selfSlide();

    }, []);


    return (
        <div className="container">
            <section className="section section01">
                <div className="main-visual">
                    <Slider pop={modal} setPop={modalFunc} num={num} setNum={numFunc}/>
                </div>
            </section>
            
            {
                modal === true
                ? <Modal pop={modal} setPop={modalFunc} num={num} setNum={numFunc}/>
                :null
            }
        </div>
    );

    
}




export default App;



