import { useFormContext } from 'react-hook-form';
import { CheckoutDataKeys, CheckoutDataType, CheckoutFieldNameType } from 'shared/models/product.model';

import { MediumHeading } from 'components/UI/Text.styled';
import { FormSection, InputContainer, LabelContainer, InputField } from './Checkout.styled';

type PartialProps = {
  name: CheckoutDataKeys;
  data: CheckoutDataType;
};

const CheckoutFormFields = ({ name, data }: PartialProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const derivedTitle = name === 'billing' ? 'Billing Details' : 'Shipping Info';

  return (
    <FormSection className={`${name}-section`}>
      <MediumHeading as="h2">{derivedTitle}</MediumHeading>
      {data.map(({ field, fieldName, id, type, placeholder, validation }) => {
        const fieldIdentifier = fieldName.toLowerCase();
        const errorClass = errors[fieldName as CheckoutFieldNameType] ? 'error' : '';

        return (
          <InputContainer key={id} className={`${errorClass} ${fieldIdentifier}-cont`}>
            <LabelContainer>
              <label htmlFor={id}>{field}</label>
              {errors[fieldName as CheckoutFieldNameType] && <p role="alert">Invalid {fieldIdentifier}</p>}
            </LabelContainer>
            <InputField
              {...register(fieldName as CheckoutFieldNameType, {
                required: 'Required',
                pattern: {
                  value: new RegExp(validation),
                  message: `Invalid ${fieldIdentifier}`
                },
                validate: (value) => new RegExp(validation).test(value)
              })}
              type={type}
              id={id}
              placeholder={placeholder}
            />
          </InputContainer>
        );
      })}
    </FormSection>
  );
};

export default CheckoutFormFields;
