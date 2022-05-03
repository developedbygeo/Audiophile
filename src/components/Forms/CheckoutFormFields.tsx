import { useFormContext } from 'react-hook-form';
import { CheckoutDataKeys, CheckoutDataType, CheckoutFieldNameType } from 'shared/models/checkout.model';
import { PaymentDataType } from 'shared/models/payment.model';

import { MediumHeading } from 'components/UI/Text.styled';
import { FormSection, InputContainer, LabelContainer, InputField } from './Checkout.styled';

type FieldProps = {
  name?: CheckoutDataKeys;
  data: CheckoutDataType | PaymentDataType;
  isPayment?: boolean;
};

const CheckoutFormFields = ({ name, data, isPayment = false }: FieldProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const derivedTitle = name === 'billing' ? 'Billing Details' : 'Shipping Info';

  if (isPayment) {
    return (
      <>
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
                  required: true,
                  pattern: {
                    value: new RegExp(validation),
                    message: `Invalid ${fieldIdentifier}`
                  },
                  validate: (value) => new RegExp(validation).test(value)
                })}
                type={type}
                id={id}
                placeholder={placeholder}
                aria-invalid={errors[fieldName as CheckoutFieldNameType] ? 'true' : 'false'}
                required
              />
            </InputContainer>
          );
        })}
      </>
    );
  }

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
                required: true,
                pattern: {
                  value: new RegExp(validation),
                  message: `Invalid ${fieldIdentifier}`
                },
                validate: (value) => new RegExp(validation).test(value)
              })}
              type={type}
              id={id}
              placeholder={placeholder}
              aria-invalid={errors[fieldName as CheckoutFieldNameType] ? 'true' : 'false'}
              required
            />
          </InputContainer>
        );
      })}
    </FormSection>
  );
};

export default CheckoutFormFields;
