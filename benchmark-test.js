const Benchmark = require('benchmark');
const { binarySearch, linearSearch, isEven } = require('./algorithms');
const nums = [];

for(let i = 0; i <= 100000; i++) {
    nums.push(i);
}

const suite = new Benchmark.Suite;

suite
    .add('linear search', function() {
        // benchmark linear search
        linearSearch(nums, nums[nums.length - 1]);
    })
    .add('binary search', function() {
        // benchmark binary search
        binarySearch(nums, nums[nums.length - 1], 0, nums.length - 1);
    })
    .on('complete', function() {
        // loop over and print each result
        this.forEach(result => 
            console.log(`${result.name} averaged ${result.stats.mean * 1000} milliseconds.`)
        );
    })
    .run();