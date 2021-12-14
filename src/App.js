// import { map } from 'jquery';
import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import $ from "jquery";
// import './slider.js';
// import './motion.js';

function App() {

    let [title, titleArr] = useState(['Its game', 'STF 2021', 'IKW 2021', 'Jipremium x 4', 'Eco', 'Inquebangkok']);
    let [pop, popFunc] = useState(false);
    let [idx , idxFunc]= useState(0);

    return (
        <div className="container">
            <section className="section section01">
                <div className="main-visual">

                    <div className="slide_wrapper mainSlide">
                        <ul className="slides">
                            {
                                title.map(function(title, i){
                                    return(
                                        <li>
                                            <a className="pop-btn" onClick={ ()=> {popFunc(!pop); idxFunc(i)} }>
                                                <h3 className="title">{title}</h3>
                                                <div className="content">
                                                    <span className="list">사이트 전체 퍼블리싱(온라인 전시관 제외)</span>
                                                </div>
                                            </a> 
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <p className="controls">
                            <span className="prev"></span>
                            <span className="next"></span>
                        </p>

                        { pop === true 
                        ? <Pop popTitle={title} popIdx={idx} ></Pop>
                        : null }
                    </div>
                </div>
                
            </section>
        </div>
    );
}

function Pop(props){
    return (
        <div class="popup">
            <a class="close-btn"></a>
            <div class="pop-con">
                <div class="pop-box">
                    <div class="title">{ props.popTitle[props.popIdx] }</div>
                    <div class="text"></div>
                </div>
            </div>
        </div>
    )
}


export default App;
