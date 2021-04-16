export function convertObjElementValue2Array(obj: any) {
    let arr = [];
    if (obj) {
        Object.keys(obj).forEach((key) => {
            arr.push({ key: key, value: obj[key] });
        });
    }
    return arr;
}