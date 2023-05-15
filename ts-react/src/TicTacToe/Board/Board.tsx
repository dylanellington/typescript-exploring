import { FC } from 'react';
import { Tile } from "../Tile/Tile";
import { useBoard } from "./useBoard";

const style = {
    display: "inline-grid",
    gridTemplateRows: "100px 100px 100px",
    gridTemplateColumns: "100px 100px 100px",
    gridGap: "1px",
    border: "1px white",
    borderRadius: "5px",
    borderStyle: "solid",
};

interface BoardProps {
    onStatusChange: (e: string) => void;
    style?: any
}

const Board: FC<BoardProps> = (props: BoardProps) => {
    let {tiles, handleTileClick} = useBoard(props.onStatusChange);
  
    return (
      <div style={{...style, ...props.style}}>
        {tiles.map((_, index) => (
          <Tile
            key={index}
            value={tiles[index]}
            onClick={handleTileClick.bind(this, index)}
          />
        ))}
      </div>
    );
  }

export { Board };