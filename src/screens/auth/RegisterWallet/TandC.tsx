import {fontFamily} from '@/style/theme';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Box, Button, Text, TextButton} from '@atom';
import {CheckBox} from '@molecule';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

type MoMoTransferHeaderType = {
  title: string;
};
const TandC = ({showSimScreen}: any) => {
  const {goBack} = useNavigation();
  const [step, setStep] = useState(0);
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  return (
    <View
      style={{
        paddingHorizontal: gpsw(20),
        paddingVertical: gpsh(20),
        flex: 1,
      }}>
      <Text style={styles.terms}>
        I have read, understood and accept the terms and conditions and privacy
        policy of this app.
      </Text>

      <Box gap={'vm'}>
        <Box flexDirection={'row'} gap={'hsm'}>
          <CheckBox checked={value1} onChange={() => setValue1(v => !v)} />
          <Box alignItems={'center'} flexDirection={'row'}>
            <Text style={styles.labelText}>I agree to the </Text>
            <TextButton
              titleStyle={styles.labelTextLink}
              title="Terms and Conditions"
              onPress={() => {}}
            />
          </Box>
        </Box>
        <Box flexDirection={'row'} gap={'hsm'}>
          <CheckBox checked={value2} onChange={() => setValue2(v => !v)} />
          <Box alignItems={'center'} flexDirection={'row'}>
            <Text style={styles.labelText}>I agree to the </Text>
            <TextButton
              titleStyle={styles.labelTextLink}
              title="Privacy Policy"
              onPress={() => {}}
            />
          </Box>
        </Box>
      </Box>
      <View style={{marginTop: 'auto'}}>
        <Button label="NEXT" onPress={showSimScreen} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelText: {
    fontSize: gpsw('12'),
    lineHeight: gpsh('15.6'),
    color: '#5F5F5F',
    fontFamily: fontFamily('Regular'),
  },
  labelTextLink: {
    color: '#003654',
    fontSize: gpsw('12'),
    lineHeight: gpsh('15.6'),
    fontFamily: fontFamily('Regular'),
  },
  terms: {
    fontSize: gpsw('16'),
    lineHeight: gpsh('20.8'),
    color: '#5F5F5F',
    fontFamily: fontFamily('Regular'),
    marginBottom: gpsh(24),
  },
});

export default TandC;
