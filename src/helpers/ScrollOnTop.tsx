import { useEffect } from "react"

export default function ScrollOnTop(){


    useEffect(()=>{
        if(!window.location.hash){
            window.scrollTo(0,0)
        }
    },[])

    return null
}