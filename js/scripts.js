$(function(){$("[data-toggle='popover']").popover();});
var sub = function f(a,b){
    return a-b;
}

console.log(sub(9,6));

$("#myCarousel").carousel({
    interval:2000,
    pause:'hover',
    wrap:false,
});
