// create a rectangle object with lenghts, the perimeter and areas

function Rectangle(a, b) {
    let obj = {
        length : a,
        width : b,
        perimeter : 2*(a+b),
        area : a*b
    }
    
    return obj;
}