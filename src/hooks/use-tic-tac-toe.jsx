import { useState } from 'react'

const intitialBoard = () => Array(9).fill(null);

const useTicTacToe = () =>{
    const [board, setBoard] = useState(intitialBoard())
    const [isXNext, setIsXNext]=  useState(true);

    const WINNING_PATTERN = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
    ];
    
    const calculateWinner = (currentBoard) =>{
        for(let i = 0;i < WINNING_PATTERN.length;i++){
            const [one,two,three] = WINNING_PATTERN[i];
            if(currentBoard[one] && currentBoard[one] === currentBoard[two] && currentBoard[one] === currentBoard[three]){
                return currentBoard[one];
            }
        }
        return null;
    }
    const handleClick = (index) =>{
        const winner = calculateWinner(board);
        if(winner || board[index]) return;

        const newBoard = [...board];
        newBoard[index] = isXNext? "X":"O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
    }
    const getStatusMessage = () =>{
        const winner = calculateWinner(board);
        if(winner){
            return `Player ${winner} wins!`; 
        }
        if(!board.includes(null)){
            return `It's a draw!`;
        }
        return `Player ${isXNext ? "X": "O"} turn`;
    }
    const resetGame = () =>{
        setBoard(intitialBoard());
        setIsXNext(true);
    }
    return {board, handleClick, calculateWinner, getStatusMessage,resetGame};
}

export default useTicTacToe;    