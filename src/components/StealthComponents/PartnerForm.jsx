import React, { useState } from 'react';

function PartnerForm() {
    // State to manage the quiz flow and form data
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [quizResult, setQuizResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Array of all quiz questions and their options
    const questions = [
        { id: 'name', q: "What’s your Name?", type: 'text' },
        { id: 'email', q: "What’s your Email?", type: 'email' },
        { id: 'age', q: "How long have you been in business?", options: ['Less than 1 year', '1-2 years', '2-5 years', 'More than 5 years'] },
        { id: 'revenue', q: "What’s your monthly recurring revenue?", options: ['Less than $5000', '$5000-10000', 'More than $10,000'] },
        { id: 'team', q: "What’s your in-house team size?", options: ['1', '15', 'More than 15'] },
        { id: 'time', q: "Can you spend at least 30 minutes with us daily?", options: ['yes', 'no'] }
    ];

    const currentQuestion = questions[currentQuestionIndex];

    // Function to update the answers state as the user types or selects
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAnswers({ ...answers, [name]: value });
    };

    // Logic to determine if a user is eligible based on their answers
    const checkEligibility = (responses) => {
        const { age, revenue, team, time } = responses;

        if (
            age !== 'Less than 1 year' &&
            revenue !== 'Less than $5000' &&
            team !== 'More than 15' &&
            time === 'yes'
        ) {
            return 'Yes';
        }

        return 'No';
    };

    // Async function to handle form submission to the backend API
    const handleSubmit = async () => {
        setIsLoading(true);
        const eligibility = checkEligibility(answers);

        try {
            const baseUrl = import.meta.env.VITE_API_URL

            // for development
            // const baseUrl = "http://localhost:5000";

            const response = await fetch(`${baseUrl}/api/partnersubmit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ answers, eligibility, mode: "stealth" }),
            });

            if (!response.ok) {
                throw new Error('Failed to send form data.');
            }

            const data = await response.json();
            console.log(data.message);

            setQuizResult({ eligible: eligibility });

        } catch (error) {
            console.error('Submission error:', error);
            setQuizResult({ eligible: 'Error' });
        } finally {
            setIsLoading(false);
        }
    };


    // Handles the transition to the next question or submits the form
    const handleNext = () => {
        const currentAnswer = answers[currentQuestion.id];
        if (!currentAnswer) {
            console.error("Please answer the question");
            return;
        }

        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < questions.length) {
            setCurrentQuestionIndex(nextIndex);
        } else {
            // If there are no more questions, submit the form
            handleSubmit();
        }
    };

    // Renders the input or radio button options for the current question
    const renderQuestionContent = () => {
        if (currentQuestion.type === 'text' || currentQuestion.type === 'email') {
            return (
                <input
                    type={currentQuestion.type}
                    name={currentQuestion.id}
                    placeholder={`Write your ${currentQuestion.id} here...`}
                    className="w-full px-6 py-4 rounded-full bg-[#1e3a47] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#49b9ff] transition  text-base mt-5"
                    value={answers[currentQuestion.id] || ''}
                    onChange={handleInputChange}
                />
            );
        } else {
            return (
                <div className="flex flex-col space-y-4  mt-5 ">
                    {currentQuestion.options.map((option, index) => (
                        <label
                            key={index}
                            className="flex items-center space-x-3 text-lg cursor-pointer"
                        >
                            <input
                                type="radio"
                                name={currentQuestion.id}
                                value={option}
                                checked={answers[currentQuestion.id] === option}
                                onChange={handleInputChange}
                                className="form-radio h-5 w-5 text-[#49b9ff] bg-transparent border-gray-500 checked:bg-[#49b9ff] focus:ring-[#49b9ff]"
                            />
                            <span className="text-white">{option}</span>
                        </label>
                    ))}
                </div>
            );
        }
    };


    // Renders the appropriate content based on the quiz state (loading, result, or questions)
    const renderQuizContent = () => {
        if (isLoading) {
            return <p className="text-xl animate-pulse">Submitting your answers...</p>;
        }

        if (quizResult) {
            if (quizResult.eligible === 'Yes') {
                return (
                    <>
                        <h3 className="text-xl sm:text-2xl font-bold">Congratulations, you’re ready for the hunt! 🎉</h3>
                        <a href="https://calendly.com/proriterz101/30min" className="bg-lime-400 shadow-lg shadow-black/50 hover:brightness-110 transition text-black font-semibold px-8 py-3 rounded-full  text-base mt-6 inline-block">
                            Schedule a call Here
                        </a>
                    </>
                );
            } else if (quizResult.eligible === 'No') {
                return (
                    <>
                        <h3 className="text-xl sm:text-2xl font-bold">Apologies, you still need to stay stealthy before you can go out for delegation.</h3>
                        <a href="https://calendly.com/proriterz101/30min" className="bg-lime-400 shadow-lg shadow-black/50 hover:brightness-110 transition text-black font-semibold px-8 py-3 rounded-full  text-base mt-6 inline-block">
                            Schedule a free consultation here
                        </a>
                    </>
                );
            } else {
                return (
                    <h3 className="text-xl sm:text-2xl font-bold text-red-500">There was an error submitting your form. Please try again.</h3>
                );
            }
        }

        // Default state: render the current question
        return (
            <>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold">{currentQuestion.q}</h2>

                {renderQuestionContent()}

                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleNext}
                        className="bg-lime-400  shadow-lg shadow-black/50 hover:brightness-110 transition text-black font-semibold px-8 py-3 rounded-full  text-base cursor-pointer "
                    >
                        Next
                    </button>
                </div>
            </>
        );
    };

    // Main component JSX
    return (
        <div>
            <div className=" max-w-6xl mx-auto flex items-center justify-center text-white px-6 sm:px-8 md:px-16 pb-16 pt-6">
                <div className="text-center space-y-6 w-full max-w-4xl max-auto">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                        Are You Ready For A <br />
                        <span className="text-[#49b9ff]">Delegation{" "}</span>
                        Partner?
                    </h1>

                    <p className="text-sm sm:text-base text-gray-300 px-2 sm:px-4">
                        <span className="text-[#49b9ff] font-semibold">
                            “Delegation isn't just smart, it's vital. Top executives aren't buried in admin tasks—they're free <br className="hidden sm:block" /> to focus on growth.”,
                        </span>
                        not everyone is at the right stage to go out on 'Hunt' while delegating <br className="hidden sm:block" /> their tasks. Find it out yourself whether you're in for a hunt or a hustle…
                    </p>

                    <div className="backdrop-blur-md bg-[#141f3a]/60 transition-transform duration-300 border border-white/10 bg-opacity-80 rmt-8 p-6 rounded-2xl shadow-xl max-w-2xl mx-auto  flex flex-col justify-center items-center">
                        {/* The interactive quiz content is rendered here */}
                        {renderQuizContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PartnerForm;
