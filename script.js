score=0;
function increaseScore(){
    score+=1;
    document.getElementById("score").innerHTML="Score: "+score;
}
function saveScore(){
    localStorage.setItem("Score", score);
}
function nextPage(){
    window.location="index2.html";
}
function getScore(){
    scoreRecieved=localStorage.getItem("Score");
    document.getElementById("scoreSaved").innerHTML="Score: "+scoreRecieved;
}
function goBack(){
    window.location="index.html";
}