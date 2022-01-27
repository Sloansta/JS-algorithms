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
/*const isEven = (num) => {
    if(num % 2 === 0)
        return true;
    else 
        return false;
};*/

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
};

// quick sort
const quickSort = (arr) => {
    // checking to see if array length is too small
    if(arr.length <= 1)
        return arr;

    // use firest index as the pivot point
    const pivot = arr[0];
    const left = [];
    const right = [];

    // start at 1 to avoid pivot
    for(let i = 1; i < arr.length; i++) {
        // push into different arrays based on value compared to pivot
        if(arr[i] < pivot)
            left.push(arr[i]);
        else 
            right.push(arr[i]);
    }

    // merge arrays and pivot together
    return quickSort(left).concat(pivot, quickSort(right));
};

// function for checking to see what number was most duplicated
const mostDuplicates = (arr) => {
    let mostValue;
    let mostCount = 0;

    for(let i = 0; i < arr.length; i++) {
        let counter = 0;

        // nested loop
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j])
                counter++;
        }

        if(counter > mostCount) {
            mostCount = counter;
            mostValue = arr[i];
        }
    }

    return `${mostValue} appeared ${mostCount} times.`;
};


// more optimized version of the mostDuplicates function this makes the function go from originally being O(n2) to O(n)
const optimizedDuplicates = (arr) => {
    const map = {};

    for(let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if(map[value] === undefined)
            map[value] = 1;
        else 
            map[value]++;
    }

    let mostValue;
    let mostCount = 0;

    for(const value in map) {
        if(map[value] > mostCount) {
            mostCount = map[value];
            mostValue = value;
        }
    }

    return `${mostValue} appeared ${mostCount} times`;
};

//console.log(isEven(80));

module.exports = {
    binarySearch,
    linearSearch,
    bubbleSort,
    quickSort,
    mostDuplicates,
    optimizedDuplicates
};