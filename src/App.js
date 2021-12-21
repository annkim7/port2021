import React, { useState, useEffect, useContext } from 'react';
// import logo from './logo.svg';
import './App.css';
import './style.scss';
import Slider from './slider.js';
import Modal from './modal.js';
import $ from "jquery";

function App() {
    useEffect(()=>{        
        $('.mainSlide').selfSlide();
    }, []);


    return (
        <div className="container">
            <section className="section section01">
                <div className="main-visual">
                    <Slider />
                </div>
            </section>
        </div>
    );

    
}



export default App;