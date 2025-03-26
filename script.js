const questionForm = document.querySelector('#question-form');
const addQuestionBtn = document.querySelector('#add-question-btn');

// hide the questionForm
questionForm.style.display = 'none';

// when addQuestionBtn is clicked, show the questionForm,
addQuestionBtn.addEventListener('click', () => {
    questionForm.style.display = 'block';
});

// sample question: this shows how you can represent the question bank and one question
const questions = [
    {
        question: 'What is the capital of France?', // question text
        options: ['Paris', 'London', 'Berlin', 'Madrid'], // possible options
        answer_type:"single", // singe answer or multple answers
        answer_index: 0 // correct answer is at index 0
    }
]