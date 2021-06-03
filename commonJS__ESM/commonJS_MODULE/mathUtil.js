const PI = 3.14;
const getCircleArea = r => r * r * PI;

/* export 방법1
module.exports = {
    PI,
    getCircleArea
}
 */

// export 방법2
exports.PI = PI;
exports.getCircleArea = getCircleArea;