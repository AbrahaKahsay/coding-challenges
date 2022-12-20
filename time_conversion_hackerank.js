// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

//Example
// s = '12:01:00PM'
// return '12:01:00'
// s = '12:01:00'
// return '00:01:00'

//Psudocode

// 1. First, split the strings to get array of characters
// 2. Now, check if the array contains AM or PM
// 3. If array contains AM return the string without AM
// 4. If the the array contains PM return the string by adding 12 to the first 2 chars and without PM 

function timeConversion(s) {
    // Write your code here
    // let time = new Date().toTimeString();
    // console.log(time)

    let time = s.split('')
    let trim = '';
    let take;

    if (s === '12:00:00PM'){
        return '12:00:00'
    }
    
    if (time.includes('P') &&  (time.slice(0,2).join('') === '12')){
        trim = time.splice(-2, 2).join('')
        return time.join('')
    }

    if (time.includes('P')){
        take = Number(time.splice(0, 2).join(''))
        let add12 = take + 12;
        time.unshift(add12);
        time.splice(-2, 2);
        return time.join('')
    }


    if (time.includes('A') &&  (time.slice(0,2).join('') != '12')){
        trim = time.splice(-2, 2).join('')
        return time.join('')
    }

    else {
        time.splice(0, 2, '0','0')
        time.splice(-2,2)
        return time.join('');
    }
}
console.log(timeConversion("07:05:45AM"));
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:00:00PM"));
console.log(timeConversion("12:00:00AM"));
console.log(timeConversion('12:40:22AM'));
console.log(timeConversion('12:40:22PM'))