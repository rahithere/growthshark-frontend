import React, { useState } from 'react';

function PartnerForm() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [quizResult, setQuizResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const questions = [
        { id: 'name', q: "What’s your Name?", type: 'text' },
        { id: 'email', q: "What’s your Email?", type: 'email' },
        { id: 'age', q: "How long have you been in business?", options: ['Less than 1 year', '1-2 years', '2-5 years', 'More than 5 years'] },
        { id: 'revenue', q: "What’s your monthly recurring revenue?", options: ['Less than $5000', '$5000-10000', 'More than $10,000'] },
        { id: 'team', q: "What’s your in-house team size?", options: ['1', '15', 'More than 15'] },
        { id: 'time', q: "Can you spend at least 30 minutes with us daily?", options: ['yes', 'no'] }
    ];

    const currentQuestion = questions[currentQuestionIndex];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAnswers({ ...answers, [name]: value });
    };

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

    // The corrected function to handle the form submission to the backend
    const handleSubmit = async () => {
        setIsLoading(true);
        const eligibility = checkEligibility(answers);

        try {
            // This is the key change: Use the environment variable to get the full API URL.
            const baseUrl = import.meta.env.VITE_API_URL;

            // for development
            // const baseUrl = "http://localhost:5000"
            const response = await fetch(`${baseUrl}/api/partnersubmit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ answers, eligibility, mode: "attack" }),
            });

            if (!response.ok) {
                // The error from the screenshot is caught here.
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
            handleSubmit();
        }
    };

    const renderQuestionContent = () => {
        if (currentQuestion.type === 'text' || currentQuestion.type === 'email') {
            return (
                <input
                    type={currentQuestion.type}
                    name={currentQuestion.id}
                    placeholder={`Write your ${currentQuestion.id} here...`}
                    className="w-full px-6 py-4 rounded-full bg-[#1e3a47] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#49b9ff] transition text-base mt-5"
                    value={answers[currentQuestion.id] || ''}
                    onChange={handleInputChange}
                />
            );
        } else {
            return (
                <div className="flex flex-col space-y-4 mt-5">
                    {currentQuestion.options.map((option, index) => (
                        <label key={index} className="flex items-center space-x-3 text-lg cursor-pointer">
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

    const renderQuizContent = () => {
        if (isLoading) {
            return <p className="text-xl animate-pulse">Submitting your answers...</p>;
        }

        if (quizResult) {
            if (quizResult.eligible === 'Yes') {
                return (
                    <>
                        <h3 className="text-2xl font-bold">Congratulations, you’re ready for the hunt! 🎉</h3>
                        <a href="https://calendly.com/proriterz101/30min" className="bg-lime-400 shadow-lg shadow-black/50 hover:brightness-110 transition text-black font-semibold px-8 py-3 rounded-full  text-base mt-6 inline-block">
                            Schedule a call Here
                        </a>
                    </>
                );
            } else if (quizResult.eligible === 'No') {
                return (
                    <>
                        <h3 className="text-2xl font-bold">Apologies, you still need to stay stealthy before you can go out for delegation. </h3>
                        <a href="https://calendly.com/proriterz101/30min" className="bg-lime-400 shadow-lg shadow-black/50 hover:brightness-110 transition text-black font-semibold px-8 py-3 rounded-full  text-base mt-6 inline-block ">
                            Schedule a free consultation here
                        </a>
                    </>
                );
            } else {
                return (
                    <h3 className="text-2xl font-bold text-red-500">There was an error submitting your form. Please try again.</h3>
                );
            }
        }

        return (
            <>
                <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">{currentQuestion.q}</h2>
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

    return (
        <div className="max-w-6xl mx-auto relative bg-black text-white px-4 sm:px-8 md:px-16 lg:px-20 overflow-hidden ">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-[450px] h-[450px] bg-[#2ea9ff]/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto py-16">
                <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight">
                    Are You Ready For A <br />
                    <span className="text-[#2ea9ff]">Hunting Partner?</span>
                </h1>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    <span className="text-[#2ea9ff] font-semibold">
                        “Attack isn't about being aggressive; it's about being relentlessly strategic.”
                    </span>{" "}
                    Companies <br /> like that of yours need to be extremely agile and aggressive with their Organic Marketing to <br />
                    be able to overpower the SERP.
                </p>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    But, not everyone is ready to start hunting with us. Find out if you're ready <br /> for the hunt or still in hustle mode:
                </p>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 mt-8 p-6 rounded-2xl shadow-xl max-w-2xl mx-auto  flex flex-col justify-center items-center">
                    {renderQuizContent()}
                </div>
            </div>
        </div>
    );
}

export default PartnerForm;
