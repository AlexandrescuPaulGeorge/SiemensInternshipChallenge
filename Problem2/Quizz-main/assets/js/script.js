console.log("test_script 5")

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const timing = document.querySelector('#time')
const incorrectAnswer = document.querySelectorAll('.incorrect')
const selectedAnswer = ""
const selectedChoice = ""
var classToApply = ""


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []


// Questions listed below

// !!!!!!!! IMPORTANT !!!!!!!!!!!!!!!!!!
// !!                                 !!
// !! Collapse const questions to get !!
// !! to the implementation part      !!
// !!                                 !!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const questions = [
    {
        id:1,
        question: "What is the capital of Romania?",
        choice1: "Cluj Napoca",
        choice2: "Vaslui",
        choice3: "Bucharest",
        choice4: "Hermannstadt",
        answer: 3,
    },
    {
        id:2,
        question: "What is the largest planet in our solar system?",
        choice1: "Mars",
        choice2: "Jupiter",
        choice3: "Venus",
        choice4: "Saturn",
        answer: 2,
    },
    {
        id:3,
        question: "What is the square root of the number 144?",
        choice1: "12",
        choice2: "11",
        choice3: "13",
        choice4: "It doesn't exist !",
        answer: 1,
    },
    {
        id:4,
        question: "Who is the founder of the company Siemens?",
        choice1: "Nikola Tesla",
        choice2: "Graham Bell",
        choice3: "Werner von Siemens",
        choice4: "Carl Wilhelm Siemens",
        answer: 3,
    },
    {
        id:5,
        question: "What city is the most populated on Earth (urban area)?",
        choice1: "London",
        choice2: "Tokyo",
        choice3: "Istanbul",
        choice4: "New York",
        answer: 2,
    },
    {
        id:6,
        question: "What is the chemical symbol for gold?",
        choice1: "Ag",
        choice2: "Al",
        choice3: "Au",
        choice4: "Ga",
        answer: 3,
    },
    {
        id:7,
        question: "What is the main gas found in the air we breathe?",
        choice1: "Oxygen",
        choice2: "Hydrogen",
        choice3: "Carbon Dioxide",
        choice4: "Nitrogen",
        answer: 4,
    },
    {
        id:8,
        question: "What is the largest country in the world by area?",
        choice1: "Russia",
        choice2: "United States",
        choice3: "Canada",
        choice4: "China",
        answer: 1,
    },
    {
        id:9,
        question: "Which river is the longest in the world?",
        choice1: "Amazon River",
        choice2: "Yangtze River",
        choice3: "Nile River",
        choice4: "Mississippi River",
        answer: 3,
    },
    {
        id:10,
        question: "Mount Everest is located in which mountain range?",
        choice1: "Alps",
        choice2: "Himalayas",
        choice3: "Andes",
        choice4: "Rocky Mountains",
        answer: 2,
    },
    {
        id:11,
        question: "What is the capital city of Japan?",
        choice1: "Beijing",
        choice2: "Seoul",
        choice3: "Tokyo",
        choice4: "Bangkok",
        answer: 3,
    },
    {
        id:12,
        question: "Which of the following countries is landlocked?",
        choice1: "Brazil",
        choice2: "India",
        choice3: "Australia",
        choice4: "Switzerland",
        answer: 4,
    },
    {
        id:13,
        question: "Which is the largest ocean in the world?",
        choice1: "Pacific Ocean",
        choice2: "Indian Ocean",
        choice3: "Arctic Ocean",
        choice4: "Atlantic Ocean",
        answer: 1,
    },
    {
        id:14,
        question: "The Sahara Desert is primarily located in which continent?",
        choice1: "Asia",
        choice2: "Africa",
        choice3: "Australia",
        choice4: "South America",
        answer: 2,
    },
    {
        id:15,
        question: "What is the value of pi up to two decimal places?",
        choice1: "3.14",
        choice2: "2.14",
        choice3: "3.15",
        choice4: "4.13",
        answer: 1, 
    },
    {
        id:16,
        question: "If x+y=10 and x-y=4, what is the value of x?",
        choice1: "3",
        choice2: "5",
        choice3: "7",
        choice4: "9",
        answer: 3,
    },
    {
        id:17,
        question: "If x+y=10 and x-y=4, what is the value of y?",
        choice1: "2",
        choice2: "3",
        choice3: "5",
        choice4: "6",
        answer: 2,
    },
    {
        id:18,
        question: "How many sides does a hexagon have?",
        choice1: "5",
        choice2: "6",
        choice3: "7",
        choice4: "8",
        answer: 2,
    },
    {
        id:19,
        question: "What is the sum of the angles in a triangle?",
        choice1: "90",
        choice2: "180",
        choice3: "270",
        choice4: "360",
        answer: 2,
    },
    {
        id:20,
        question: "In a right-angled triangle, what is the name of the side opposite to the right angle?",
        choice1: "Adjacent",
        choice2: "Opposite",
        choice3: "Base",
        choice4: "Hypotenuse",
        answer: 4,
    },
    {
        id:21,
        question: "What is the next prime number after 7?",
        choice1: "9",
        choice2: "10",
        choice3: "11",
        choice4: "13",
        answer: 3,
    },
    {
        id:22,
        question: "If a triangle has angles of 30° and 60°, what is the measure of the third angle?",
        choice1: "30°",
        choice2: "60°",
        choice3: "90°",
        choice4: "120°",
        answer: 3,
    },
    {
        id:23,
        question: "What is the value of 8x8?",
        choice1: "16",
        choice2: "64",
        choice3: "128",
        choice4: "256",
        answer: 2,
    },
    {
        id:24,
        question: "What is the smallest planet in our solar system?",
        choice1: "Mars",
        choice2: "Earth",
        choice3: "Mercury",
        choice4: "Uranus",
        answer: 3,
    },
    {
        id:25,
        question: "If the sides of a square are each 4 cm, what is its area?",
        choice1: "8 cm²",
        choice2: "12 cm²",
        choice3: "16 cm²",
        choice4: "20 cm²",
        answer: 3,
    },
    {
        id:26,
        question: "What is the value of 20x20?",
        choice1: "100",
        choice2: "200",
        choice3: "400",
        choice4: "800",
        answer: 3,
    },
    {
        id:27,
        question: "Who was the first President of the United States?",
        choice1: "Thomas Jefferson",
        choice2: "Abraham Lincoln",
        choice3: "George Washington",
        choice4: "John Adams",
        answer: 3,
    },
    {
        id:28,
        question: "In which year did World War II end?",
        choice1: "1940",
        choice2: "1945",
        choice3: "1950",
        choice4: "1960",
        answer: 2,
    },
    {
        id:29,
        question: "In which year did World War I start?",
        choice1: "1910",
        choice2: "1912",
        choice3: "1938",
        choice4: "1914",
        answer: 4,
    },
    {
        id:30,
        question: "Which civilization is known for building the Pyramids?",
        choice1: "The Mayans",
        choice2: "The Aztecs",
        choice3: "The Egyptians",
        choice4: "The Romans",
        answer: 3,
    },
    {
        id:31,
        question: "What was the name of the ship that famously sank in 1912 after hitting an iceberg?",
        choice1: "RMS Titanic",
        choice2: "HMS Beagle",
        choice3: "SS Lusitania",
        choice4: "USS Arizona",
        answer: 1,
    },
    {
        id:32,
        question: "Who was the British monarch during World War I?",
        choice1: "Queen Victoria",
        choice2: "King George V",
        choice3: "King Edward VII",
        choice4: "King Henry VIII",
        answer: 2,
    },
    {
        id:33,
        question: "Who was the Romanian leader deposed during the 1989 revolution?",
        choice1: "Gheorghe Gheorghiu-Dej",
        choice2: "Nicolae Ceaușescu",
        choice3: "Ion Iliescu",
        choice4: "Emil Constantinescu",
        answer: 2,
    },
    {
        id:34,
        question: "During which war did Romania fight on both the Axis and Allied sides?",
        choice1: "World War I",
        choice2: "World War II",
        choice3: "The Balkan Wars",
        choice4: "The Crimean War",
        answer: 2,
    },
    {
        id:35,
        question: "Who was the first king of modern Romania, ruling from 1881 to 1914?",
        choice1: "Carol I",
        choice2: "Carol II",
        choice3: "Ferdinand I",
        choice4: "Michael I",
        answer: 1,
    },
    {
        id:36,
        question: "Which historical region of Romania was part of the Austro-Hungarian Empire before World War I?",
        choice1: "Moldavia",
        choice2: "Wallachia",
        choice3: "Transylvania",
        choice4: "Dobrogea",
        answer: 3,
    },
    {
        id:37,
        question: "In which year did Romania gain independence from the Ottoman Empire?",
        choice1: "1821",
        choice2: "1859",
        choice3: "1877",
        choice4: "1918",
        answer: 3,
    },
    {
        id:38,
        question: "Who was the ruler of the Principality of Wallachia,the inspiration for the Dracula legend?",
        choice1: "Vlad the Impaler",
        choice2: "Michael the Brave",
        choice3: "Stephen the Great",
        choice4: "Carol I",
        answer: 1,
    },
    {
        id:39,
        question: "What was the major political change in Romania as a result of the Treaty of Bucharest in 1918?",
        choice1: "Independence from the Ottoman Empire",
        choice2: "Unification of Transylvania, Bessarabia, and Bukovina with the Kingdom of Romania",
        choice3: "Joining the Warsaw Pact",
        choice4: "The beginning of Communist rule",
        answer: 2,
    },
    {
        id:40,
        question: "Which planet is known for its rings?",
        choice1: "Venus",
        choice2: "Mars",
        choice3: "Jupiter",
        choice4: "Saturn",
        answer: 4,
    },
    {
        id:41,
        question: "What is the name of the galaxy that contains our Solar System?",
        choice1: "Andromeda Galaxy",
        choice2: "Whirlpool Galaxy",
        choice3: "Milky Way Galaxy",
        choice4: "Triangulum Galaxy",
        answer: 3,
    },
    {
        id:42,
        question: "What star is at the center of our solar system?",
        choice1: "Sirius",
        choice2: "Polaris",
        choice3: "The Sun",
        choice4: "Alpha Centauri",
        answer: 3,
    },
    {
        id:43,
        question: "What celestial event occurs when the Moon fully blocks the Sun?",
        choice1: "Lunar Eclipse",
        choice2: "Solar Eclipse",
        choice3: "Transit of Venus",
        choice4: "Perihelion",
        answer: 2,
    },
    {
        id:44,
        question: "What is the process by which plants make their food using sunlight?",
        choice1: "Respiration",
        choice2: "Photosynthesis",
        choice3: "Fermentation",
        choice4: "Digestion",
        answer: 2,
    },
    {
        id:45,
        question: "What is the hardest natural substance on Earth?",
        choice1: "Diamond",
        choice2: "Quartz",
        choice3: "Ruby",
        choice4: "Iron",
        answer: 1,
    },
    {
        id:46,
        question: "What force keeps objects bound to the Earth?",
        choice1: "Electromagnetic force",
        choice2: "Friction",
        choice3: "Centrifugal force",
        choice4: "Gravity",
        answer: 4,
    },
    {
        id:47,
        question: "What is the basic unit of life?",
        choice1: "Atom",
        choice2: "Molecule",
        choice3: "Cell",
        choice4: "Organ",
        answer: 3,
    },
    {
        id:48,
        question: "What is the nearest planet to the Sun?",
        choice1: "Venus",
        choice2: "Earth",
        choice3: "Mercury",
        choice4: "Mars",
        answer: 3,
    },
    {
        id:49,
        question: "What is the name of the famous mountain range that runs through Romania?",
        choice1: "The Ural Mountains",
        choice2: "The Alps",
        choice3: "The Carpathian Mountains",
        choice4: "The Balkan Mountains",
        answer: 3,
    },
    {
        id:50,
        question: "Romania has a coastline along which body of water?",
        choice1: "Black Sea",
        choice2: "Adriatic Sea",
        choice3: "Aegean Sea",
        choice4: "Baltic Sea",
        answer: 1,
    }
];

