import React,{useState,useEffect} from 'react';
import './Board.css';
/*
import {
    randomIntFromInterval,
    reverseLinkedList,
    useInterval,
}   from '../lib/utils.js'



class LinkedListNode {
    constructor(value)  {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinekdList {
    constructor(value) {
        const node = new LinkedListNode(value);
        this.head = node;
        this.tail = node;
    }
}
*/
const Boardsize= 10;
const Board =()=>{
    const [board, setBoard] = useState(createBoard(Boardsize));
    let [snakeCells, setSnakeCells] = useState([44]);
    //const [snake,setSnake] = useState(new SinglyLinekdList(44));
    useEffect(()=>{
        window.addEventListener("keydown", e=>{
            if (e.key === "ArrowUp") {
                if(snakeCells[0]-10 < 1){
                    setSnakeCells([44]);
                    snakeCells=[44];
                }
                else{
                    setSnakeCells([snakeCells[0]-10]);
                    snakeCells=[snakeCells[0]-10];
                    console.log(snakeCells);
                }
            } 
            else if (e.key === "ArrowDown") {
                if(snakeCells[0]+10 > 100){
                    setSnakeCells([44]);
                    snakeCells=[44];
                }
                else{
                    setSnakeCells([snakeCells[0]+10]);
                    snakeCells=[snakeCells[0]+10];
                    console.log("down");
                }
            } 
            else if (e.key === "ArrowRight") {
                if(snakeCells[0]+1 > 100 || snakeCells%10==0){
                    setSnakeCells([44]);
                    snakeCells=[44];
                }
                else{
                    setSnakeCells([snakeCells[0]+1]);
                    snakeCells=[snakeCells[0]+1];
                    console.log("right");
                }
            } 
            else if (e.key === "ArrowLeft") {
                if(snakeCells[0]-1 < 1 || snakeCells==1 || snakeCells==11 || snakeCells==21 
                    || snakeCells==31 || snakeCells==41 || snakeCells==51 || snakeCells==61 || 
                    snakeCells==71 || snakeCells==81 || snakeCells==91){
                    setSnakeCells([44]);
                    snakeCells=[44];
                }
                else{
                    setSnakeCells([snakeCells[0]-1]);
                    snakeCells=[snakeCells[0]-1];
                    console.log("left");
                }
            }
        });
    }, []);
    return (
        <div className="board">
            {board.map((row,rowIdx)=>(
                <div key={rowIdx} className="row">
                    {row.map((cellValue,cellIdx) => {
                        const className = getCellClassName(
                            cellValue,
                            snakeCells,
                        );
                        return <div key={cellIdx} className={className}></div>;
                    })}
                </div>
            ))}
        </div>
    );
};

const getCellClassName = (cellValue,snakeCells,)=>{
    let className='cell';
    if (snakeCells.includes(cellValue)) className = 'cell snake';
    return className;
};

const createBoard = Boardsize => {
    let counter = 1;
    const board = [];
    for(let row = 0; row < Boardsize; row++){
        const currentRow = [];
        for(let col = 0; col < Boardsize; col++){
            currentRow.push(counter++);
        }
        board.push(currentRow);
    }
    return board;
};
export default Board;