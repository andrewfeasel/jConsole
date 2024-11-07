var jConsole = {
    arr: [],
    userInput: false,
    str: 'testString',
    //Enters a new string into the console's array, and prints it to the console
    log(){
        if (this.userInput === false) {
            this.arr.push(jConsole.str.trim());
        } else {
            this.arr.push($('input').value.trim());
        }
        $('consoleUI').innerHTML += this.arr[this.arr.length-1] + '<br>';
        $('consoleUI').scrollTop = $('consoleUI').scrollHeight;
    },
    //Deletes the console's array and the console's innerHTML
    del(){
        this.arr = [];
        $('consoleUI').innerHTML = '';
        $('input').value = '';
        $('consoleUI').scrollTop = $('consoleUI').scrollHeight;
    },
    //Normal text to Base64
    encode64(){
        for(var i = 0; i < this.arr.length; i++){
            this.arr[i] = btoa(jConsole.arr[i]);
        }
        for(var i = 0; i < this.arr.length; i++){
            $('consoleUI').innerHTML += this.arr[i] + '<br>';
        }
        $('consoleUI').scrollTop = $('consoleUI').scrollHeight;
    },
    //Base64 to normal text
    decode64(){
        for(var i = 0; i < this.arr.length; i++){
            this.arr[i] = atob(jConsole.arr[i]); 
        }
        for(var i = 0; i < this.arr.length; i++){
            $('consoleUI').innerHTML += this.arr[i] + '<br>';
        }
        $('consoleUI').scrollTop = $('consoleUI').scrollHeight;
    },
    switchinput(){
        if(this.userInput === true){
            this.userInput = false; 
            $('settings').innerHTML = 'User input: off';
        }else{
            this.userInput = true;
            $('settings').innerHTML ='User input: on';
        }
    }
};
function $(x){return document.getElementById(x);}
