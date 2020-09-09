console.log("hello parcel");

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector("#decrease");

const TOGGLE_SWITCH = "TOGGlE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const toggleSwitch = () => ({type=TOGGLE_SWITCH});
const increase = () =>({type=INCREASE, differ});
const decresae = ()=>({type=DECREASE});