import { CtaButton } from 'components/UI/Button.styled';
import { MediumHeading, SmallSubheading } from 'components/UI/Text.styled';
import { ModalBackdropProps as DialogueProps } from 'shared/models/props.model';
import { StyledNoItems } from './NoItems.styled';

const NoItems = ({ onDisable }: DialogueProps) => {
  return (
    <StyledNoItems>
      <div>
        <MediumHeading>Your cart looks a bit empty. </MediumHeading>
        <SmallSubheading as="h3">Let&apos;s fix that!</SmallSubheading>
      </div>
      <CtaButton onClick={onDisable}>Continue Shopping</CtaButton>
    </StyledNoItems>
  );
};

export default NoItems;
