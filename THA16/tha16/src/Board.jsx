
const Row = () => {
    return (
        <div className="row">
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>

        </div>
    );
};

const Board = () => {
    return (
        <div className="chess">
        <div className="board">
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
        </div>
        </div>
    );
};
export default Board;