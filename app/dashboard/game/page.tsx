import { Metadata } from 'next';
import { generateRandomBoard } from '../../lib/utils';
import { Card } from '../../ui/cards';

export const metadata: Metadata = {
  title: 'Game'
}

export default function Page() {
    const board = generateRandomBoard()

    const colorPairs = ['bg-blue-400', 'bg-red-400', 'bg-green-300', 'bg-violet-400', 'bg-gray-600', 'bg-gray-400', 'bg-pink-400', 'bg-orange-300']
    const hoverColorPairs = ['hover:bg-blue-300', 'hover:bg-red-300', 'hover:bg-green-200', 'hover:bg-violet-300', 'hover:bg-gray-500', 'hover:bg-gray-300', 'hover:bg-pink-300', 'hover:bg-orange-200']

    return (
        <div className='flex justify-center items-center h-full'>
            <div className='grid grid-cols-4 gap-10'>
            {board.map(row =>
                (
                <>
                    <div className=''>
                        {row.map(num => (
                        <Card 
                            value={num} 
                            visibility={true} 
                            backgroundColor={colorPairs[num - 1]} 
                            textColor="text-white" 
                            hoverColor={hoverColorPairs[num - 1]}
                        />
                        ))}
                    </div>
                </>
                )
            )}
            </div>
        </div>
    )
}