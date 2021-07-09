// getting number

function getBtn(number){
    var input=document.getElementById("result");
    input.value +=number
}

// getting clearResult

function clearResult(){
    var input=document.getElementById("result");
    input.value =" ";
}


// getting backSpace

function backSpace(){
    var input=document.getElementById("result");
    input.value = input.value.slice(0,-1)
}

// getting result

function getResult(){
    var input=document.getElementById("result");
    input.value = eval(input.value)
}


    

