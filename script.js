// script.js

// Questions array
const quizData = [
    {
        question: "Who developed Python programming language?",
        options: ["Wick van Rossum", "Rasmus Lerdorf", "Guido van Rossum", "Niene Stom"],
        correct: "Guido van Rossum"
      },
      {
        question: "What is the correct file extension for Python files?",
        options: [".pyth", ".pt", ".pyt", ".py"],
        correct: ".py"
      },
      {
        question: "Which keyword is used for function in Python?",
        options: ["fun", "define", "def", "function"],
        correct: "def"
      },
      {
        question: "What will be the output of: print(2 ** 3) ?",
        options: ["6", "8", "9", "5"],
        correct: "8"
      },
      {
        question: "Which one is NOT a legal variable name in Python?",
        options: ["_myvar", "my_var", "my-var", "Myvar"],
        correct: "my-var"
      },
      {
        question: "Which operator is used to check if two values are not equal?",
        options: ["!=", "<>", "not equal", "=!"],
        correct: "!="
      },
      {
        question: "What is the output of len('Python')?",
        options: ["5", "6", "7", "Error"],
        correct: "6"
      },
      {
        question: "How do you start a comment in Python?",
        options: ["//", "*", "--", "#"],
        correct: "#"
      },
      {
        question: "Which data type is immutable in Python?",
        options: ["List", "Set", "Dictionary", "Tuple"],
        correct: "Tuple"
      },
      {
        question: "Which function is used to get input from the user?",
        options: ["input()", "enter()", "scan()", "read()"],
        correct: "input()"
      },
          {
            question: "Which of the following is a Python tuple?",
            options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "{'one':1, 'two':2}"],
            correct: "(1, 2, 3)"
          },
          {
            question: "What is the maximum possible length of an identifier in Python?",
            options: ["16", "32", "128", "No fixed length is specified"],
            correct: "No fixed length is specified"
          },
          {
            question: "Which of the following is used to define a block of code in Python?",
            options: ["Brackets", "Indentation", "Key", "None of the above"],
            correct: "Indentation"
          },
          {
            question: "Which function is used to find the maximum value in a list?",
            options: ["min()", "max()", "highest()", "top()"],
            correct: "max()"
          },
          {
            question: "Which keyword is used for loops in Python?",
            options: ["iterate", "loop", "for", "foreach"],
            correct: "for"
          },
          {
            question: "Which one of these is a mutable data type?",
            options: ["Tuple", "String", "List", "Integer"],
            correct: "List"
          },
          {
            question: "How do you create a dictionary in Python?",
            options: ["()", "[]", "{}", "<>"],
            correct: "{}"
          },
          {
            question: "Which method can be used to remove whitespace from the beginning and end of a string?",
            options: ["ptrim()", "strip()", "len()", "trim()"],
            correct: "strip()"
          },
          {
            question: "Which Python keyword is used to handle exceptions?",
            options: ["exception", "try", "error", "catch"],
            correct: "try"
          },
          {
            question: "What is the output of 5 // 2 in Python?",
            options: ["2.5", "2", "3", "2.0"],
            correct: "2"
          }, 
          {
              question: "Which character is used in Python to make a single-line comment?",
              options: ["//", "#", "--", "/*"],
              correct: "#"
            },
            {
              question: "What is the output of: bool(0) in Python?",
              options: ["True", "False", "0", "Error"],
              correct: "False"
            },
            {
              question: "Which of the following is a Python keyword?",
              options: ["val", "raise", "function", "constant"],
              correct: "raise"
            },
            {
              question: "Which method adds an item at the end of a list in Python?",
              options: ["add()", "append()", "insert()", "push()"],
              correct: "append()"
            },
            {
              question: "How do you start a multi-line string in Python?",
              options: ["Using #", "Using /* */", "Using triple quotes (''' ''')", "Using //"],
              correct: "Using triple quotes (''' ''')"
            },
            {
              question: "What is the correct way to create a set in Python?",
              options: ["set = (1,2,3)", "set = [1,2,3]", "set = {1,2,3}", "set = <1,2,3>"],
              correct: "set = {1,2,3}"
            },
            {
              question: "Which operator is used for exponentiation (power) in Python?",
              options: ["^", "**", "//", "%%"],
              correct: "**"
            },
            {
              question: "What is the correct syntax to output 'Hello World' in Python?",
              options: ["echo('Hello World')", "print('Hello World')", "p('Hello World')", "printf('Hello World')"],
              correct: "print('Hello World')"
            },
            {
              question: "Which data type is used to store true or false values?",
              options: ["int", "str", "bool", "float"],
              correct: "bool"
            },
            {
              question: "Which module in Python is used for regular expressions?",
              options: ["pyregex", "regex", "re", "express"],
              correct: "re"
            }
          
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");

function showQuestion() {
  const q = quizData[currentQuestion];
  questionElement.innerHTML = `<h2>${q.question}</h2>`;
  optionsElement.innerHTML = "";

  q.options.forEach(option => {
    const button = document.createElement("button");
    button.classList.add("option-btn");
    button.innerText = option;
    button.addEventListener("click", selectOption);
    optionsElement.appendChild(button);
  });
}

function selectOption(e) {
  const selectedOption = e.target.innerText;
  const correctOption = quizData[currentQuestion].correct;

  if (selectedOption === correctOption) {
    score++;
  }

  currentQuestion++;
  
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.querySelector('.quiz-container').innerHTML = `
    <h1>🎉 Quiz Completed! 🎉</h1>
    <h2>You scored ${score} out of ${quizData.length} 🏆</h2>
    <h3>${getEmojiFeedback(score)}</h3>
  `;
}

function getEmojiFeedback(score) {
  const totalQuestions = quizData.length;
  if (score === totalQuestions) {
    return "🌟 Perfect Score! You're a Python Pro! 🐍";
  } else if (score >= totalQuestions * 0.7) {
    return "👏 Great Job! You're getting there! 🚀";
  } else if (score >= totalQuestions * 0.4) {
    return "🙂 Good Try! Keep Learning! 📚";
  } else {
    return "😅 Don't worry! Practice makes perfect! 🔥";
  }
}

// Start quiz immediately
showQuestion();
