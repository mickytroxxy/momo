import {useIsFocused} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DarkStatusBar} from '@/component/molecule/StausBar';
import Box from './Box';
import {SafeAreaViewProps} from './SafeAreaView';

type SafeAreaContainerProps = {
  children: React.ReactNode;
  bgColor?: string;
} & SafeAreaViewProps;

const SafeAreaContainer = ({
  children,
  bgColor = '#004F71',
  ...props
}: SafeAreaContainerProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box
      flex={1}
      flexGrow={1}
      style={{
        backgroundColor: bgColor,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
      {...props}>
      <Box flex={1} bg={'white'}>
      {/* <Box flex={1} bg={'backgroundShading'}> */}
        <DarkStatusBar />
        {children}
      </Box>
      <Box
        bg={'backgroundShading'}
        style={{
          position: 'absolute',
          bottom: 0,
          height: insets.bottom,
          left: 0,
          right: 0,
          backgroundColor: 'white',
        }}
      />
    </Box>
  );
};

export default SafeAreaContainer;
{
  /* <SafeAreaView  flex={1} {...props}>
<DarkStatusBar />
{children}
</SafeAreaView> */
}
