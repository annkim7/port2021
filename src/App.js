import React from 'react';
// import logo from './logo.svg';
import './App.css';
import $ from "jquery";
import './slider.js';
import './motion.js';

function App() {
  class App extends React.Component {
    componentDidMount(){
      $('.mainSlide').selfSlide();
    }
    
  }
  return (
    <div className="container">
      <section className="section section01">
            <div className="main-visual">
                <div className="slide_wrapper mainSlide">
                    <ul className="slides">
                        <li>
                            <a className="pop-btn">
                                <h3 className="title">Its game</h3>
                                <div className="content">
                                    <span className="list">게시판 디자인, 사이트 전체 퍼블리싱</span>
                                    <span className="list">기존 셋팅된 게시판, 상세화면 css로 디자인 변경</span>
                                    <span className="list">사이트 맞춤형 게시판, 상세화면 퍼블리싱</span>
                                    <span className="list">hooper slider 사용</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className="pop-btn">
                                <h3 className="title">STF 2021</h3>
                                <div className="content">
                                    <span className="list">사이트 전체 디자인, 퍼블리싱</span>
                                    <span className="list">기존 셋팅된 게시판, 상세화면 css로 디자인 변경</span>
                                    <span className="list">css animation으로 메인 모션 창작하여 적용</span>
                                </div>
                            </a>                        
                        </li>
                        <li>
                            <a className="pop-btn">
                                <h3 className="title">IKW 2021</h3>
                                <div className="content">
                                    <span className="list">메인, 지자체, fez, 연사 페이지 퍼블리싱</span>
                                    <span className="list">그외 디자인 다소 변경하고 모바일 대응력 높이도록 수정</span>
                                    <span className="list">jquery scroll, touch 및 click 이벤트 적용</span>
                                </div>
                            </a>                               
                        </li>
                        <li>
                            <a className="pop-btn">
                                <h3 className="title">Jipremium x 4</h3>
                                <div className="content">
                                    <span className="list">사이트 전체 퍼블리싱, 관리 및 유지보수</span>
                                    <span className="list">연관된 4개 사이트를 각각 퍼블리싱, 한 번에 수정 관리</span>
                                    <span className="list">퀵배너(health, baby) 디자인</span>
                                </div>
                            </a> 
                        </li>
                        <li>
                            <a className="pop-btn">
                                <h3 className="title">Eco</h3>
                                <div className="content">
                                    <span className="list">사이트 전체 퍼블리싱(온라인 전시관 제외)</span>
                                    <span className="list">텍스트의 가지런한 정렬을 중점적 고려하여 퍼블리싱</span>
                                </div>
                            </a> 
                        </li>
                        <li>
                            <a className="pop-btn">
                                <h3 className="title">Inquebangkok</h3>
                                <div className="content">
                                    <span className="list">온라인 전시 퍼블리싱</span>
                                    <span className="list">기업 검색, 제품 검색, 기업 검색 상세, 제품 검색 상세</span>
                                    <span className="list">slick slider 사용</span>
                                </div>
                            </a>                         
                        </li>
                    </ul>
                    <p className="controls">
                        <span className="prev"></span>
                        <span className="next"></span>
                    </p>
                </div>
            </div>
    
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
        </section>
    </div>
    
  );
}


export default App;
