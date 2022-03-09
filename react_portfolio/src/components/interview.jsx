import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Interview = (props) => {

    return(
        <div>
            <h1>Interview Questions</h1>
            <p>This is an archive of interview questions I have gotten in my pursuit to get a programming job</p>
            <Link to='/'>Home</Link>
            <ul>
                <li>
                    <h4>Mavely- Entry - 03/03/2022</h4>
                    <ul>
                        <li>
                            <h5>What is the difference between React & React Native?</h5>
                            <p>I didn't know</p>
                            <p>ReactJS is a JavaScript library, supporting both front-end web and being run on a server, for building user interfaces and web applications.
                                React Native is a mobile framework that compiles to native app components, allowing you to build native mobile applications for different platforms 
                                (iOS, Android, and Windows Mobile) in JavaScript that allows you to use ReactJS to build your components, and implements ReactJS under the hood.
                                Both are open sourced by Facebook.
                            </p>
                        </li>
                        <li>
                            <h5>Given a String, give a string that is reversed</h5>
                            <p>
                                funct1on gnirts(string)paren
                                    r3turn ,tr1ngspl1t("").reverse().join("");
                                thesis
                                console.log(gnirts("this is a test string"));//"gnirts tset a si siht"
                            </p>
                        </li>
                        <li>
                            <h5>Given a string, count the number of times a letter shows up, DO NOT COUNT white spaces</h5>
                            <p>
                                {/* function count(string) {
                                    var freq = {};
                                    var noSpace = string.replace(/ /g,"");
                                    for (var i = 0; i<noSpace.length;i++) {
                                        var character = noSpace.charAt(i);
                                        if (freq[character]) {
                                        freq[character]++;
                                        } else {
                                        freq[character] = 1;
                                        }
                                    }

                                    return freq;
                                };
                                console.log(count("this is a test string")) */}
                            </p>
                        </li>
                    </ul>
                    
                </li>
                <li>
                    <h4>What are Controlled and Uncontrolled Componens?</h4>
                    <ul>
                        <li>
                            <h5>Controlled Components</h5>
                            <p>
                                Controlled Components are those which take the current value through props and notify the changes through callbacks like onChange. 
                                The parent component controls this component by handling the callback and managing its own state and passing the values through props 
                                to the controlled component. As these components are controlled, they are also called dumb components. These are used in most cases.
                            </p>
                        </li>
                        <li>
                            <h5>Uncontrolled Components</h5>
                            <p>
                                The Uncontrolled component is one that stores and manages its own state internally. When you need the current value of the component 
                                you query the DOM using a ref and retrieve the value.
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <h4>What is the lifecycle of Methods of React Components?</h4>
                    <ul>
                        <li>componentWillMount()</li>
                        <li>componentDidMount()</li>
                        <li>componentWillReceiveProps()</li>
                        <li>shouldComponentUpdate()</li>
                        <li>componentWillUpdate()</li>
                    </ul>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>

            </ul>


        </div>




    );


};
export default Interview;