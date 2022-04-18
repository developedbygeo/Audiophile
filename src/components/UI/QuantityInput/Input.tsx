import { StyledQuantity } from './Input.styled';

type InputProps = {
  quantity: number;
  onDecrement: () => void;
  onIncrement: () => void;
};

const QuantityInput = ({ quantity = 1, onDecrement, onIncrement }: InputProps) => {
  return (
    <StyledQuantity>
      <button onClick={onDecrement} type="button">
        -
      </button>
      <input type="text" min="1" max="99" step="1" value={quantity} />
      <button onClick={onIncrement} type="button">
        +
      </button>
    </StyledQuantity>
  );
};

export default QuantityInput;
