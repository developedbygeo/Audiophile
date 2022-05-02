/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent } from 'react';
import { LabelContainer } from 'components/Forms/Checkout.styled';
import { BsDot } from 'react-icons/bs';
import { RadioContainer } from './Radio.styled';

type RadioProps = {
  name: string;
  fieldName: string;
  id: string;
  selected: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Radio = ({ name, fieldName, id, changeHandler, selected }: RadioProps) => {
  return (
    <RadioContainer className={selected === name ? 'active' : ''}>
      <label htmlFor={id}>{fieldName}</label>
      <input
        type="radio"
        value={name}
        id={id}
        name={name}
        onChange={(e) => changeHandler(e)}
        checked={selected === name}
      />
    </RadioContainer>
  );
};

export default Radio;
