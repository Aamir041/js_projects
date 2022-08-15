const correctAnswers = ["B","A","A","B"];
const form = document.querySelector('.quiz-form');
const result = document.querySelector(".result");
const subHead = document.querySelector("#subHead");
form.addEventListener('submit',e=>{
    e.preventDefault();
    let score = 0;
    userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    userAnswers.forEach((answers,index) => {
        if(answers === correctAnswers[index]){
            score = score + 25;
        }
    });
    // console.log(score)
    // result.document.querySelector("span").textContent=`${score}%`; // BIG MISTAKE :)
    scrollTo(0,0);
    subHead.classList.add("d-none");
    // result.querySelector('span').textContent=`${score}%`
    result.classList.remove("d-none");


    let fscore = 0;
    let scoreAnimator = setInterval(()=>{
        result.querySelector('span').textContent=`${fscore}%`
        if(fscore == score){
            clearInterval(scoreAnimator);
        }
        else{
            fscore++;
        }
    },15);
})

