import React from "react";

interface Props {
    direction: string;
    children?: React.ReactNode;
}
const ArrowButton: React.FC<Props> = ({
    direction,
    children
}) => {
    return(
        <button onMouseDown={() => {
            var event = new KeyboardEvent('keydown', {
                key: direction
            });
            document.dispatchEvent(event);
        }} 
        onClick={() => {
            var event = new KeyboardEvent('keyup', {
                key: direction
            });
            document.dispatchEvent(event);
            }
        }
        onTouchStart={() => {
            var event = new KeyboardEvent('keydown', {
                key: direction
            });
            document.dispatchEvent(event);
        }}
        onTouchEnd={() => {
            var event = new KeyboardEvent('keyup', {
                key: direction
            });
            document.dispatchEvent(event);
        }}>
            {children}
        </button>
    );
}

export default ArrowButton;