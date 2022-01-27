const Benchmark = require('benchmark');
const { binarySearch, linearSearch, bubbleSort, quickSort } = require('./algorithms');
const nums = [];

for(let i = 0; i <= 1000; i++) {
    nums.push(randomNum(1000));
}

const suite = new Benchmark.Suite;

suite
    /*.add('linear search', function() {
        // benchmark linear search
        linearSearch(nums, nums[nums.length - 1]);
    })
    .add('binary search', function() {
        // benchmark binary search
        binarySearch(nums, nums[nums.length - 1], 0, nums.length - 1);
    }) */
    .add('bubble sort', function() {
        // benchmark bubble sort
        const tempArr = [...nums];
        bubbleSort(tempArr);
    })
    .add('quick sort', function() {
        // benchmark quick sort
        const tempArr = [...nums];
        quickSort(tempArr);
    })
    .add('js sort', function() {
        // benchmark js sort
        const tempArr = [...nums];
        tempArr.sort((a, b) => {
            return a - b;
        });
    })
    .on('complete', function() {
        // loop over and print each result
        this.forEach(result => 
            console.log(`${result.name} averaged ${result.stats.mean * 1000} milliseconds.`)
        );
    })
    .run();


function randomNum(limit) {
    return Math.floor(Math.random() * limit) + 1;
}