import React from "react";

import logo from '../assets/logo.png';
const Logo = () => {
    return (
        <div className="flex pb-2 justify-center items-center border-b border-gray-500">
            <img src={logo} className="w-24 rounded-full" />
            <h1 className="text-2xl px-2 first-letter:text-5xl">Github Users</h1>
        </div>
    )
}

export default Logo