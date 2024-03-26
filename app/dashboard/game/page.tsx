'use client';

import { useEffect, useState } from 'react';
import { 
    calculateFinalScore, 
    formatTime, 
    generateRandomBoard, 
    getRandomCardFaces, 
    getWinMessage 
} from '../../lib/utils';
import Card from '@/app/ui/components/Card';
import { CardType } from '@/app/lib/definitions';
import Modal from '@/app/ui/components/Modal';
import { UserButton } from '@clerk/nextjs'
import { 
    // heroicons.dev
    ClockIcon,
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
    ChevronDoubleRightIcon,
    SpeakerWaveIcon,
    SpeakerXMarkIcon,
    CheckIcon,
    XMarkIcon,
    ArrowPathIcon,
} from '@heroicons/react/24/outline';
import useSound from 'use-sound';

export default function Page() {
    const colorPairs = ['bg-blue-400', 'bg-rose-400', 'bg-teal-400', 'bg-violet-400', 'bg-yellow-300', 'bg-cyan-300', 'bg-pink-400', 'bg-orange-300']
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
    const alphabet = 'ABCČDEFGHIJKLMNOPQRSŠTUVWXYZŽ'.split('')
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
    const [cardBack, setCardBack] = useState(0)
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [showModal, setShowModal] = useState(false)
    const [turns, setTurns] = useState(0)
    const [matchAnimation, setMatchAnimation] = useState<string | null>(null)
    const [matchedCardIds, setMatchedCardIds] = useState<number[]>([])
    const [startTime, setStartTime] = useState<number | null>(null);
    const [timer, setTimer] = useState<number>(0);
    const [gameScore, setGameScore] = useState<number | null>(null)
    const [isCardAnimating, setIsCardAnimating] = useState(false)
    const [winMessage, setWinMessage] = useState('')
    const [soundOn, setSoundOn] = useState(true)
    // Sounds
    const cardSoundString = '/sounds/tap1.mp3'
    const [cardSound, setCardSound] = useState(cardSoundString)
    const [playWin] = useSound('/sounds/win.mp3')
    const [playMatch] = useSound('/sounds/coin1.mp3')
    const [playSetCards] = useSound('/sounds/jump.wav') //cardFan2.mp3

    // Reset game
    // * reset card positions, flip them back over, set turns to 0, set mathched Ids array to []
    const handleResetGame = () => {
        const newInitialState = getInitialState(gameMode)
        if (soundOn) {
            playSetCards()
        }
        setCards(newInitialState)
        setFlippedCards([])
        setTurns(0)
        setMatchedCardIds([])
        setStartTime(null)
        setTimer(0)
        setGameScore(null)
        setIsCardAnimating(true)
        setTimeout(() => {
            setIsCardAnimating(false)
        }, 200)
        setWinMessage('')
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
            setWinMessage(getWinMessage())
            setGameScore(calculateFinalScore(turns, timer, gameMode))
            setTimeout(() => {
                setShowModal(true)
                if (soundOn) {
                    playWin()
                }
            }, 500)
        }

        // Check if there are exactly 2 flipped cards
        if (flippedCards.length === 2) {
            setCardSound('')
            const [card1Id, card2Id] = flippedCards;
            const card1 = cards.find(card => card.id === card1Id);
            const card2 = cards.find(card => card.id === card2Id);

            // Check if the two flipped cards have the same number
            if (card1 && card2 && card1.num === card2.num) {
                // Matched pair: Keep cards visible, clear flipped cards
                if (soundOn) {
                    playMatch()
                }
                setFlippedCards([]);
                setMatchedCardIds(prevIds => [...prevIds, card1.id, card2.id])
                setMatchAnimation('check');
                setTimeout(() => {
                    setMatchAnimation(null)
                }, 800)
                setCardSound(cardSoundString)
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
                setCardSound(cardSoundString)
                }, 1000); // Delay after a non-match (milliseconds)
            }

            // Increment turns
            setTurns(prevTurns => prevTurns + 1)
        }
    }, [flippedCards, cards, soundOn, playMatch, playWin, playSetCards]);

    useEffect(() => {
        if (startTime && matchedCardIds.length < cards.length) {
          const interval = setInterval(() => {
            const elapsedTime = (Date.now() - startTime) / 1000;
            setTimer(elapsedTime);
          }, 100);
          return () => clearInterval(interval);
        }
      }, [startTime, matchedCardIds]);

    useEffect(() => {
        setCards(getInitialState(gameMode))
        handleResetGame()
    }, [gameMode])

    const handleCardClick = (cardId: number) => {
        // If start time is not set, start it (the first card was clicked, start the timer)
        if (!startTime) {
            setStartTime(Date.now());
        }
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

    const toggleSound = () => {
        setSoundOn(!soundOn)
    }

    return (
        <>
            <div className='flex justify-around md:h-10 mt-4 md:w-[700px] md:mx-auto'>
                <button onClick={handleResetGame} className='py-2 px-4 bg-slate-50 hover:bg-teal-100 hover:text-slate-700 rounded-xl dark-button'><ArrowPathIcon className='h-4 m-1' /></button>
                <button onClick={toggleSound} className='py-2 px-4 bg-slate-50 hover:bg-teal-100 hover:text-slate-700 rounded-xl dark-button'>{soundOn
                        ? <SpeakerWaveIcon className='text-black h-4 m-1 dark-volume' />
                        : <SpeakerXMarkIcon className='text-slate-400 h-4 m-1 dark-volume' />
                    }
                </button>
                <button onClick={cycleGameMode} className='flex py-2 px-4 bg-slate-50 hover:bg-teal-100 hover:text-slate-700 rounded-xl dark-button'>
                    {gameMode === 'numbers' 
                        ? <p className='md:mx-2 mx-0'>1&nbsp;&nbsp;2&nbsp;&nbsp;3</p> 
                        : gameMode === 'letters' 
                            ? <p className='md:mx-2 mx-0'>A&nbsp;&nbsp;B&nbsp;&nbsp;C</p> 
                            : gameMode === 'arrows' 
                                ? <><ArrowRightIcon className='h-4 m-1' /><ArrowLeftIcon className='h-4 m-1' /><ArrowDownRightIcon className='h-4 m-1' /></>
                                : <><LightBulbIcon className='h-4 m-1' /><HeartIcon className='h-4 m-1' /><RocketLaunchIcon className='h-4 m-1' /></>
                    }
                </button>
                <div className='py-2 bg-slate-50 rounded-xl w-[140px] grid grid-cols-3 items-center dark-button'>
                    <div className='span-1 flex items-center'>
                        <div className='flex justify-center pl-2'><ChevronDoubleRightIcon className='h-5' /></div>
                        <div className='pl-1'>{turns}</div> 
                    </div>
                    <div className='span-2 flex items-center'>
                    <div className='flex justify-center pl-3'><ClockIcon className='h-5' /> </div>
                    <div className='flex justify-center pl-1'>{formatTime(timer)}</div>
                    </div>
                </div>
                <div className='mt-1'>
                    <UserButton />
                </div>
            </div>
            <div className='flex container justify-center items-start md:mx-auto mt-8 md:h-full'>    
                <div className='grid grid-cols-4 grid-rows-4 md:gap-5 gap-2 justify-center'>
                    {cards.map(card => (
                    <Card 
                        value={card.value} 
                        visible={card.visible} 
                        backgroundColor={gameMode === 'arrows' ? colorPairs[0] : colorPairs[card.num - 1]} 
                        textColor="text-white" 
                        key={card.id}
                        disabled={matchedCardIds.includes(card.id)}
                        onClick={() => handleCardClick(card.id)}
                        sound={soundOn ? cardSound : ''}
                        back={cardBack}
                        isAnimating={isCardAnimating}
                    />
                    ))}   
                {matchAnimation === 'check' 
                    && <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:ml-20'>
                        <CheckIcon className='h-40 text-green-400 opacity-60'/>
                    </div>
                }
                {matchAnimation === 'cross' 
                    && <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:ml-20'>
                        <XMarkIcon className='h-40 text-red-400 opacity-60'/>
                    </div>
                }   
                </div>
            </div>
            <Modal
                isOpen={showModal}
                message={`
                    ${winMessage}

                    Number of turns: ${turns}
                    Time: ${formatTime(timer)}s
                    Score: ${gameScore}`}
                onClose={() => {
                    setShowModal(false)
                    handleResetGame()
                }}
            />
        </>
    )
}