for (var i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("===============");
var reviews = [1, 2, 3, 4, 5.5];
var sum = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    sum += reviews[i];
}
console.log("Avg : ".concat(sum / reviews.length));
console.log("===============");
var sports = ["1", "2", "3", "4", "5.5"];
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    console.log(sport);
}
