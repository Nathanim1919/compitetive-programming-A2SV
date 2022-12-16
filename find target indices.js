/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let output = [];

    // first sort the array in ascending order
    for(let i =0; i < nums.length;i++){
        for(let j = 0; j < nums.length-1;j++){
            if(nums[j] > nums[j + 1]){
                let temp = nums[j];
                    nums[j] = nums[j + 1];
                    nums[j + 1] = temp;
            }
        }
    }
    // find indexies
    for(let k = 0; k < nums.length; k++){
        if(target == nums[k]){
            output.push(k);
        }
    }
return output;
};
