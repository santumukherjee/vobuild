import React, { useState, useEffect } from "react";
import "./App.css";

const questions = [
  { question: "Autonomous individuals or entities are:", options: ["Independent, self-governing", "Heavily dependent", "Controlled by others", "Unable to function alone"], answer: "Independent, self-governing", type: "single" },
  { question: "Avaricious people:", options: ["Have extreme greed for wealth", "Are always generous", "Have no financial interests", "Avoid material possessions"], answer: "Having extreme greed for wealth", type: "single" },
  { question: "Axiomatically means:", options: ["In a self-evident manner", "Through a lengthy debate", "Based on speculation", "By making assumptions"], answer: "In a self-evident manner", type: "single" },
  { question: "Absolve means:", options: ["To clear from blame or guilt", "To convict of a crime", "To assign responsibility", "To accuse falsely"], answer: "To clear from blame or guilt", type: "single" },
  { question: "Absorbent materials:", options: ["Soak up liquid easily", "Repel water", "Remain completely dry", "Are waterproof"], answer: "Able to soak up liquid easily", type: "single" },
  { question: "Abstrusely means:", options: ["In a way that is difficult to understand", "In a straightforward manner", "With complete clarity", "With no effort required"], answer: "In a way that is difficult to understand", type: "single" },
  { question: "Accelerate means:", options: ["To increase in speed or progress", "To slow down", "To come to a stop", "To move backward"], answer: "To increase in speed or progress", type: "single" },
  { question: "Accessible places are:", options: ["Easy to approach or enter", "Difficult to reach", "Completely locked away", "Impossible to enter"], answer: "Easy to approach or enter", type: "single" },
  { "question": "What does 'Banal' mean?", "options": ["Unique and original", "Overused, lacking originality", "Highly sophisticated", "Mysterious and complex"], "answer": "Overused, lacking originality", "type": "single" },
  { "question": "'Bellicose' is best defined as:", "options": ["Friendly and peaceful", "Warlike, aggressive", "Calm and composed", "Compassionate and kind"], "answer": "Warlike, aggressive", "type": "single" },
  { "question": "'Benevolent' means:", "options": ["Kind and generous", "Selfish and greedy", "Aggressive and hostile", "Indifferent and uncaring"], "answer": "Kind and generous", "type": "single" },
  { "question": "What is the meaning of 'Blithe'?", "options": ["Carefree and cheerful", "Serious and stern", "Nervous and anxious", "Cautious and careful"], "answer": "Carefree and cheerful", "type": "single" },
  {"question": "What does 'Cacophony' mean?", "options": ["Pleasant sound", "Harsh, discordant sound", "Soft whispering", "Melodic and soothing"], "answer": "Harsh, discordant sound", "type": "single"},
  {"question": "What does 'Capricious' mean?", "options": ["Careful", "Impulsive, unpredictable", "Steady", "Logical"], "answer": "Impulsive, unpredictable", "type": "single"},
  {"question": "What does 'Castigate' mean?", "options": ["Praise", "Criticize severely", "Encourage", "Ignore"], "answer": "Criticize severely", "type": "single"},
  {"question": "What does 'Chicanery' mean?", "options": ["Honesty", "Deception", "Directness", "Kindness"], "answer": "Deception", "type": "single"},
  {"question": "What does 'Daunt' mean?", "options": ["Encourage greatly", "Discourage or dishearten", "Excite and energize", "Motivate positively"], "answer": "Discourage or dishearten", "type": "single"},
  {"question": "What does 'Debase' mean?", "options": ["Enhance quality", "Degrade or lower in value", "Improve rank", "Strengthen reputation"], "answer": "Degrade or lower in value", "type": "single"},
  {"question": "What does 'Debunk' mean?", "options": ["Confirm false claims", "Expose or disprove false claims", "Ignore misinformation", "Support exaggerated stories"], "answer": "Expose or disprove false claims", "type": "single"},
  {"question": "What does 'Declaim' mean?", "options": ["Speak in a pompous manner", "Whisper softly", "Speak hesitantly", "Remain silent"], "answer": "Speak in a pompous manner", "type": "single"},
  {"question": "What does 'Declivity' mean?", "options": ["Upward slope", "Downward slope", "Flat surface", "Sharp peak"], "answer": "Downward slope", "type": "single"},
  {"question": "What does 'Ebullient' mean?", "options": ["Overflowing with enthusiasm", "Calm and reserved", "Lacking energy", "Indifferent"], "answer": "Overflowing with enthusiasm", "type": "single"},
  {"question": "What does 'Eclectic' mean?", "options": ["Drawn from various sources", "Limited to one style", "Highly specialized", "Traditional and unchanging"], "answer": "Drawn from various sources", "type": "single"},
  {"question": "What does 'Effrontery' mean?", "options": ["Shameless boldness", "Timid hesitation", "Respectful politeness", "Cautious behavior"], "answer": "Shameless boldness", "type": "single"},
  {"question": "What does 'Facetious' mean?", "options": ["Joking, not serious", "Sincere and serious", "Sad and gloomy", "Extremely angry"], "answer": "Joking, not serious", "type": "single"},
  {"question": "What does 'Fallacious' mean?", "options": ["Based on a false belief", "Completely truthful", "Logically sound", "Obvious and undeniable"], "answer": "Based on a false belief", "type": "single"},
  {"question": "What does 'Fastidious' mean?", "options": ["Extremely attentive to detail", "Careless and sloppy", "Lazy and indifferent", "Unconcerned with precision"], "answer": "Extremely attentive to detail", "type": "single"},
  {"question": "What does 'Fatuous' mean?", "options": ["Silly, foolish", "Serious and wise", "Deeply insightful", "Extremely intelligent"], "answer": "Silly, foolish", "type": "single"},
  {"question": "What does 'Garrulous' mean?", "options": ["Excessively talkative", "Quiet and reserved", "Rude and impolite", "Brief and to the point"], "answer": "Excessively talkative", "type": "single"},
  {"question": "What does 'Gauche' mean?", "options": ["Lacking social grace", "Highly sophisticated", "Very charming", "Extremely polite"], "answer": "Lacking social grace", "type": "single"},
  {"question": "What does 'Gregarious' mean?", "options": ["Sociable and outgoing", "Preferring solitude", "Easily irritated", "Lacking confidence"], "answer": "Sociable and outgoing", "type": "single"},
  {"question": "What does 'Hackneyed' mean?", "options": ["Overused, cliched", "Unique and original", "Highly sophisticated", "Difficult to understand"], "answer": "Overused, cliched", "type": "single"},
  {"question": "What does 'Halcyon' mean?", "options": ["Peaceful, calm", "Chaotic and turbulent", "Exciting and thrilling", "Mysterious and eerie"], "answer": "Peaceful, calm", "type": "single"},
  {"question": "What does 'Harangue' mean?", "options": ["A long, intense verbal attack", "A short, friendly greeting", "A humorous anecdote", "A quiet and gentle speech"], "answer": "A long, intense verbal attack", "type": "single"},
  {"question": "What does 'iconoclast' mean?", "options": ["A person who attacks cherished beliefs", "A devoted follower", "A skilled craftsman", "A religious leader"], "answer": "A person who attacks cherished beliefs", "type": "single"},
  {"question": "What does 'idiosyncrasy' mean?", "options": ["A unique trait or habit", "A general rule", "A widely accepted custom", "A philosophical belief"], "answer": "A unique trait or habit", "type": "single"},
  {"question": "What does 'idolatry' mean?", "options": ["Excessive adoration or worship", "Disrespect for traditions", "A scientific theory", "A leadership style"], "answer": "Excessive adoration or worship", "type": "single"},
  {"question": "What does 'idyllic' mean?", "options": ["Peaceful and picturesque", "Chaotic and disorderly", "Harsh and unpleasant", "Dull and boring"], "answer": "Peaceful and picturesque", "type": "single"},
  {"question": "What does 'ignoble' mean?", "options": ["Dishonorable or of low character", "Highly respected", "Exceptionally talented", "Extremely wealthy"], "answer": "Dishonorable or of low character", "type": "single"},
  {"question": "What does 'illiberality' mean?", "options": ["Narrow-mindedness or lack of generosity", "Openness to new ideas", "Extreme kindness", "Political activism"], "answer": "Narrow-mindedness or lack of generosity", "type": "single"},
  {"question": "What does 'imbue' mean?", "options": ["To inspire or permeate with a quality", "To completely erase", "To create from scratch", "To compare different things"], "answer": "To inspire or permeate with a quality", "type": "single"},
  {"question": "What does 'imminent' mean?", "options": ["About to happen", "Completely unexpected", "Unlikely to ever occur", "Happened long ago"], "answer": "About to happen", "type": "single"},
  {"question": "What does 'jargon' mean?", "options": ["Vocabulary specific to a group", "A common language", "A musical instrument", "A style of writing"], "answer": "Vocabulary specific to a group", "type": "single"},
  {"question": "What does 'keen' mean?", "options": ["Sharp or mentally perceptive", "Slow and dull", "Uninterested", "Lacking motivation"], "answer": "Sharp or mentally perceptive", "type": "single"},
  {"question": "What does 'lachrymose' mean?", "options": ["Tearful, mournful", "Extremely joyful", "Highly energetic", "Unconcerned"], "answer": "Tearful, mournful", "type": "single"},
  {"question": "What does 'lackluster' mean?", "options": ["Dull, mediocre", "Shiny and bright", "Highly valuable", "Extremely rare"], "answer": "Dull, mediocre", "type": "single"},
  {"question": "What does 'machination' mean?", "options": ["Crafty schemes or plots", "A sudden inspiration", "A peaceful resolution", "An unexpected accident"], "answer": "Crafty schemes or plots", "type": "single"},
  {"question": "What does 'maelstrom' mean?", "options": ["A violent whirlpool or chaotic situation", "A peaceful gathering", "A scientific breakthrough", "A sudden realization"], "answer": "A violent whirlpool or chaotic situation", "type": "single"},
  {"question": "What does 'magnanimous' mean?", "options": ["High-minded, noble, generous in forgiving", "Selfish and greedy", "Easily angered", "Indifferent and uncaring"], "answer": "High-minded, noble, generous in forgiving", "type": "single"},
  {"question": "What does 'nadir' mean?", "options": ["Lowest point", "Highest peak", "A turning point", "A place of balance"], "answer": "Lowest point", "type": "single"},
  {"question": "What does 'naïve' mean?", "options": ["Simple and unsophisticated", "Highly experienced", "Clever and deceptive", "Extremely knowledgeable"], "answer": "Simple and unsophisticated", "type": "single"},
  {"question": "What does 'oaf' mean?", "options": ["A clumsy or unintelligent person", "A highly skilled individual", "A kind and generous person", "A mysterious figure"], "answer": "A clumsy or unintelligent person", "type": "single"},
  {"question": "What does 'obdurate' mean?", "options": ["Stubborn, refusing to change one's opinion", "Easily influenced", "Indecisive", "Open to new ideas"], "answer": "Stubborn, refusing to change one's opinion", "type": "single"},
  {"question": "What does 'paradox' mean?", "options": ["A statement that seems contradictory but may be true", "A completely false statement", "A widely accepted fact", "An easily understood concept"], "answer": "A statement that seems contradictory but may be true", "type": "single"},
  {"question": "What does 'paragon' mean?", "options": ["A model of excellence or perfection", "A deeply flawed example", "A temporary solution", "An unknown concept"], "answer": "A model of excellence or perfection", "type": "single"},
  {"question": "What does 'pare' mean?", "options": ["To trim or reduce gradually", "To increase rapidly", "To add unnecessary details", "To ignore completely"], "answer": "To trim or reduce gradually", "type": "single"},
  {"question": "What does 'pariah' mean?", "options": ["An outcast", "A leader of a group", "A well-respected individual", "A close friend"], "answer": "An outcast", "type": "single"},
  {"question": "What does 'parley' mean?", "options": ["Discussion or negotiation, especially between enemies", "A physical confrontation", "A silent protest", "A legal agreement"], "answer": "Discussion or negotiation, especially between enemies", "type": "single"},
  {"question": "What does 'parsimonious' mean?", "options": ["Extremely frugal; unwilling to spend money", "Very generous", "Careless with finances", "Indifferent to money"], "answer": "Extremely frugal; unwilling to spend money", "type": "single"},
  {"question": "What does 'partisan' mean?", "options": ["A strong supporter of a cause; biased", "Completely neutral", "Indifferent to politics", "Eager to switch sides"], "answer": "A strong supporter of a cause; biased", "type": "single"},
  {"question": "What does 'quagmire' mean?", "options": ["A difficult, complicated, or hazardous situation; a swampy area", "A peaceful and simple problem", "A completely safe environment", "A clear and straightforward decision"], "answer": "A difficult, complicated, or hazardous situation; a swampy area", "type": "single"},
  {"question": "What does 'rabid' mean?", "options": ["Extremely enthusiastic or fanatical", "Calm and indifferent", "Completely uninterested", "Mildly supportive"], "answer": "Extremely enthusiastic or fanatical", "type": "single"},
  {"question": "What does 'raconteur' mean?", "options": ["A person who tells stories in an amusing and engaging way", "A shy and reserved person", "A highly analytical thinker", "A person who dislikes conversations"], "answer": "A person who tells stories in an amusing and engaging way", "type": "single"},
  {"question": "What does 'rarefied' mean?", "options": ["Lofty, elevated, or exclusive; thin (as in air at high altitudes)", "Common and widely accessible", "Dense and low in quality", "Unimportant or trivial"], "answer": "Lofty, elevated, or exclusive; thin (as in air at high altitudes)", "type": "single"},
  {"question": "What does 'sagacious' mean?", "options": ["Wise, having good judgment and keen perception", "Easily deceived", "Lacking experience", "Unconcerned with details"], "answer": "Wise, having good judgment and keen perception", "type": "single"},
  {"question": "What does 'salubrious' mean?", "options": ["Health-giving, promoting well-being", "Harmful to health", "Completely irrelevant to health", "Causing exhaustion"], "answer": "Health-giving, promoting well-being", "type": "single"},
  {"question": "What does 'sanction' mean?", "options": ["Approval or permission; a penalty for disobeying a rule", "Complete disapproval", "An informal suggestion", "A reward for compliance"], "answer": "Approval or permission; a penalty for disobeying a rule", "type": "single"},
  {"question": "What does 'sanguine' mean?", "options": ["Cheerfully optimistic, confident, or reddish in complexion", "Highly doubtful", "Completely indifferent", "Overly serious and pessimistic"], "answer": "Cheerfully optimistic, confident, or reddish in complexion", "type": "single"},
  {"question": "What does 'sardonic' mean?", "options": ["Grimly mocking or cynical", "Overly sincere", "Highly gullible", "Lacking any sense of humor"], "answer": "Grimly mocking or cynical", "type": "single"},
  {"question": "What does 'satiate' mean?", "options": ["To fully satisfy or fill to excess", "To leave unfulfilled", "To make something worse", "To provide just enough"], "answer": "To fully satisfy or fill to excess", "type": "single"},
  {"question": "What does 'savant' mean?", "options": ["A learned person, scholar, or expert in a field", "Someone with no formal education", "A person who avoids knowledge", "An individual who dislikes reading"], "answer": "A learned person, scholar, or expert in a field", "type": "single"},
  {"question": "What does 'tacit' mean?", "options": ["Understood or implied without being stated", "Clearly explained in detail", "Completely false", "Written as a formal rule"], "answer": "Understood or implied without being stated", "type": "single"},
  {"question": "What does 'taciturn' mean?", "options": ["Reserved, saying little, uncommunicative", "Very talkative and social", "Excited and loud", "Quick to argue"], "answer": "Reserved, saying little, uncommunicative", "type": "single"},
  {"question": "What does 'tangential' mean?", "options": ["Only slightly connected or relevant; going off-topic", "Highly focused and directly related", "Completely irrelevant", "The main point of discussion"], "answer": "Only slightly connected or relevant; going off-topic", "type": "single"},
  {"question": "What does 'ubiquitous' mean?", "options": ["Present or existing everywhere", "Rare and hard to find", "Temporary and fleeting", "Restricted to a specific location"], "answer": "Present or existing everywhere", "type": "single"},
  {"question": "What does 'vacuous' mean?", "options": ["Lacking intelligence or substance; empty", "Highly intelligent and profound", "Filled with meaning", "Incredibly complex"], "answer": "Lacking intelligence or substance; empty", "type": "single"},
  {"question": "What does 'vagary' mean?", "options": ["An unpredictable or erratic action or occurrence", "A highly expected result", "A carefully planned event", "A permanent and stable situation"], "answer": "An unpredictable or erratic action or occurrence", "type": "single"},
  {"question": "What does 'wan' mean?", "options": ["Pale, weak, or lacking vitality", "Strong and full of energy", "Dark and vibrant", "Highly enthusiastic"], "answer": "Pale, weak, or lacking vitality", "type": "single"},
  {"question": "What does 'wane' mean?", "options": ["To decrease in size, strength, or intensity", "To grow larger and stronger", "To remain unchanged", "To shine more brightly"], "answer": "To decrease in size, strength, or intensity", "type": "single"},
  {"question": "What does 'xenophobia' mean?", "options": ["Fear or hatred of foreigners or strangers", "Love and admiration for different cultures", "A fascination with ancient history", "An interest in foreign languages"], "answer": "Fear or hatred of foreigners or strangers", "type": "single"},
  {"question": "What does 'yammer' mean?", "options": ["To complain persistently or talk loudly and endlessly", "To remain silent and reserved", "To express gratitude", "To whisper softly"], "answer": "To complain persistently or talk loudly and endlessly", "type": "single"},
  {"question": "What does 'zealot' mean?", "options": ["A fanatically devoted or uncompromising person", "A completely indifferent person", "Someone open to all perspectives", "A peaceful mediator"], "answer": "A fanatically devoted or uncompromising person", "type": "single"},
      
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [feedback, setFeedback] = useState({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      calculateScore();
      setShowResult(true);
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleOptionSelect = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [currentQuestion]: option,
    }));
    setFeedback((prev) => ({
      ...prev,
      [currentQuestion]: null,
    }));
  };

  const handleCheckAnswer = () => {
    const selectedAnswer = selectedOptions[currentQuestion];
    const correctAnswer = questions[currentQuestion].answer;

    if (!selectedAnswer) {
      setFeedback((prev) => ({
        ...prev,
        [currentQuestion]: "Please select an option before checking!",
      }));
      return;
    }

    setFeedback((prev) => ({
      ...prev,
      [currentQuestion]: selectedAnswer === correctAnswer
        ? "✅ Correct!"
        : `❌ Incorrect! The correct answer is: ${correctAnswer}`,
    }));
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOptions({});
    setFeedback({});
    setScore(0);
    setShowResult(false);
    setShowAnswers(false);
    setTimeLeft(30 * 60);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleJumpToQuestion = (index) => {
    setCurrentQuestion(index);
  };

  const handleSubmit = () => {
    calculateScore();
    setShowResult(true);
  };

  const calculateScore = () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (selectedOptions[index] === q.answer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="app">
      <h1>Vocab set1</h1>
      <p>Time Left: {formatTime(timeLeft)}</p>
      <p>Question {currentQuestion + 1} of {questions.length}</p>

      {showResult ? (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} / {questions.length}</p>
          <button onClick={() => setShowAnswers(true)} className="show-answers-button">Show Answers</button>
          {showAnswers && (
            <div>
              {questions.map((q, index) => (
                <div key={index}>
                  <h3>{q.question}</h3>
                  <p>Correct Answer: {q.answer}</p>
                </div>
              ))}
            </div>
          )}
          <button onClick={handleRestart} className="restart-button">Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${selectedOptions[currentQuestion] === option ? "selected" : ""}`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleCheckAnswer} className="check-answer-button">Check Answer</button>
          {feedback[currentQuestion] && <p className="feedback">{feedback[currentQuestion]}</p>}
          <div className="button-container">
            <button onClick={handlePrevious} disabled={currentQuestion === 0} className="prev-button">Previous</button>
            <button onClick={handleNext} disabled={currentQuestion === questions.length - 1} className="next-button">Next</button>
            {currentQuestion === questions.length - 1 && <button onClick={handleSubmit} className="submit-button">Submit</button>}
          </div>
        </div>
      )}
      
      {!showResult && (
        <div className="question-navigation">
          <h3>Questions:</h3>
          <div className="grid-container">
            {questions.map((_, index) => (
              <button 
                key={index} 
                onClick={() => handleJumpToQuestion(index)} 
                className={index === currentQuestion ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

