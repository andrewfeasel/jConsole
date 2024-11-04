var console = {
    arr: [],
    num: 0,
    log(source,output){
        console.arr.push(output);
        $(source).innerHTML += console.arr[console.num] + "<br>";
        $(source).scrollTop = $(source).scrollHeight;
        console.num++;
    }
};
function $(x){return document.getElementById(x);}