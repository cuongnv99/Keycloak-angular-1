export function getListOfYear(yFrom, yTo) {
    let yearArr = [];
    for(let i = 0; i <= yTo - yFrom; ++i) {
        yearArr.push({id: i, birthYear: yFrom + i})
    }
    return yearArr;
}