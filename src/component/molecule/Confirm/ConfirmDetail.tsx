import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';
import ConfirmDetailContainer from './ConfirmDetailContainer';
import ConfirmItemDetail from './ConfirmItemDetail';
import {boolean} from 'zod';
import {Box} from '@atom';
import Card from '../Card/Card';

const ConfirmDetail = ({
  data,
  children,
  total,
}: {
  data: object;
  total?: string;
  children?: ReactNode;
}) => {
  return (
    <Card gap={'vsm'}>
      <ConfirmDetailContainer>
        {Object.entries(data).map(([key, value]) => {
          if (key in data && value !== '') {
            return <ConfirmItemDetail key={key} title={key} value={value} />;
          }
          return null;
        })}
        {children}
      </ConfirmDetailContainer>

      {total && (
        <ConfirmDetailContainer total>
          <ConfirmItemDetail
            title={'Total cost'}
            value={total}
            //  value={'₦ 560.00'}
            bold
          />
        </ConfirmDetailContainer>
      )}
    </Card>
  );
};

export default ConfirmDetail;
