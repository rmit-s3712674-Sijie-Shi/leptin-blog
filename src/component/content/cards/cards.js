import React, { useEffect, useReducer, useRef, useState } from "react";
import styles from "./cards.module.css"


const Card = () => {
    //let textDisplayed = ""
    const [state, setState] = useState("")
    const ref = useRef(state)
    const text = "Hello I am Sijie Shi, a 30 years old developer from Melbourne, Australia. Here are some interesting things that have been occuring in my life, some precious moments and ideas captured by myself and my friends. Hope you have a wonderful journey. \n Yours, Rocky."
    let temp = text.split(" ")
    // useEffect(() => {
    //     ref.current = state
    // })
    // useEffect(() => {
    //     let display = setInterval(() => {
    //         if(temp.length > 0)
    //         setState(ref.current + temp.shift() + " ")
    //     }, 2000)
    //     return () => clearInterval(display)
    // }, [])

    // useEffect(() => {
    //     let display = setInterval(() => {
    //         if (temp.length > 0) {
    //             let temptext = temp.shift()
    //             setState(state => state + temptext + " ")
    //         }
    //     }, 1000 * Math.random(1))
    //     return () => clearInterval(display)
    // }, [])
    useEffect(() => {
       (function inner() {
            if (temp.length > 0) {
                const timer = setTimeout(() => {
                    let temptext = temp.shift()
                    if(temptext)
                    setState(state => state + temptext + " ")
                    clearTimeout(timer)
                    inner()
                }, 1000 * Math.random(1))        
            }
        })()
    }, [])
    return (
        <>
            <div className={styles.card}>{state ? state : ""} <span className={styles.cursor}>|</span></div>
        </>
    )
}

export default Card