import './App.css';
import React, {useEffect, useState, useContext} from 'react';
import $ from "jquery";
import { Controls, PlayState, Timeline, Tween } from 'react-gsap';

const Motion=()=>{


    useEffect(()=>{
    
        window.onload = function(){
            var section = document.querySelectorAll(".section");
            var pageNum = 1;
            var totalNum = section.length;
            var mainSlide = document.querySelector(".main-visual");
            var ball = document.querySelectorAll(".ball");
            var ballNum = ball.length;
        
            $(window).bind('wheel', function(event){
                if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                    // scroll up
                    if(pageNum > 1){
                        pageNum --;
                    }
        
                    pageNumFun();
                    pageChangeReset();
        
                } else {
                    // scroll down
                    if(pageNum < totalNum){
                        pageNum ++;
                    }
        
                    pageNumFun();
                    pageChangeFunc();
                }
        
                console.log(pageNum);
        
            });
        
            pageChangeReset();
            pageNumFun();
        
            function pageChangeFunc(){        
                for(var i = 0; i < ballNum; i++){
                    if( i < 4){
                        ball[i].style.left = "-150%";
                        pageChangeDelay();
                    }else{
                        ball[i].style.left = "150%";
                        pageChangeDelay();
                    }
                }
        
                mainSlide.style.setProperty("transform", "translate(-50%, -300%)");
        
                
                
            }
        
            function pageChangeReset(){
                for(var i = 0; i < ballNum; i++){
                    ball[i].style.left = "50%";
                    pageChangeDelay();
                }
        
                mainSlide.style.setProperty("transform", "translate(-50%, -50%)");
        
                
            }
        
            function pageChangeDelay(){
                for(var i = 0; i < ballNum; i++){
                    var time = i * 0.2;
        
                    ball[i].style.transition = "1.5s";
                    ball[i].style.setProperty("transition-delay", time +"s");
                }
                
                mainSlide.style.transition = "0.6s linear";
            }
        
            function pageNumFun(){
                for(var i = 0; i < totalNum; i++){
                    section[i].style.zIndex = "-1";
                    section[i].style.setProperty("transition-delay", "1.5s");
                }
        
                var secIdx = pageNum - 1;
                section[secIdx].style.zIndex = "0";
        
            }
        }
    }, []);


    return (
        <div className="ball-wrap">
                <div className="ball ball1">
                    <div className="ball-first-color"></div>
                    <div className="ball-shine"></div>
                    <div className="ball-third-color big"></div>
                </div>
                <div className="ball ball2">
                    <div className="ball-first-color"></div>
                    <div className="ball-second-color"></div>
                    <div className="ball-third-color mid"></div>
                    <div className="ball-shine"></div>
                </div>
                
                <div className="ball ball3">
                    <div className="ball-first-color"></div>
                    <div className="ball-second-color"></div>
                    <div className="ball-third-color mid"></div>
                    <div className="ball-shine"></div>
                </div>
                <div className="ball ball4">
                    <div className="ball-first-color"></div>
                    <div className="ball-second-color"></div>
                    <div className="ball-third-color small"></div>
                    <div className="ball-shine"></div>
                </div>


                <div className="ball ball5">
                    <div className="ball-first-color"></div>
                    <div className="ball-second-color"></div>
                    <div className="ball-third-color mid"></div>
                    <div className="ball-shine"></div>
                </div>
                <div className="ball ball6">
                    <div className="ball-first-color"></div>
                    <div className="ball-second-color"></div>
                    <div className="ball-third-color small"></div>
                    <div className="ball-shine"></div>
                </div>
                <div className="ball ball7">
                    <div className="ball-first-color"></div>
                    <div className="ball-second-color"></div>
                    <div className="ball-third-color smallest"></div>
                    <div className="ball-shine"></div>
                </div>
            </div>
    )
}



export default Motion;

