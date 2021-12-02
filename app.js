var pages = ["Login","Grade View","Add Grade"]

var noteValue
var importanceValue

var grades = []


function createNav(){
    var nav = document.createElement("nav")
    nav.classList.add("nav")
    document.body.appendChild(nav)

    for(var i = 1; i < pages.length; i++) {
        createButton(pages[i], pages[i])
    }

    function createButton(pg) {
        var button = document.createElement("button")
        button.innerHTML = pg
        button.addEventListener("click", function () {
            navigate(pg)
        })
        nav.appendChild(button)
    }
}

function createWrapper(){
    var wrapper = document.createElement("div")
    wrapper.classList.add("wrapper")
    document.body.appendChild(wrapper)
}

function navigate(pg){
    if(pg==="Login"){
        loginPage()
    }else if(pg==="Grade View"){
        gradeView()
    }else if(pg==="Add Grade"){
        addGrade()
    }

}


// Pages

function loginPage(){
    createWrapper()
    var wrapper = document.querySelector(".wrapper")
    wrapper.innerHTML = ""
    var userInput = document.createElement("input")
    var passInput = document.createElement("input")
    var logButton = document.createElement("button")
    var respDiv = document.createElement("div")
    userInput.placeholder = "Username", userInput.type = "text"
    passInput.placeholder = "Password", passInput.type = "password"
    logButton.innerHTML = "Log In"

    logButton.addEventListener("click",function(){
        var userValue = userInput.value
        var passValue = passInput.value
        if(userValue == "cool"){
            if(passValue == "password"){
                wrapper.innerHTML = ""
                wrapper.classList.remove("wrapper")
                createNav()
                createWrapper()
                navigate("Grade View")
            }
            else{
                respDiv.innerHTML = "Wrong Password"
            }
        } else{
            respDiv.innerHTML = "Wrong User"
        }

    })

    wrapper.appendChild(userInput)
    wrapper.appendChild(passInput)
    wrapper.appendChild(logButton)
    wrapper.appendChild(respDiv)

}


function gradeView(){
    var wrapper = document.querySelector(".wrapper")
    wrapper.innerHTML= ""
    var header = document.createElement("h1")
    header.innerHTML="Grades"
    wrapper.appendChild(header)
    implementGrade()
}

function implementGrade(){
    var wrapper = document.querySelector(".wrapper")
    var createDiv = document.createElement("div")
    for(var i = 0; i < grades.length; i++){
        createDiv.innerHTML += '<br >' + "Student Name: " + grades[i].name + " | " + "Grade: " + grades[i].grade
    }

    wrapper.appendChild(createDiv)

}

function addGrade(){
    var wrapper = document.querySelector(".wrapper")
    wrapper.innerHTML = ""
    var header = document.createElement("h1")
    var note = document.createElement("input")
    var importance = document.createElement("input")
    var submitNote = document.createElement("button")
    var respDiv = document.createElement("div")
    submitNote.innerHTML = "Submit Grade"
    note.placeholder = "Student Name"
    importance.placeholder = "Grade"
    header.innerHTML = "Add Your Grade"

    submitNote.addEventListener("click",function(){
        noteValue = note.value
        importanceValue = importance.value
        if(noteValue.length > 1){
            respDiv.innerHTML = "The value is more than one"
            if(isNaN(importanceValue) == false && Number(importanceValue) <= 100 && Number(importanceValue) >= 0){
                var obj = {name: [noteValue],grade: [importanceValue]}
                grades.push(obj)
                console.log(grades)
                gradeView()
            }
            else if(Number(importanceValue) <= 100 || Number(importanceValue) >= 0){
                respDiv.innerHTML = "Grade needs to be from 0-100"
            }
            else{
                respDiv.innerHTML = "Grade is not a number"
            }

        } else{
            respDiv.innerHTML = "Note needs to have more than one character"
        }


    })


    wrapper.appendChild(header)
    wrapper.appendChild(note)
    wrapper.appendChild(importance)
    wrapper.appendChild(submitNote)
    wrapper.appendChild(respDiv)
}

console.log(grades)


navigate("Login")