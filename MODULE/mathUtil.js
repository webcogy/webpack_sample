const PI = 3.14;
const getCircleArea = r => r * r * PI;
const getSquareArea = d => d * d;

module.exports = {
    PI,
    getCircleArea,
    getSquareArea
}

// export default 접근 방식 => import { getCircleArea } from './mathUtil'
/* 
export {
    PI,
    getCircleArea
} */

// export default 접근 방식 => import mathUtil from './mathUtil'
/* 
export default {
    PI,
    getCircleArea
} */