var console = {
    arr: [],
    num: 0,
    str: 'hello',
    log(){
        console.arr.push(console.str);
        $('consoleUI').innerHTML += console.arr[console.num] + '<br>';
        $('consoleUI').scrollTop = $('consoleUI').scrollHeight;
        console.num++;
    },
    del(){
        console.arr = []; 
        console.num = 0;
        $('consoleUI').innerHTML = console.arr;
        $('consoleUI').scrollTop = $('consoleUI').scrollHeight;
    },
    encode64(){
        for(var i = 0; i < console.arr.length; i++){
            console.arr[i] = btoa(console.arr[i]);
        }
        for(var i = 0; i < console.arr.length; i++){
            $('consoleUI').innerHTML += console.arr[i] + '<br>';
        }
    },
    decode64(){
        for(var i = 0; i < console.arr.length; i++){
        console.arr[i] = atob(console.arr[i]); 
        }
        for(var i = 0; i < console.arr.length; i++){
            $('consoleUI').innerHTML += console.arr[i] + '<br>';
        }
    }
    
};
function $(x){return document.getElementById(x);}