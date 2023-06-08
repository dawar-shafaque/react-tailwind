import React, { Suspense, useCallback, useEffect, useState } from "react";
import Button from "../../Shared/Button";
import Loader from "../../Shared/Loader";

const CounterPrac = () => {
  
       const [counter,setCounter] = useState(0); 
       const[customClass, setCustomClass] = useState("text-green");
        const [numType, setNumType] = useState("even");
        const [disable, setDisable] = useState(false);

       const addCounter =() => {
            setCounter(counter + 1);
            
       };
       const subCounter =() => {
        setCounter(counter - 1);
       };
       const checkNum = () => {
        counter % 2 === 0 ? setNumType("even") : setNumType("odd");
       };
       const toggleClass = () => {
        counter % 2 !== 0 ? setCustomClass("text-orange"): setCustomClass("text-green");
       };
       const checkDisability =() => {
        counter === 0 ? setDisable(true) : setDisable(false);
       };
       
       const timer = useCallback(()=> {
        checkDisability();
        checkNum();
        toggleClass();
       },[checkDisability,checkNum,toggleClass]);

       useEffect(() => {
        timer();
       },[timer]);
       
  return (
    <div>
        <div className="flex justify-center items-center">
            <Button buttonname="add" onClick={addCounter}/>
        </div>
        <div className="text-center my-6">
        <span className="text-6xl">{counter}</span>
        </div>
        <div className="text-center">
                <span className={"text-4xl font-serif font-bold" + customClass}> 
            {numType}
            </span>
        </div> 
        <div className="flex justify-center items-center py-8">
            <Button buttonname="sub" onClick={subCounter} disabled={disable}/>
        </div>
    </div>
  );
};

export default CounterPrac;