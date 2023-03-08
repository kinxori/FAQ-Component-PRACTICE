import { useState } from "react";

export default function FAQsComp(){
    
    const faqsData = [
        {
            question: "What is React.js?",
            answer: "React.js is a JavaScript library for building user interfaces."
        },
        {
            question: "How do I install React.js?",
            answer: "You can install React.js using npm or yarn."
        },
        {
            question: "What is JSX?",
            answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files."
        },
        {
            question: "What is JSX?",
            answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files."
        },
        {
            question: "What is JSX?",
            answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files."
        },
        {
            question: "What is JSX?",
            answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files."
        }
    ];
    

    const [showAnswers, setShowAnswers] = useState(Array(faqsData.length).fill(false));

    const handleClick = (index) => {
      const newShowAnswers = Array(faqsData.length).fill(false);
      newShowAnswers[index] = !showAnswers[index];
      setShowAnswers(newShowAnswers);
    };
  
    return (
      <div>
        {faqsData.map((faq, index) => (
          <div key={index}>
            <button onClick={() => handleClick(index)}>{faq.question} style={{}} </button>
            {showAnswers[index] && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    );
}
