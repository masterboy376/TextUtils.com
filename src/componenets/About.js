import React, { useState } from 'react';

export default function About(props) {
    return (
        <div className={`bg-${props.mode} text-center text-${props.mode === 'light'?'dark':'light'}`}>
            <h1 className="display-5">About Us</h1>
            <p>At this website you can find handfuls of online computer utilities which allow you to perform various tasks without installing any software at your computer apart from the browser. It can be considered as a large utility set for an Internet operating system (like Chrome OS, for example).</p>
            <p>Developed by Sambhav Kaushik</p>
            <p>Email: masterboy376@gmail.com</p>
        </div >
    )
}
