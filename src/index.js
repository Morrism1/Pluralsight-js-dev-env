/* eslint-disable no-console */
import "./index.css";
import numeral from "numeral";

const courseValue = numeral(1000).format("$0,0.00");
console.log(`I would pay ${courseValue} For this awesome course!`);
