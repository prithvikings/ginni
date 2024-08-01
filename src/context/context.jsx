import { createContext, useState } from "react";
import run from "../config/ginni";

export const Context=createContext();

const ContextProvider=(props)=>{
    const [input,setinput]=useState("");
    const [recentprompt,setrecentprompt]=useState("");
    const [prevprompt,setprevprompt]=useState([]);
    const [showResult,setShowResult]=useState(false);
    const [loading,setloading]=useState(false);
    const [ResultData,setResultData]=useState("");

    const onSent = async(prompt)=>{
        await run(prompt)
    }

   

    const contextValue={

    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;