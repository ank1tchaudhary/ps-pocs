for(let i=1; i<=5; i++){
    console.log(i);
}
console.log("===============")
let reviews : number[] = [1,2,3,4,5.5];
let sum : number = 0;
for(let i=0; i<reviews.length; i++){
    console.log(reviews[i]);
    sum += reviews[i];
}

console.log(`Avg : ${sum/reviews.length}`)
console.log("===============")

let sports : string[] = ["1","2","3","4","5.5"];
for(let sport of sports){
    console.log(sport);
}
