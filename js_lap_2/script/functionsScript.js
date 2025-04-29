function scapitalize_first(fullName) {
    // let fullName = "mohamed ramadan";
    let arr = fullName.split(" ");
    let newArr = arr.map((elem) => {
        let sub = elem.substring(1);
        let first_litter = elem.charAt(0);
        let capitalize = first_litter.toUpperCase();
        let result = capitalize + sub;
        return result;
    });
    let resultString = newArr.join(" ");
    console.log(resultString);
}

