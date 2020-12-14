const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

export const compareTwoDateHuman = function(dateHuman1, dateHuman2) {
    let [day1, monthStr1] = dateHuman1.split(" ");
    let [day2, monthStr2] = dateHuman2.split(" ");

    day1 = Number(day1);
    day2 = Number(day2);

    let month1Index = months.findIndex((month) => month === monthStr1);
    let month2Index = months.findIndex((month) => month === monthStr2);
    
    let res = 0;

    if (month1Index < month2Index) {
        res =  -1;
    } else if (month1Index > month2Index) {
        res =  1;
    } else {
        if (day1 < day2) {
            res =  -1;
        } else {
            res =  1;
        }
    }
    
    return res;
}

export const formatDateToHuman = function(dateStr) {
    let date = new Date(dateStr);

    date = new Date(date.getTime() + (1000 * 3600 * 24)); // Add one day

    let newDateFormated = (date.getDate())+ " " + months[date.getMonth()];

    return newDateFormated;
}