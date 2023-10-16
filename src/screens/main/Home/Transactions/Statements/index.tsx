import React from 'react';
import {Box, Button, SafeAreaContainer, Text} from '@atom';
import {BackHeadingX, Card, Dropdown, Pills} from '@molecule';
import Bundle from '@/component/molecule/Card/Bundle';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

const Statements = () => {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: {errors},
  } = useForm({
    // resolver: zodResolver(transferScheduleSchema),
    // defaultValues: transferFormData,
    // values: transferFormData,
  });
  return (
    <SafeAreaContainer flex={1} bg={'white'}>
      <BackHeadingX title="Statements" />
      <Box flex={1} pt={'vs'} px={'hm'}>
        <Text variant={'regular16'} color={'grey'}>
          Select date range for statement:{' '}
        </Text>
        <Box flexDirection={'row'} mt={'vsm'} gap={'hsm'}>
          <Pills pillType="filter" outline label="7 days" position="left" />
          <Pills pillType="filter" outline label="30 days" position="left" />
          <Pills pillType="filter" outline label="60 days" position="left" />
        </Box>
        <Box pt={'vm'} gap={'vm'}>
          <Controller
            control={control}
            render={({
              field: {onChange, onBlur, value, ref},
              fieldState: {error},
            }) => (
              <Dropdown
                onSelect={onChange}
                value={value}
                calendar
                label={'From date'}
                hasError={error}
              />
            )}
            name={'Start date'}
          />

          <Box zIndex={-10}>
            <Controller
              control={control}
              render={({
                field: {onChange, onBlur, value, ref},
                fieldState: {error},
              }) => (
                <Dropdown
                  onSelect={onChange}
                  value={value}
                  calendar
                  label={'To date'}
                  hasError={error}
                />
              )}
              name={'Start date'}
            />
          </Box>
        </Box>
        <Box zIndex={-20} flex={1} justifyContent={'flex-end'} pb={'vxl'}>
          <Button label="Get Statement" />
        </Box>
      </Box>
    </SafeAreaContainer>
  );
};

export default Statements;
