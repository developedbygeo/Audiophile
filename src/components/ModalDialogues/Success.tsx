import { ModalBackdropProps as DialogueProps } from 'shared/models/props.model';

const Success = ({ onDisable }: DialogueProps) => {
  return (
    <>
      <h1>HELLO</h1>
      <button type="button" onClick={onDisable}>
        Hi
      </button>
    </>
  );
};

export default Success;
