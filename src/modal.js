import './App.css';
import React, {useRef, useEffect, useState, useContext} from 'react';
import popDataList from './popData.js';

function Modal(props){
    let [popData, popDataFunc] = useState(popDataList);
    let [popArray, popArrayFunc] = useState([...popData, ...popData, ...popData]);

    let [dropDown, dropDownFunc] = useState(false);

    let pop = props.pop;
    let setPop = props.setPop;

    let close = () =>{
        setPop(false);
    }

    let num = props.num;
    let setNum = props.setNum;

    let moveDown = () =>{
        dropDownFunc(true);
    }

    let website = popArray[num].website;

    let timer = () =>{
        setTimeout(() => {
            dropDownFunc(false);
        }, 3000);
    }

    const useSlideIn = (duration = 1, delay = 0) => {
        const element = useRef();

        useEffect(() => {
            if (element.current) {
            const { current } = element;
            current.style.transition = `transform ${duration}s ease-in-out ${delay}s`;
            current.style.transform = `translateX(0%)`;
            }
        }, []);
        
        return { ref: element, style: { transform: 'translateX(-100%)' } };
    };

    const SlideIn = useSlideIn(0.5, 0.6);

    const useFadeIn = (duration = 1, delay = 0) => {
        const element = useRef();

        useEffect(() => {
            if (element.current) {
                const { current } = element;
                current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
                current.style.opacity = 1;
            }
        }, []);

        return { ref: element, style: { opacity: 0 } };
    };

    const FadeIn = useFadeIn(0.8, 1.3);

    return(
        <div className="popup" >
            <a className="close-btn" onClick={()=>{close()}} {...SlideIn}></a>
            <div className="pop-con" {...FadeIn}>
                <div className="pop-box">
                    <div className="pop-header">
                        <div className="title">{popArray[num].title}</div>
                        <div className="links">
                            <a className="figma" target="_blank" without rel="noreferrer" href={"https://www.figma.com/file/"+popArray[num].figma}>Figma</a>
                            {
                                Array.isArray(popArray[num].website) === false
                                ? <a className="page" target="_blank" without rel="noreferrer" href={popArray[num].website}>Website</a> 
                                : <a className="page" target="_blank" without rel="noreferrer" onMouseEnter={() => {moveDown(); timer();}} >Website</a>
                            }
                            
                            {
                                dropDown === true
                                ? <MoveDown dropDown={dropDown} setDropDown={dropDownFunc}
                                num={num} setNum={setNum} website={website}/>
                                :null
                            }
                            
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


function MoveDown(props) {

    let dropDown = props.dropDown;
    let setDropDown = props.setDropDown;

    let num = props.num;
    let setNum = props.setNum;

    let moveLeave = () =>{
        setDropDown(false);
    }

    let website = props.website;

    return(
        <div className="web-dropDown" onMouseLeave={() => {moveLeave()}} >
            <div className="web-box" >
                {
                    website.map((a,i) =>{
                        return(<a href={Object.values(website[i])} target="_blank">{Object.keys(website[i])}</a>)
                    })
                }
            </div>
        </div>
    )
}

export default Modal;