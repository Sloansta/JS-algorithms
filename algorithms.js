// binary search

const linearSearch = (arr, num) => {
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] === num)
            return arr[i];
    }
}


const binarySearch = (arr, num, left, right) => {
    let middle = Math.floor((left + right) / 2);
    
    if(left > right)
        return -1;
    else if(num === arr[middle])
        return middle;
    else if(num < arr[middle]) {
        // call again with new right value
        return binarySearch(arr, num, left, middle - 1);
    }
    else {
        // call again with new left value
        return binarySearch(arr, num, middle + 1, right);
    }
};
//console.log(binarySearch(data, 23, 0, data.length - 1));

// O(1) 
const isEven = (num) => {
    if(num % 2 === 0)
        return true;
    else 
        return false;
};

// SORTING 

// bubble sort

const bubbleSort = (arr) => {
    let sorted = false;

    while(!sorted) {
        sorted = true;

        for(let i = 0; i < arr.length - 1; i++) {
            // compare current element to next 
            if(arr[i] > arr[i+1]) {
                // swap using a temp value
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;

                // flag as not sorted to run loop again
                sorted = false;
            }
        }
    }

    return arr;
}

//console.log(isEven(80));

module.exports = {
    binarySearch,
    linearSearch,
    isEven,
    bubbleSort
};