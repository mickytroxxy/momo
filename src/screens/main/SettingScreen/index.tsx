import React, {useState} from 'react';
import {Overlay} from '@molecule';
import {Box, Text} from '@atom';

type Props = {};

const Transact = () => {
  const [open, setModalVisible] = useState(true);
  return (
    // <Overlay {...{setModalVisible, open}}>
    //   <Box>
    //     <Text>shjsjhs</Text>
    //     <Text>shjsjhs</Text>
    //     <Text>shjsjhs</Text>
    //     <Text>shjsjhs</Text>
    //     <Text>shjsjhs</Text>
    //     <Text>shjsjhs</Text>
    //   </Box>
    // </Overlay>
    <Box bg={'transparent'} flexGrow={1}>

    </Box>
  );
};

export default Transact;
