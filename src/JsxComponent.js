import React from "react";
import "./JsxComponents.css";
const behavier = 'cool';
const obj = {
    firstName : 'vikas',
    lastName : 'kushwah',
}
function show(){
    return 'you are good'
}
const el = <h1 className="bg">Hello {obj.firstName} you are age {20+7} you are {behavier} and {show()}</h1>


export default el;