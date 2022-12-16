
function gradingStudents(grades) {
    // Write your code here
    for (let i = 0; i < grades.length;i++){
        if(grades[i] >= 38){
            if((grades[i] + 2) % 5 == 0){
                grades[i] = grades[i] + 2;
            }
            else if((grades[i] + 1) % 5 == 0){
                grades[i] = grades[i] + 1;
            }
        }
    }
return grades;
}
