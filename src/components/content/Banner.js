import React,{useState,useEffect} from "react"
import "../../styles/Banner.css";

export default function Banner(){
    let [value,setValue] = useState(0);
    let items = [{content:"Physics meets Physics"},
                    {content:"Chemistry meets Chemistry"},
                    {content:"Computer Science"},
                    {content:"Artificial Inteligence"}];


    const nextClick = ()=>{
        bg(value);
        setValue(value>items.length-2?value=0:value+1);
    }
    const prevClick = ()=>{
        bg(value);
        setValue(value<1?value=items.length-1:value-1);
    }

    const bg = (value)=>{
        document.querySelector(".App").style.backgroundImage = "url("+require(`../../images/${value+1}.jpg`).default+")";
        console.log(value+1);
    }
    return(
        <div className="banner">
            <div className="scroll">
                <p><span>/</span> 0{value+1}</p>
                <i onClick={prevClick} className="fa fa-caret-up prev" ></i>
            </div>
            <hr></hr>
            <hr className="barline"/>
            <div className="next">
                <i></i>
                <i onClick={nextClick} className="fa fa-caret-down next"></i>
            </div>
            <div className='member'>
            {
               items.map((item,index)=><b className={value==index?"bright":""} key={index}>{item.content}</b>)
            }
            </div>
        </div>
    )
}