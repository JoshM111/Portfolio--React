import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Index = (props) => {
    const [counter, setCounter] = useState(0);
    const reset = () => {
        setCounter(0);
    };
    
    // ^^^ this is one way to reset; might be the better version.


    // useEffect(() => {
    //     axios
    //       .get("")
    //       .then((res) => {
    //         console.log(res.data);
    //         setAllSneakers(res.data);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }, []);

    //   useEffect(() => {
    //     axios
    //       .fetch("https://18.117.145.31/sneaker/")
    //       .then((res) => {
    //         console.log(res.data);
    //         setAllSneakers(res.data);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }, []);




    return (
        <div id="App">
            <h1>This is mainly for interview prep. I would like to list this by difficulty</h1>
            <Link to='/questions'>??Questions??</Link>
            <Link to='/interview'>Interview Prep</Link>
            <ul>
                <h2>Beginner</h2>
                <li>
                    <h2>Counter: {counter} </h2>
                    <div class="container">
                        <button onClick={()=> {
                            setCounter(counter + 1);
                        }}>Increase Counter</button>
                        <button onClick={ () => {
                            setCounter(0);
                        } }>Reset Counter?</button>
                        {/* this may be another way of getting the same result, there must be some difference, COME BACK TO THIS */}
                        <button id="b" onClick={() => {
                            setCounter(counter -1 );
                        }}>Decrease Counter</button>
                        <button id="b" onClick={reset}>Reset the Counter</button>
                    </div>
                </li>
                <li>
                    <h2></h2>
                </li>
            </ul>
            
        </div>
    );
};


export default Index;