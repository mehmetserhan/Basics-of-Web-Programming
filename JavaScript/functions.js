function func1(param1){
    let info1 = func2(param1)
    console.log(info1)
}
function func2(param2){
    let info2 = param2 + "hi"
    return info2
}
func1("hello ")
console.log("---------------------------------------------")

/********************************************************************/

let not = parseInt(prompt("Grade?: "))

if(not>=0 && not<=100){
    grader(not)
}
else{
    console.log("Invalid input!!!")
}

function grader(param){
    let examInfo = document.querySelector("#examInfo")
    let letterInfo = document.querySelector("#letterInfo")

    examInfo.innerHTML += param
    console.log(`Your exam grade: ${param} -> ${typeof(param)}`)
    
    let letter = gradeLetter(param)
    letterInfo.innerHTML += letter
    console.log(`Your letter grade: ${letter} -> ${typeof(letter)}`)
}

function gradeLetter(param){
    let letter
    if(param>=0 && param<20){
        letter = 'F'
    }
    else if(param>=21 && param<40){
        letter = 'D'
    }
    else if(param>=41 && param<60){
        letter = 'C'
    }
    else if(param>=61 && param<80){
        letter = 'B'
    }
    else{
        letter = 'A'
    }
    return letter;
}
