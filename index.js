function myClass(){
    var score=0;
    var correctAnswer1=document.form.qst1.value; 
    var correctAnswer2=document.form.qst2.value; 
    var correctAnswer3=document.form.qst3.value; 
    var result=document.getElementById("result");
    if (correctAnswer1=="html"){score++};
    if (correctAnswer2=="js"){score++};
    if (correctAnswer3=="no"){score++};  
    result.innerHTML=score;

    if (score==3){
        result.innerHTML="Your Score is " + Math.floor(score/3*100) + "%"+ ". Excellent."
    }
    else if(score==2){
        result.innerHTML="Your Score is " + Math.floor(score/3*100) + "%"+ ". Average."
    }
    else{
        result.innerHTML="Your Score is " + Math.floor(score/3*100) + "%"+ ". Fail. Please re-take  the test"
    }
};