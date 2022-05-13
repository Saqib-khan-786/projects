console.log("linked");


let quizquestion = [
    {
        question: "what is the full form of HTML ?",
        a: "HTML",
        b: "hyper text markup language",
        c: "Markup Language",
        d: "Extensible Markup Language ",
        ans: "ans2"
    },
    {
        question: "HTML is what type of language",
        a: "Scripting Language",
        b: " Markup Language",
        c: " Network Protocol",
        d: " Programming Language",
        ans: "ans2"
    },
    {
        question: "Microsoft Excel is a -",
        a: "Financial planning package ",
        b: "MS office package",
        c: "Electronic Spreadsheet ",
        d: "Graphic package ",
        ans: "ans3"
    },
    {
        question: "What does XML stand for? ",
        a: "Example Markup Language ",
        b: "hyper text markup language",
        c: " Extensible Markup Language ",
        d: "Extra Modern Link ",
        ans: "ans3"
    },
    {
        question: "Javascript is an _______ language? ",
        a: "object-oriented",
        b: "object-based",
        c: " all of the above ",
        d: "none of the above ",
        ans: "ans1"
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        a: "const",
        b: "var",
        c: "let ",
        d: "constant",
        ans: "ans1"
    },
    {
        question: "   Which function is used to serialize an object into a JSON string in Javascript?",
        a: "stringify()",
        b: "parse()",
        c: "convert()",
        d: "none of the above ",
        ans: "ans1"
    },
    {
        question: "   Which of the following is not a Javascript framework? ",
        a: "node",
        b: "vue",
        c: " react",
        d: "cassandra ",
        ans: "ans4"
    },
    {
        question: "How to stop an interval timer in Javascript? ",
        a: "clearInterval",
        b: "Cleartimer",
        c: " all of the above ",
        d: "none of the above ",
        ans: "ans1"
    },
    {
        question: "How to stop an interval timer in Javascript? ",
        a: "clearInterval",
        b: "Cleartimer",
        c: " all of the above ",
        d: "none of the above ",
        ans: "ans1"
    },
]
let question = document.getElementById("question");
let startquiz = document.getElementById("start");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let showresult = document.getElementById("showresult");
let finalscore = document.getElementById("finalscore");
let result = document.getElementById("result");
let results_remark = document.getElementById("results-remark");


let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");

//  getting radio buttons
let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
let ans4 = document.getElementById("ans4");
let answers = document.querySelectorAll(".answers")
let names = document.getElementsByName("ans");
let alternate_radio = document.getElementsByClassName("alternate-radio")


// getting scores elements

let correctcount = document.getElementById("correctcount");
let wrongcount = document.getElementById("wrongcount");

let questioncount = 0;
let score = 0;
let wrong = 0;

let deselect = () => {

    for (let i = 0; i < names.length; i++) {
        names[i].checked = false

    }

}
//  let prevanswers = ()=>{
//      for (let i = 0; i < answers.length; i++) {
//         answers[i].style.color ="red"

//      }
//  }
let prevanswers = () => {
    for (let i = 0; i < answers.length; i++) {

        answers[i].style.color = "red"
    }

}

let loadquestions = () => {
    deselect()
    let list = quizquestion[questioncount];
    // console.log(list);
    question.innerText = list.question;
    option1.innerText = list.a
    option2.innerText = list.b
    option3.innerText = list.c
    option4.innerText = list.d
    for (let i = 0; i < names.length; i++) {
        names[i].style.display = "inline-block"

        for (let ar = 0; ar < alternate_radio.length; ar++) {
            alternate_radio[ar].style.display = "none"

        }

    }
}
// loadquestions(); 
let getanswers = () => {
    let selectedanswer;
    if (ans1.checked == true) {
        selectedanswer = "ans1"


        return selectedanswer
    } else if (ans2.checked == true) {
        selectedanswer = "ans2"


        return selectedanswer;
    } else if (ans3.checked == true) {
        selectedanswer = "ans3"

        return selectedanswer;

    }
    else if (ans4.checked == true) {
        selectedanswer = "ans4"

        return selectedanswer;
    }
}

// let checkanswers = ()=>{
//     getanswers();
//     if (selectedanswer === list) {
//         score++
//         console.log(score)
//     }
// }


startquiz.addEventListener("click", () => {
    loadquestions();
    next.style.display = "block"
    prev.style.display = "block"
    startquiz.style.visibility = "hidden";
    timerfunction()

});


