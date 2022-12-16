function countingSort(arr) {
    // Write your code here
    let countArry = [];
    for(let i = 0;i < 100;i++){
        let count = 0;
        for(let k = 0;k < arr.length;k++){
            if(i == arr[k]){
                count++;
            }
        }
        countArry.push(count);
    }
    return countArry;
}
