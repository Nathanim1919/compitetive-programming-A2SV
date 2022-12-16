/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for(let i = 0; i < nums.length;i++){
        for(let k = 0; k< nums.length-1;k++){
            if(nums[k] > nums[k+1]){
                let temp = nums[k];
                    nums[k] = nums[k+1];
                    nums[k+1] = temp
            }
        }
    }
    return nums;
};