next.addEventListener("click", () => {
    if (questioncount > 9) {
        next.style.display = "none"
        showresult.style.display = "block"


    }
    let getanswersstr = getanswers();
    // console.log(getanswersstr);

    if (getanswersstr === quizquestion[questioncount].ans) {
        score++;
        // console.log(score);
        correctcount.innerText = score;
    } else {
        wrong++;
        wrongcount.innerText = wrong;
    }

    if (questioncount < quizquestion.length) {
        questioncount++;
        loadquestions()
    } else if (questioncount == quizquestion.length) {
        startquiz.style.visibility = "visible"

        // console.log("ok")
    } else if (questioncount > quizquestion.length) {
        // console.log("kuchbhi");

    };


    if (quizquestion[question].length == 10) {
        next.style.display = "none"
        showresult.style.display = "block"

    }
    prevanswers()
});

// score functions





prev.addEventListener("click", () => {
    next.style.display = "block"
    showresult.style.display = "none"
    if (questioncount > 0) {
        questioncount--;
        wrong--;
        // score--;
        loadquestions();
        // console.log(questioncount);
        // wrongcount.innerText = wrong;
        // correctcount.innerText = score;
    }
    for (let i = 0; i < names.length; i++) {
        names[i].style.display = "none"

    }
    //  prevanswers();

    for (let ar = 0; ar < alternate_radio.length; ar++) {
        alternate_radio[ar].style.display = "inline-block"

    }

})
let getfinalscore = () => {
    let fianlscore
    let finalscore = score / 10 * 100
    // console.log(finalscore);
    return finalscore;
    finalscore.innerText = finalscore;

}


// getting bages icons
let gold = document.querySelector(".gold")
let silver = document.querySelector(".silver")
let bronze = document.querySelector(".bronze")

showresult.addEventListener("click", () => {
    finalscorestr = getfinalscore();
    // console.log(finalscorestr);
    if (score == 10) {
        finalscore.innerText = "you have scored" + finalscorestr + "%" + "😎";
        results_remark.innerText = "Great! you have won a gold badge"
        result.style.background = "gold"
        gold.style.display = "block"

    } else if (score >= 7) {
        finalscore.innerText = "you have scored"+finalscorestr + "%" + "😋";
        results_remark.innerText = "amazing! you have won a silver badge"
        result.style.background = "silver"
        silver.style.display = "block"
    } else if(score >=5){
        finalscore.innerText = "you have scored" + " " + finalscorestr + "%" + "😉";
        results_remark.innerText = "fine! you have won bronze"
        result.style.background = "#CD7F32"
        bronze.style.display = "block"
    }else{
        finalscore.innerText = "you have scored" + "" + finalscorestr + "%" + "😭";
        results_remark.innerText = "better luck next time"
        result.style.background = "red"
    }
    result.classList.add("active")
})



// page animation and designing
let frontpage = document.getElementById("details-page");
let show = document.getElementById("showfrontpage");
let animateditems = document.getElementsByClassName("transform");
let logo = document.getElementById("logo");
let container = document.querySelector(".container")
let load = () => {

    for (let index = 0; index < animateditems.length; index++) {


        // console.log(animateditems[index])

        animateditems[index].classList.add("active")
    }
    frontpage.classList.add("active");
    logo.classList.add("active")
}

show.addEventListener("click", () => {
    container.style.display = "block"
    frontpage.classList.add("hide")
    frontpage.classList.remove("active")
})


let show_assesment = document.getElementById("assesmemt-rules")
let assesment = document.querySelector(".assesment")

show_assesment.addEventListener("mouseover",()=>{
    assesment.classList.add("active")
});
show_assesment.addEventListener("mouseout",()=>{
    assesment.classList.remove("active")
});

// timer 
let timerfunction = ()=>{
let timer = document.querySelector(".timer")
let minutes = 4;
let seconds = 60;
setInterval(() => {
    if (minutes == 0 && seconds == 1) {
        timer.innerHTML = "0:00"

    } else {
        seconds--;
        if (seconds == 0) {
            minutes--;
            seconds = 60;
            if (minutes == 0) {
                minutes = minutes;


            }

        }
        if (seconds<10) {
            seconds = "0" + seconds
        }
        timer.innerHTML = minutes + ":" + seconds
    }
    if (minutes == 0 && seconds == 1) {
        finalscorestr = getfinalscore();
    // console.log(finalscorestr);
    if (score > 7) {
        finalscore.innerText = finalscorestr + "%" + "😎";
        results_remark.innerText = "Great"
        result.style.background = "green"

    } else if (score == 5) {
        finalscore.innerText = finalscorestr + "%" + "😋";
        results_remark.innerText = "fine! you can do better"
    } else {
        finalscore.innerText = "you have scored" + " " + finalscorestr + "%" + "🥴";
        results_remark.innerText = "oOps"
        result.style.background = "red"
    }
       result.classList.add("active")
    }
    if (minutes == 0 && seconds == 59) {
      alerttimer = setInterval(() => {
         if ( timer.style.opacity =="0.2") {
            timer.style.opacity = "1"
         }else{
            timer.style.opacity = "0.2"
         }
         timer.style.color = "red"
      }, 1000);
    }

}, 1000);

}