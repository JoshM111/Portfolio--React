import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Questions = (props) => {

    return(
        <div>
            <h1>Questions</h1>
            <Link to='/'>Home</Link>
            <ul>
                <li>
                    <h4>What is the difference between State and Props?</h4>
                    <ul>
                        <li>
                            <h5>Props</h5>
                            <p>
                                Props are short for properties and are the configuration of a Component. 
                                It is the way in which components communicate with each other. 
                                A component cannot change its props but puts together the props of its child component. 
                                The props of a component are received by the component above them, that is, 
                                the parent component and are immutable. Some components may have default 
                                props and they exist even if parent component does not pass down props.
                            </p>
                        </li>
                        <li>
                            <h5>State</h5>
                            <p>
                                The state is a data structure that starts with a default value when a component mounts. 
                                This data structure can be mutated over time as a result of user events.
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
export default Questions;