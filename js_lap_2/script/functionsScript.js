// function scapitalize_first(fullName) {
//     // let fullName = "mohamed ramadan";
//     let arr = fullName.split(" ");
//     let newArr = arr.map((elem) => {
//         let sub = elem.substring(1);
//         let first_litter = elem.charAt(0);
//         let capitalize = first_litter.toUpperCase();
//         let result = capitalize + sub;
//         return result;
//     });
//     let resultString = newArr.join(" ");
//     console.log(resultString);
// }
// function longest_word(sentence) {
//     // let sentence = "Web Development Tutorial";
//     let arr = sentence.split(" ");
//     let longest = arr[0];
//     let longestWord = arr.forEach((word) => {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     });
//     return longest;
// }

// function sort_string(str) {
//     let arr = str.split("");
//     let sorted = arr.sort();
//     let sorted_string = sorted.join("");
//     return sorted_string;
// }

// function filtering_array(arr1, arr2) {
//     let filtering = arr1.filter(elem => arr2.includes(elem));
//     return filtering;
// }


function duplicated_nums(arr) {
    let filtering = arr.filter((elem, index) => {
        return arr.indexOf(elem) === index;
    })
    return filtering;
}

