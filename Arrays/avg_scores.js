let myScores = [92, 98, 84, 76, 89, 99, 100]; 
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

function getAverage(score) {

    let len = score.length;
    let total = 0.00
    for(i=0;i<len;i++){
        total += score[i]

    }

    let average = 0.00
    average = total / len;

    console.log( `The average is ${average}`);

}

getAverage(myScores);
getAverage(yourScores);
