var jConsole = {
    arr: [],
    num: 0,
    userInput: false,
    str: 'testString',
    //Enters a new string into the console's array, and prints it to the console
    log(){
        if (jConsole.userInput === false){
            jConsole.arr.push(jConsole.str.trim());
        }else{
            jConsole.arr.push($('input').innerHTML.trim());
        }
        $('consoleUI').innerHTML += jConsole.arr[jConsole.num] + '<br>';
        $('consoleUI').scrollTop = $('consoleUI').scrollHeight;
        jConsole.num++;
    },
    //Deletes the console's array and the console's innerHTML
    del(){
        jConsole.arr = []; 
        jConsole.num = 0;
        $('consoleUI').innerHTML = jConsole.arr;
        $('input').innerHTML = jConsole.arr;
        $('consoleUI').scrollTop = $('consoleUI').scrollHeight;
    },
    //Normal text to Base64
    encode64(){
        for(var i = 0; i < jConsole.arr.length; i++){
            jConsole.arr[i] = btoa(jConsole.arr[i]);
        }
        for(var i = 0; i < jConsole.arr.length; i++){
            $('consoleUI').innerHTML += jConsole.arr[i] + '<br>';
        }
        $('consoleUI').scrollTop = $('consoleUI').scrollHeight;
    },
    //Base64 to normal text
    decode64(){
        for(var i = 0; i < jConsole.arr.length; i++){
            jConsole.arr[i] = atob(jConsole.arr[i]); 
        }
        for(var i = 0; i < jConsole.arr.length; i++){
            $('consoleUI').innerHTML += jConsole.arr[i] + '<br>';
        }
        $('consoleUI').scrollTop = $('consoleUI').scrollHeight;
    },
    switchinput(){
        if(jConsole.userInput === true){
            jConsole.userInput = false; 
            $('settings').innerHTML = 'User input: off';
        }else{
            jConsole.userInput = true;
            $('settings').innerHTML ='User input: on';
        }
    }
};
function $(x){return document.getElementById(x);}