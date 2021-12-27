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
                    <div className="pop-header">
                        <div className="title">{popArray[num].title}</div>
                        <div className="links">
                            <a className="figma" target="_blank" href={"https://www.figma.com/file/hrFYpH3xrhVRA4SeSFdiCf/"+popArray[num].figma}>Figma</a>
                            <a className="page" target="_blank" href={popArray[num].website}>Website</a>
                        </div>
                    </div>
                    <div className="detail">
                        <div className="detail-box">
                            <div className="media">
                                {
                                    popArray[num].design
                                    ?
                                    <div class="pic">
                                        <img src={"https://annkim7.github.io/port2021/src/images/" +popArray[num].design} />
                                    </div>
                                    :
                                    <div className="video">
                                        <video autoPlay muted loop width="100%" height="100%">
                                            <source src={"https://annkim7.github.io/port2021/src/video/" +popArray[num].video} type="video/mp4"/>
                                        </video>
                                    </div>
                                }
                            </div>
                            <div className="text">
                                {popArray[num].explain.split("\n").map((line) => {return (<>{line}<br/><br/></>)})}
                            </div>
                            
                            
                        </div>
                         
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Modal;