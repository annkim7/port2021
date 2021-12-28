import React, { useState, useEffect, useContext } from 'react';
// import logo from './logo.svg';
import './App.css';
import './style.scss';
import Slider from './slider.js';
import Modal from './modal.js';
import Motion from './motion.js';
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
                    <Slider pop={modal} setPop={modalFunc} num={num} setNum={numFunc} />
                </div>

                <Motion />
            </section>

            <section class="section section02">
                <div class="left-side">
                    <h3 class="title">Education</h3>
                    <div class="edu-con">
                        <p>이 사이트에 사용된 기술을 정리해 보았습니다. 디자인과 퍼블리싱을 넘어 프론트엔드로 기술 확장을 도모하여 보다 나은 기술로 멋진 웹페이지를 만들어보는 것이 목표입니다. 현재에 안주하지 않고 꾸준하게 발전하기 위해 배움을 놓지 않고 있습니다.</p>
                        <div class="edu-button">
                            <a class="github" traget="_blank" without rel="noreferrer" href="https://github.com/annkim7"></a>
                            <a class="notion" traget="_blank" without rel="noreferrer" href="https://www.notion.so/N-Kim-a242915d7ffa463596860036bf7db6d5"></a>
                        </div>
                    </div>
                </div>
                <div class="right-side">
                    <div class="edu-box">
                        <div class="edu">Javascript</div>
                        <div class="edu">SVG</div>
                        <div class="edu">GSAP</div>
                        <div class="edu">React</div>
                        <div class="edu">Redux</div>
                        <div class="edu">SCSS</div>
                    </div>
                </div>
            </section>
            
            {
                modal === true
                ? <Modal pop={modal} setPop={modalFunc} num={num} setNum={numFunc} />
                :null
            }
        </div>
    );

    
}




export default App;



