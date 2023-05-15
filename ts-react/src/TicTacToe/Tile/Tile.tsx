import { FC, MouseEventHandler } from 'react';

const style = {
  border: "1px",
  borderRadius: "5px",
  borderStyle: "solid",
  backgroundColor: "black",
  padding: "1em",
  color: "#ffffff",
  fontSize: "xx-large"
};

interface TileProps {
    value: string;
    onClick: MouseEventHandler;
    style?: any
}

const Tile: FC<TileProps> = (props: TileProps) => {
  return (
    <button style={{...style, ...props.style}} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export { Tile };
