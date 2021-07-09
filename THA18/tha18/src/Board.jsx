
const chessStyle = {"display":"flex", "alignItems":"center"};
const boardStyle = {
                    "border":"20px solid black",
                    "display":"flex",
                    "flexDirection":"column",
                    "padding":"1px"
                }
const rowStyle = {
                    "display":"flex",
                    "flexDirection":"row"
                }
const zeroStyle = {
                    "height":"40px",
                    "width":"40px",
                    "backgroundColor":"black"
                }
const oneStyle = {
                    "height":"40px",
                    "width":"40px",
                    "backgroundColor":"white"
                }

const Row = ({item}) => {
    let blockStyle1 = item==-1?zeroStyle:oneStyle;
    let blockStyle2 = item==1?zeroStyle:oneStyle;
    return (
        <div style={rowStyle}>
            <div style={blockStyle1}></div>
            <div style={blockStyle2}></div>
            <div style={blockStyle1}></div>
            <div style={blockStyle2}></div>
            <div style={blockStyle1}></div>
            <div style={blockStyle2}></div>
            <div style={blockStyle1}></div>
            <div style={blockStyle2}></div>
        </div>
    );
};

const Board = () => {
    return (
        <div style={chessStyle}>
        <div style={boardStyle}>
            <Row item="-1"></Row>
            <Row item="1"></Row>
            <Row item="-1"></Row>
            <Row item="1"></Row>
            <Row item="-1"></Row>
            <Row item="1"></Row>
            <Row item="-1"></Row>
            <Row item="1"></Row>
        </div>
        </div>
    );
};
export default Board;