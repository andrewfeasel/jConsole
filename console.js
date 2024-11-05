var console = {
    arr: [],
    num: 0,
    str: 'hello world',
    //Enters a new string into the console's array, and prints it to the console
    log(){
        console.arr.push(console.str);
        $('consoleUI').innerHTML += console.arr[console.num] + '<br>';
        $('consoleUI').scrollTop = $('consoleUI').scrollHeight;
        console.num++;
    },
    //Deletes the console's array and the console's innerHTML
    del(){
        console.arr = []; 
        console.num = 0;
        $('consoleUI').innerHTML = console.arr;
        $('consoleUI').scrollTop = $('consoleUI').scrollHeight;
    },
    //Normal text to Base64
    encode64(){
        for(var i = 0; i < console.arr.length; i++){
            console.arr[i] = btoa(console.arr[i]);
        }
        for(var i = 0; i < console.arr.length; i++){
            $('consoleUI').innerHTML += console.arr[i] + '<br>';
        }
        $('consoleUI').scrollTop = $('consoleUI').scrollHeight;
    },
    //Base64 to normal text
    decode64(){
        for(var i = 0; i < console.arr.length; i++){
        console.arr[i] = atob(console.arr[i]); 
        }
        for(var i = 0; i < console.arr.length; i++){
            $('consoleUI').innerHTML += console.arr[i] + '<br>';
        }
        $('consoleUI').scrollTop = $('consoleUI').scrollHeight;
    },
    //Base64 to Unicode (decode Base64 data to original data)
    atou() {
        for(var i = 0; i < console.arr.length; i++){
            console.arr[i] = atou2(i); 
        }
        for(var i = 0; i < console.arr.length; i++){
            $('consoleUI').innerHTML += console.arr[i] + '<br>';
        }
        $('consoleUI').scrollTop = $('consoleUI').scrollHeight;
        function atou2(x){return decodeURIComponent(escape(atob(console.arr[x])));}
        
    },
    //Unicode to Base64 (encode Unicode data to Base64)
    utoa() {
         for(var i = 0; i < console.arr.length; i++){
            console.arr[i] = utoa2(i); 
        }
        for(var i = 0; i < console.arr.length; i++){
            $('consoleUI').innerHTML += console.arr[i] + '<br>';
        }
        function utoa2(x){return btoa(unescape(encodeURIComponent(console.arr[x])));
;}
    }
    
};
function $(x){return document.getElementById(x);}