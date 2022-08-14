const correctAnswers = ["B","A","A","B"]
const form = document.querySelector('.quiz-form')

form.addEventListener('submit',e=>{
    e.preventDefault()
    let score = 0
    userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value]

    userAnswers.forEach((answers,index) => {
        if(answers === correctAnswers[index]){
            score = score + 1;
        }
    });
    console.log(score)
})

