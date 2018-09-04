import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        return (
            <button
                className="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}    
        />;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initState;
        this.onClick = this.handleClick;
    }

    get initState() {
        return {
            history: [
                Array(9).fill(null),
            ],
            players: ['X', 'O'],
            playerIndex: 0,
        };
    }

    get back() {
        return this.state.history[this.state.history.length - 1];
    }

    get prevMove() {
        return this.state.players[(this.state.playerIndex + 1) % 2];
    }

    get nextMove() {
        return this.state.players[this.state.playerIndex];
    }

    handleClick(i) {
        const squares = this.back;
        if (!squares[i]) {
            squares[i] = this.nextMove;
            this.setState({
                squares,
                playerIndex: (this.state.playerIndex + 1) % 2,
            })
        }
    }

    winner() {
        const board = this.back;
        const conditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let c of conditions) {
            if (board[c[0]] === board[c[1]] && board[c[0]] === board[c[2]]) return board[c[0]];
        }

        return false;
    }

    reset() {
        console.log(this.initState, this.handleClick)
        this.setState(this.initState);
        this.onClick = this.handleClick;
    }

    render() {
        let status = `Next player: ${this.nextMove}`;
        const result = this.winner();

        if (result) {
            status = `Winner: ${this.prevMove}`;
            this.onClick = () => {};
        }
        
        return (
            <div className="game">
                <div className="game-board">
                    <div className="status">{status}</div>
                    <Board
                        squares={this.back}
                        onClick={(i) => this.onClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
                <button className="reset" onClick={() => this.reset()}></button>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
