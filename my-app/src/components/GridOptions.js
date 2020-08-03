import React from 'react';
import styled from 'styled-components';
import { generateEmptyMatrix } from '../utils/helpers.js';

const GridLayout = styled.div`
    padding: 20px 0;
    margin: 0 auto;
    width: 100%;
    text-align: center;

`;
const Button = styled.button`
    width: 150px;
    height: 25px;
    margin: 5px;
    border-radius: 10px;
    font: 150%;

`;

const GridOptions = (props) => {
    const {  setAnimating, setGenCount, setRefreshRate,
             setGridSize, setMatrix, setCellColor } = props;

    const colors = ["Crimson", "ForestGreen", "DarkOrange", "DarkViolet", "black"]

    const gridResize = (rows, cols) => {
        setGridSize({
            rows: rows,
            cols: cols
        })
        setMatrix(generateEmptyMatrix(rows, cols))
        setGenCount(0);
        setAnimating(false)
    };

    return (
        <GridLayout>
            <div>
                <h3>Cell Color:</h3>
                <div>
                    {colors.map(color => {
                        return <Button
                        style={{backgroundColor: color, color: "white"}}
                        onClick={() => {
                            setCellColor(color)
                        }}>
                            {color}
                        </Button>
                    })}
                </div>
            </div>
            <div>
                <h3>Grid Size:</h3>
                <div>
                    <Button onClick={() => {
                        gridResize(25, 25);
                    }}>
                        Small(25x25)
                    </Button>

                    <Button onClick={() => {
                        gridResize(50, 50);
                    }}>
                        Default(50x50)
                    </Button>

                    <Button onClick={() => {
                        gridResize(60, 60);
                    }}>
                        large(60x60)
                    </Button>
                </div>
            </div>
            <div>
                <h3>Generation Speed:</h3>
                <Button onClick={() => {
                    setRefreshRate(200)
                }}>
                    5 FPS
                </Button>

                <Button onClick={() => {
                    setRefreshRate(100)
                }}>
                    10 FPS
                </Button>

                <Button onClick={() => {
                    setRefreshRate(50)
                }}>
                    20 FPS
                </Button>
            </div>
        </GridLayout>
    )
};

export default GridOptions;