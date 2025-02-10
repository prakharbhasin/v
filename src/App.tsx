import { useState } from 'react';
import RetroHeart from './components/RetroHeart';

const ValentinePage = () => {
    const [phase, setPhase] = useState(0);
    const [showShake, setShowShake] = useState(false);
    const [noAttempts, setNoAttempts] = useState(0);

    const handleNo = () => {
        setShowShake(true);
        setNoAttempts((prev) => prev + 1);
        setTimeout(() => setShowShake(false), 500);
    };

    const messages = [
        {
            text: 'hello miss mander 👋',
            buttons: [{ text: 'meowww', action: () => setPhase(1) }],
        },
        {
            text: "this heart's pretty cool right?",
            buttons: [
                { text: 'i guess', action: () => setPhase(2) },
                { text: 'meh', action: () => setPhase(2) },
            ],
        },
        {
            text: 'wanna see what else is cool?',
            buttons: [
                { text: 'kyaaa', action: () => setPhase(3) },
                { text: 'im scared but ok', action: () => setPhase(3) },
            ],
        },
        {
            text: 'being my valentine 😎',
            buttons: [
                { text: '🥹🥹🥹', action: () => setPhase(4) },
                { text: '👎👎👎', action: handleNo },
            ],
        },
    ];

    const noResponses = [
        'wrong answer babe',
        'try that again',
        'nope, one more time',
        "you're really making this difficult",
        'pls im running out of responses',
        'CAN YOU BE MY VALENTINE NOW?',
    ];

    if (phase === 4) {
        return (
            <div className=" bg-blue-900 h-dvh w-dvw flex items-center justify-center p-4">
                <div className="text-center space-y-6">
                    <RetroHeart showShake={false} />
                    <div className="text-2xl h-60 font-bold text-green-400">
                        See you on 14/02 😉
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className={`h-dvh w-dvw flex-1 flex-col transition-colors duration-300 bg-red-100 flex items-center justify-center p-4
              ${phase === 4 ? 'bg-blue-900' : 'bg-red-100'}`}
        >
            {showShake && (
                <div className="text-red-400 animate-bounce">
                    {noResponses[Math.min(noAttempts, noResponses.length - 1)]}
                </div>
            )}
            <RetroHeart
                showShake={showShake}
                key={phase === 4 ? 'lol' : 'no'}
            />
            <div className="size-72 relative overflow-hidden">
                <div
                    className={`w-72 h-72 relative overflow-hidden transition-all duration-500
                  ${phase === 4 ? '-translate-y-full' : 'translate-y-0'} 
                  `}
                >
                    {messages.map((message, i) => (
                        <div
                            style={{
                                transform: `translateY(${(i - phase) * 100}%)`,
                                opacity: i === phase ? 1 : 0,
                                transition: 'transform 0.7s ease-in-out',
                            }}
                            className="space-y-6 absolute inset-0"
                            key={i}
                        >
                            <>
                                <div className="text-2xl font-bold text-gray-700">
                                    {message.text ?? ''}
                                </div>
                                <div className="flex flex-col gap-3 h-60">
                                    {message.buttons.map((button, i) => (
                                        <button
                                            key={i}
                                            onClick={button.action}
                                            className="px-6 py-3 bg-transparent text-pink-700 font-semibold border-pink-700 border-2 rounded-lg"
                                        >
                                            {button.text ?? ''}
                                        </button>
                                    ))}
                                </div>
                            </>
                        </div>
                    ))}
                    <div
                        className={`text-2xl absolute size-72 inset-0 -z-10 transition-all duration-300 delay-700 h-60 font-bold text-green-400
                  ${phase === 4 ? 'translate-y-0' : '-translate-y-full'}
                  `}
                    >
                        See you on 14/02 😉
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValentinePage;
