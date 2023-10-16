import React from 'react';
import {Controller, ControllerFieldState} from 'react-hook-form';
// import createNumberMask from './Mask';
import createNumberMask from './CreateMask';
import FLabelInput, {Props} from './FLabelInput';
import formatWithMask from './Mask';

type RHFInputType = Partial<Props> &
  Partial<ControllerFieldState> & {
    control: any;
    name: string;
    label?: string;
    number?: boolean;
    noError?: boolean;
  };

const dollarMask = createNumberMask({
  // prefix: ['R', '$', ' '],
  delimiter: ' ',
  separator: '.',
  precision: 2,
  // precision: 0,
});
const RHFInput = ({
  control,
  name,
  label,
  number,
  noError,
  ...props
}: RHFInputType) => {
  const formatNumber = (value: string) => {
    const formattedValueResult = formatWithMask({
      text: value,
      //@ts-ignore
      mask: dollarMask(value),
    });
    return formattedValueResult.masked;
  };
  return (
    <>
      <Controller
        control={control}
        shouldUnregister={false}
        render={({
          field: {onChange, onBlur, value, ref},
          fieldState: {error},
        }) => (
          <FLabelInput
            ref={ref}
            label={label || name}
            name={name}
            onChangeText={text => {
              const as = Number(text);
              console.log('text', text);
              const formattedText = formatNumber(text);
              number ? onChange(formattedText) : onChange(text);
            }}
            value={number ? value?.toString() : value}
            // value={value}
            error={!noError ? error?.message : ''}
            {...props}
          />
        )}
        name={name}
      />
    </>
  );
};

export default RHFInput;
