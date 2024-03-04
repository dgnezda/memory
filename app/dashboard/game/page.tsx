'use client';

import { useEffect, useState } from 'react';
import { generateRandomBoard, getRandomCardFaces } from '../../lib/utils';
import { Card } from '../../ui/card';
import { CardType } from '@/app/lib/definitions';
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
    BeakerIcon,
    BellIcon,
    BoltIcon,
    BugAntIcon,
    GiftIcon,
    SparklesIcon,
    StarIcon,
    TruckIcon,
    ArrowDownIcon,
    ArrowDownLeftIcon,
    ArrowLeftIcon,
    ArrowUpLeftIcon,
    ArrowUpIcon,
    ArrowUpRightIcon,
    ArrowRightIcon,
    ArrowDownRightIcon,
    ArrowsPointingInIcon,
    ArrowsPointingOutIcon,
    ArrowsRightLeftIcon,
    ArrowsUpDownIcon,
    ArrowUturnDownIcon,
    ArrowUturnLeftIcon,
    ArrowUturnRightIcon,
    ArrowUturnUpIcon,
    CheckIcon,
    XMarkIcon,
    ArrowPathIcon,
} from '@heroicons/react/24/outline';

export default function Page() {
    const colorPairs = ['bg-blue-400', 'bg-red-400', 'bg-green-300', 'bg-violet-400', 'bg-gray-600', 'bg-gray-400', 'bg-pink-400', 'bg-orange-300']
    const hoverColorPairs = ['hover:bg-blue-300', 'hover:bg-red-300', 'hover:bg-green-200', 'hover:bg-violet-300', 'hover:bg-gray-500', 'hover:bg-gray-300', 'hover:bg-pink-300', 'hover:bg-orange-200']
    const iconStyle = 'md:h-28 h-12 self-center'
    const symbols = [
        <MoonIcon key={Date.now()} className={iconStyle} />, 
        <MusicalNoteIcon key={Date.now()} className={iconStyle} />, 
        <HomeIcon key={Date.now()} className={iconStyle} />, 
        <HeartIcon key={Date.now()} className={iconStyle} />, 
        <LightBulbIcon key={Date.now()} className={iconStyle} />, 
        <KeyIcon key={Date.now()} className={iconStyle} />, 
        <RocketLaunchIcon key={Date.now()} className={iconStyle} />, 
        <ScissorsIcon key={Date.now()} className={iconStyle} />,
        <BeakerIcon key={Date.now()} className={iconStyle} />,
        <BellIcon key={Date.now()} className={iconStyle} />,
        <BoltIcon key={Date.now()} className={iconStyle} />,
        <BugAntIcon key={Date.now()} className={iconStyle} />,
        <GiftIcon key={Date.now()} className={iconStyle} />,
        <SparklesIcon key={Date.now()} className={iconStyle} />,
        <StarIcon key={Date.now()} className={iconStyle} />,
        <TruckIcon key={Date.now()} className={iconStyle} />,
    ]
    const arrows = [
        <ArrowDownIcon key={Date.now()} className={iconStyle} />,
        <ArrowDownLeftIcon key={Date.now()} className={iconStyle} />,
        <ArrowLeftIcon key={Date.now()} className={iconStyle} />,
        <ArrowUpLeftIcon key={Date.now()} className={iconStyle} />,
        <ArrowUpIcon key={Date.now()} className={iconStyle} />,
        <ArrowUpRightIcon key={Date.now()} className={iconStyle} />,
        <ArrowRightIcon key={Date.now()} className={iconStyle} />,
        <ArrowDownRightIcon key={Date.now()} className={iconStyle} />,
        <ArrowsPointingInIcon key={Date.now()} className={iconStyle} />,
        <ArrowsPointingOutIcon key={Date.now()} className={iconStyle} />,
        <ArrowsRightLeftIcon key={Date.now()} className={iconStyle} />,
        <ArrowsUpDownIcon key={Date.now()} className={iconStyle} />,
        <ArrowUturnDownIcon key={Date.now()} className={iconStyle} />,
        <ArrowUturnLeftIcon key={Date.now()} className={iconStyle} />,
        <ArrowUturnRightIcon key={Date.now()} className={iconStyle} />,
        <ArrowUturnUpIcon key={Date.now()} className={iconStyle} />,
    ]
    const alphabet = 'ABCDEFGHIJKLMNOPQERSTUVWXYZ'.split('')
    const mathNums = '0123456789π'.split('')
    
    const getInitialState = (gameMode: string) => {
        // Get random board, make initial board state object array
        const board = generateRandomBoard()
        const boardArray: any[] = []

        if (gameMode === 'arrows') {
            const arrowFaces = getRandomCardFaces(arrows, 8)
            board.map(num => (
                boardArray.push(arrowFaces[num - 1])
            ))
        } else if (gameMode === 'symbols') {
            const symbolFaces = getRandomCardFaces(symbols, 8)
            board.map(num => (
                boardArray.push(symbolFaces[num - 1])
            ))
        } else if (gameMode === 'letters') {
            const letters = getRandomCardFaces(alphabet, 8)
            board.map(num => (
                boardArray.push(letters[num - 1])
            ))
        } else {
            const nums = getRandomCardFaces(mathNums, 8)
            board.map(num => (
                boardArray.push(nums[num - 1])
            ))
        }

        const initialState: CardType[] = []
        boardArray.map((val, idx) => (
            initialState.push({ id: (idx + 1), num: board[idx], value: val, visible: false })
        ))

        return initialState
    }
    
    // States
    const [gameMode, setGameMode] = useState('numbers')
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
    }, [])

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