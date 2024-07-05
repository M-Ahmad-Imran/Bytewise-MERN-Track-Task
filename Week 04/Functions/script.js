function PlainFunction() {
    console.log("Hello, I am Plain JS Function");
    document.getElementById("text0").innerHTML = "Check your Console...";
}

const ArrowFunction = () => {
    console.log("Hello, I am Arrow Function");
    document.getElementById("text1").innerHTML = "Check your Console...";
}


const IIFEFunction = () => {
    (function () {
        console.log('This is an IIFE');
        document.getElementById("text2").innerHTML = "Check your Console...";
    })();
}