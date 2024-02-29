'use client';

import { useEffect, useState } from 'react';
import { generateRandomBoard } from '../../lib/utils';
import { Card } from '../../ui/card';
import Modal from '@/app/ui/modal';

export default function Page() {
    const colorPairs = ['bg-blue-400', 'bg-red-400', 'bg-green-300', 'bg-violet-400', 'bg-gray-600', 'bg-gray-400', 'bg-pink-400', 'bg-orange-300']
    const hoverColorPairs = ['hover:bg-blue-300', 'hover:bg-red-300', 'hover:bg-green-200', 'hover:bg-violet-300', 'hover:bg-gray-500', 'hover:bg-gray-300', 'hover:bg-pink-300', 'hover:bg-orange-200']
    
    const getInitialState = () => {
        // Get random board, make initial board state object array
        const board = generateRandomBoard()
        const initialState = [
        { id: 1, num: board[0], visible: false},
        { id: 2, num: board[1], visible: false},
        { id: 3, num: board[2], visible: false},
        { id: 4, num: board[3], visible: false},
        { id: 5, num: board[4], visible: false},
        { id: 6, num: board[5], visible: false},
        { id: 7, num: board[6], visible: false},
        { id: 8, num: board[7], visible: false},
        { id: 9, num: board[8], visible: false},
        { id: 10, num: board[9], visible: false},
        { id: 11, num: board[10], visible: false},
        { id: 12, num: board[11], visible: false},
        { id: 13, num: board[12], visible: false},
        { id: 14, num: board[13], visible: false},
        { id: 15, num: board[14], visible: false},
        { id: 16, num: board[15], visible: false},
        ]
        return initialState
    }
    
    // States
    const [cards, setCards] = useState(getInitialState())
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [showModal, setShowModal] = useState(false)
    const [turns, setTurns] = useState(0)

    // Reset
    const handleResetGame = () => {
        const newInitialState = getInitialState()
        setCards(newInitialState)
        setFlippedCards([])
        setTurns(0)
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
            } else {
                // Unmatched pair: Flip cards back to non-visible after a delay
                setTimeout(() => {
                setCards(prevCards => (
                    prevCards.map(card => ({
                    ...card,
                    visible: flippedCards.includes(card.id) ? false : card.visible
                    }))
                ));
                setFlippedCards([]);
                }, 1000); // Delay after a non-match (milliseconds)
            }

            // Increment turns
            setTurns(prevTurns => prevTurns + 1)
        }
    }, [flippedCards, cards]);

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
            <button onClick={handleResetGame} className='absolute top-5 left-1/4 py-2 px-4 bg-slate-50 hover:bg-slate-100 rounded-xl'>Reset</button>
            <p className='absolute top-5 right-1/4 py-2 px-4 bg-slate-50 rounded-xl'>Turns: {turns}</p>
            <div className='flex justify-center items-center h-full'>
                <div className='grid grid-cols-4 gap-10'>
                    <>
                        {cards.map(card => (
                        <Card 
                            value={card.num} 
                            visible={card.visible} 
                            backgroundColor={colorPairs[card.num - 1]} 
                            textColor="text-white" 
                            hoverColor={hoverColorPairs[card.num - 1]}
                            key={card.id}
                            onClick={() => handleCardClick(card.id)}
                        />
                        ))}
                    </>
                </div>
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