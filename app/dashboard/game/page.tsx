'use client';

import { useEffect, useState } from 'react';
import { generateRandomBoard } from '../../lib/utils';
import { Card } from '../../ui/card';
import Modal from '@/app/ui/modal';
import { 
    MoonIcon, 
    MusicalNoteIcon, 
    HomeIcon, 
    HeartIcon, 
    LightBulbIcon, 
    KeyIcon, 
    RocketLaunchIcon, 
    ScissorsIcon,

    ArrowDownIcon,
    ArrowDownLeftIcon,
    ArrowLeftIcon,
    ArrowUpLeftIcon,
    ArrowUpIcon,
    ArrowUpRightIcon,
    ArrowRightIcon,
    ArrowDownRightIcon,

    CheckIcon,
    XMarkIcon,
    ArrowPathIcon,
} from '@heroicons/react/24/outline';

export default function Page() {
    const colorPairs = ['bg-blue-400', 'bg-red-400', 'bg-green-300', 'bg-violet-400', 'bg-gray-600', 'bg-gray-400', 'bg-pink-400', 'bg-orange-300']
    const hoverColorPairs = ['hover:bg-blue-300', 'hover:bg-red-300', 'hover:bg-green-200', 'hover:bg-violet-300', 'hover:bg-gray-500', 'hover:bg-gray-300', 'hover:bg-pink-300', 'hover:bg-orange-200']
    const symbols = [
        <MoonIcon className='md:h-28 h-12 self-center' />, 
        <MusicalNoteIcon className='md:h-28 h-12 self-center' />, 
        <HomeIcon className='md:h-28 h-12 self-center' />, 
        <HeartIcon className='md:h-28 h-12 self-center' />, 
        <LightBulbIcon className='md:h-28 h-12 self-center' />, 
        <KeyIcon className='md:h-28 h-12 self-center' />, 
        <RocketLaunchIcon className='md:h-28 h-12 self-center' />, 
        <ScissorsIcon className='md:h-28 h-12 self-center' />,
    ]
    const arrows = [
        <ArrowDownIcon className='md:h-28 h-12 self-center' />,
        <ArrowDownLeftIcon className='md:h-28 h-12 self-center' />,
        <ArrowLeftIcon className='md:h-28 h-12 self-center' />,
        <ArrowUpLeftIcon className='md:h-28 h-12 self-center' />,
        <ArrowUpIcon className='md:h-28 h-12 self-center' />,
        <ArrowUpRightIcon className='md:h-28 h-12 self-center' />,
        <ArrowRightIcon className='md:h-28 h-12 self-center' />,
        <ArrowDownRightIcon className='md:h-28 h-12 self-center' />,
    ]
    const letters = ['A', 'M', 'D', 'J', 'E', 'Y', 'P', 'Z']

    const getInitialState = (gameMode: string) => {
        // Get random board, make initial board state object array
        const board = generateRandomBoard()
        const boardArray: any[] = []
        if (gameMode === 'arrows') {
            board.map(num => (
                boardArray.push(arrows[num - 1])
            ))
        } else if (gameMode === 'symbols') {
            board.map(num => (
                boardArray.push(symbols[num - 1])
            ))
        } else if (gameMode === 'letters') {
            board.map(num => (
                boardArray.push(letters[num - 1])
            ))
        } else {
            board.map(num => (
                boardArray.push(num)
            ))
        }

        const initialState = [
        { id: 1, num: board[0], value: boardArray[0], visible: false},
        { id: 2, num: board[1], value: boardArray[1], visible: false},
        { id: 3, num: board[2], value: boardArray[2], visible: false},
        { id: 4, num: board[3], value: boardArray[3], visible: false},
        { id: 5, num: board[4], value: boardArray[4], visible: false},
        { id: 6, num: board[5], value: boardArray[5], visible: false},
        { id: 7, num: board[6], value: boardArray[6], visible: false},
        { id: 8, num: board[7], value: boardArray[7], visible: false},
        { id: 9, num: board[8], value: boardArray[8], visible: false},
        { id: 10, num: board[9], value: boardArray[9], visible: false},
        { id: 11, num: board[10], value: boardArray[10], visible: false},
        { id: 12, num: board[11], value: boardArray[11], visible: false},
        { id: 13, num: board[12], value: boardArray[12], visible: false},
        { id: 14, num: board[13], value: boardArray[13], visible: false},
        { id: 15, num: board[14], value: boardArray[14], visible: false},
        { id: 16, num: board[15], value: boardArray[15], visible: false},
        ]
        return initialState
    }
    
    // States
    const [gameMode, setGameMode] = useState('numbers') //<'numbers' | 'arrows' | 'symbols'>
    const [cards, setCards] = useState(getInitialState(gameMode))
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [showModal, setShowModal] = useState(false)
    const [turns, setTurns] = useState(0)
    const [matchAnimation, setMatchAnimation] = useState<string | null>(null)
    const [matchedCardIds, setMatchedCardIds] = useState<number[]>([])

    // Reset game
    // * reset card positions, flip them back over, set turns to 0, set mathched Ids array to []
    const handleResetGame = () => {
        const newInitialState = getInitialState(gameMode)
        setCards(newInitialState)
        setFlippedCards([])
        setTurns(0)
        setMatchedCardIds([])
    }

    // Cycle game mode
    const cycleGameMode = () => {
        setGameMode(prevMode => {
            const modes = ['numbers', 'letters', 'symbols', 'arrows']
            const currentIndex = modes.indexOf(prevMode)
            const nextIndex = (currentIndex + 1) % modes.length
            return modes[nextIndex]
        })
    }

    // useEffect function for handling card-flipping and keeping track of turns
    useEffect(() => {
        if (cards.every(card => card.visible)) {
            // All cards are flipped
            // Show pop-up or modal
            setTimeout(() => {
                setShowModal(true)
            }, 500)
        }

        // Check if there are exactly 2 flipped cards
        if (flippedCards.length === 2) {
            const [card1Id, card2Id] = flippedCards;
            const card1 = cards.find(card => card.id === card1Id);
            const card2 = cards.find(card => card.id === card2Id);
    
            // Check if the two flipped cards have the same number
            if (card1 && card2 && card1.num === card2.num) {
                // Matched pair: Keep cards visible, clear flipped cards
                setFlippedCards([]);
                setMatchedCardIds(prevIds => [...prevIds, card1.id, card2.id])
                setMatchAnimation('check');
                setTimeout(() => {
                    setMatchAnimation(null)
                }, 800)
            } else {
                // Unmatched pair: Flip cards back to non-visible after a delay
                setMatchAnimation('cross');
                setTimeout(() => {
                    setCards(prevCards => (
                        prevCards.map(card => ({
                        ...card,
                        visible: flippedCards.includes(card.id) ? false : card.visible
                    }))
                ));
                setFlippedCards([]);
                setMatchAnimation(null)
                }, 1000); // Delay after a non-match (milliseconds)
                
            }
            // Increment turns
            setTurns(prevTurns => prevTurns + 1)
        }
    }, [flippedCards, cards]);

    useEffect(() => {
        setCards(getInitialState(gameMode))
        handleResetGame()
    }, [gameMode])

    const handleCardClick = (cardId: number) => {
        // Check if the clicked card is already flipped
        if (flippedCards.includes(cardId) || flippedCards.length === 2) {
            return; // Ignore click if the card is already flipped
        }
    
        // If there are already 2 flipped cards, do nothing
        if (flippedCards.length === 2 || flippedCards.length > 1 && cards.find(card => card.visible)) {
            return;
        }
    
        // Toggle the visibility of the clicked card
        setCards(prevCards => {
            return prevCards.map(card => {
                if (card.id === cardId) {
                    return { ...card, visible: !card.visible };
                } else {
                    return card;
                }
            });
        });
    
        // Add the clicked card to the list of flipped cards
        setFlippedCards(prevFlippedCards => [...prevFlippedCards, cardId]);
      };

    return (
        <>
            <button onClick={handleResetGame} className='absolute md:top-5 top-44 left-1/4 py-2 px-4 bg-slate-50 hover:animate-pulse rounded-xl'><ArrowPathIcon className='h-4 m-1' /></button>
            <button onClick={cycleGameMode} className='flex absolute md:top-5 top-44 md:left-2/4 right-auto py-2 px-4 bg-slate-50 hover:animate-pulse rounded-xl'>
                {gameMode === 'numbers' 
                    ? <p className='mx-3'>1&nbsp;&nbsp;2&nbsp;&nbsp;3</p> 
                    : gameMode === 'letters' 
                        ? <p className='mx-3'>A&nbsp;&nbsp;B&nbsp;&nbsp;C</p> 
                        : gameMode === 'arrows' 
                            ? <><ArrowRightIcon className='h-4 m-1' /><ArrowLeftIcon className='h-4 m-1' /><ArrowDownRightIcon className='h-4 m-1' /></>
                            : <><LightBulbIcon className='h-4 m-1' /><HeartIcon className='h-4 m-1' /><RocketLaunchIcon className='h-4 m-1' /></>
                }
            </button>
            <p className='absolute md:top-5 top-44 right-1/4 py-2 px-4 bg-slate-50 rounded-xl'>Turns: {turns}</p>
            <div className='flex justify-center items-center md:h-full'>
                <div className='grid grid-cols-4 md:gap-10 gap-5'>
                    <>
                        {cards.map(card => (
                        <Card 
                            value={card.value} 
                            visible={card.visible} 
                            backgroundColor={gameMode === 'numbers' || 'letters' || 'symbols' ? colorPairs[card.num - 1] : colorPairs[0]} 
                            textColor="text-white" 
                            hoverColor={gameMode === 'numbers' || 'letters' || 'symbols' ? hoverColorPairs[card.num - 1] : hoverColorPairs[0]}
                            key={card.id}
                            disabled={matchedCardIds.includes(card.id)}
                            onClick={() => handleCardClick(card.id)}
                        />
                        ))}
                    </>
                </div>
                {matchAnimation === 'check' && <CheckIcon className='h-40 text-green-400 opacity-60 absolute top-50 left-auto'/>}
                {matchAnimation === 'cross' && <XMarkIcon className='h-40 text-red-400 opacity-60 absolute top-50 left-auto'/>}
            </div>

            <Modal
                isOpen={showModal}
                message={`Good job! You found all pairs in  ${turns} turns! Do you want to play again?`}
                onClose={() => {
                    setShowModal(false)
                    handleResetGame()
                }}
            />
        </>
    )
}