//every time an answer is correct +1 point
const SCORE_POINTS = 1
// sets max number of questions for question counter
const MAX_QUESTIONS = 50

startGame = () => {

    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    document.getElementById('score').style.display = 'none';
    getNewQuestion()
}

//If there are no more questions, redirect to results page to enter highscore
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        
        // Show the score before redirecting
        document.getElementById('score').style.display = 'block';
        
        return window.location.assign('../../assets/results/results.html');
    }
// question counter - lists current question out of total amount of questions ex: 1 out of 5
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

//Lists choice options, and also turns selected answer green = corrext / red = incorrect
choices.forEach(choice => {
    choice.addEventListener('click', e => {

        if(!acceptingAnswers) return

        
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout (() => {
           selectedChoice.parentElement.classList.remove(classToApply)
           getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

//timer

(function() {
    var totalSeconds = 600; // 10 minutes
    function startTimer() {
        console.log('timer supposed to go')
        var timer = setInterval(function() {
            totalSeconds--;
            var minutes = Math.floor(totalSeconds / 60);
            var seconds = totalSeconds % 60;

            // Adding leading zero for formatting
            minutes = String(minutes).padStart(2, '0');
            seconds = String(seconds).padStart(2, '0');

            timing.innerHTML = `${minutes}:${seconds}`;

            if (totalSeconds <= 0) {
                clearInterval(timer);
                alert("Time is up!");
                window.location.assign('../../assets/results/results.html');
            }
        }, 1000);
    }
    startTimer();
})();


//declaring the game to run
startGame()
