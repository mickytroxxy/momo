import { getFontSizeByWindowHeight, getFontSizeByWindowWidth } from '@/style/theme'
import { Box, Button,  Text } from '@atom'
import React, { useEffect, useState } from 'react'
import { IllustrationImages } from '@/constants/images'
import icon from '@/constants/icon'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { StyleSheet } from 'react-native'
import { globalMoMoBlue } from '@/style-dictionary-dist/momoStyle'
import IllustrationBackground from '@/component/molecule/Card/IllustrationBackground'
import { RHFInput } from '@molecule'



export const ReferaFriendFormSchema = z.object({
  ReferalNumber: z
    .string()
    .min(12, { message: 'Enter a valid Number' }),
})


export type ReferaFriendFormType = z.infer<typeof ReferaFriendFormSchema>;

export default function ReferaFriend({ navigation }: any) {
  const { CallCenter } = IllustrationImages
  const maxInput = 10
  const [invalue, setInvalue] = useState('');
  const { control, handleSubmit, formState } = useForm<ReferaFriendFormType>({
    resolver: zodResolver(ReferaFriendFormSchema),
    mode: 'onChange'
  });
  const [disabled, setDisabled] = useState(!formState.isValid);

  const onSubmit = (data: any) => {
    console.log(data)
    let referalNumber = data.ReferalNumber.split(' ').join('')

    if (referalNumber === '1111111111') {
      navigation.navigate('RecommendStatus', {
        status: 'failure',
        phonenumber: referalNumber,
      })
    } else {
      navigation.navigate('RecommendStatus', {
        status: 'success',
        phonenumber: referalNumber,
        // button1: 'Go Back',
        // button2: 'Done'
      })
    }
  }

  const handleNavigation = () => {
    control._reset()
  };

  navigation.addListener('blur', handleNavigation);


  const [selectedContact, setSelectedContact] = useState(null);

  const openContactPicker = async () => {
    console.log(`open contacts book`)
  };


  useEffect(() => {
    setDisabled(!formState.isValid);
  }, [formState]);

  return (
    <Box flex={1} py={'vl'} px={'hl'} bg={'white'} justifyContent={'space-between'} >
      <Box alignItems={'center'} >
        <Text variant={'storyHead'} color={'momoBlue'} >Get 300MB for free</Text>
        <Text style={styles.textStyle} >When you refer MoMo to a friend.
          <Text onPress={() => navigation.navigate('LearnMore')} style={[styles.textStyle, { color: globalMoMoBlue }]}> Learn More.</Text>
        </Text>
        <IllustrationBackground style={{ marginTop: getFontSizeByWindowHeight(20) }} >
          <CallCenter />
        </IllustrationBackground>
      </Box>
      <Box gap={'vs'}>
        <RHFInput
          label={'Enter number'}
          name={'ReferalNumber'}
          control={control}
          maxLength={maxInput}
          required
          // maskType="phone"
          mask="999 999 9999"
          rightComponent={'PersonplusIcon'}
          keyboardType='phone-pad'
          rightComponentPress={openContactPicker}
        />
        <Box mt={'vl'} style={{ marginTop: 10 }}>
          <Button
            onPress={handleSubmit(onSubmit)}
            label="Recommend"
            variant="primary"
            size="fullWidth"
            disabled={disabled}
          />
        </Box>
      </Box>

    </Box>
  )
}


const styles = StyleSheet.create({
  textStyle: {
    fontSize: getFontSizeByWindowWidth(12),
    fontStyle: 'normal',
    flexDirection: 'row',
    alignItems: 'center'
  }
})










// import { getFontSizeByWindowHeight, getFontSizeByWindowWidth } from '@/style/theme'
// import { Box, Button, Icon, Text } from '@atom'
// import React, { useEffect, useState } from 'react'
// import { IllustrationImages } from '@/constants/images'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import TouchableOpacity from '@/component/atom/TouchableOpacity'
// import { FlatList, Linking, PermissionsAndroid, StyleSheet } from 'react-native'
// import { globalMoMoBlue } from '@/style-dictionary-dist/momoStyle'
// import IllustrationBackground from '@/component/molecule/Card/IllustrationBackground'
// import { RHFInput } from '@molecule'
// import Contacts from 'react-native-contacts';
// import Overlay from '@/component/molecule/Overlay'
// import { useTypedDispatch } from '@/store/store'
// import { addMessage } from '@/features/alert/alertSlice'



// export const ReferaFriendFormSchema = z.object({
//   ReferalNumber: z
//     .string()
//     .min(10, { message: 'Enter a valid Number' }),
// })

// export type ReferaFriendFormType = z.infer<typeof ReferaFriendFormSchema>;

// export default function ReferaFriend({ navigation }: any) {
//   const { CallCenter } = IllustrationImages
//   const maxInput = 10
//   const { control, handleSubmit, formState } = useForm<ReferaFriendFormType>({
//     resolver: zodResolver(ReferaFriendFormSchema),
//     mode: 'onChange'
//   });
//   const [disabled, setDisabled] = useState(!formState.isValid);
//   const [selectedContact, setSelectedContact] = useState<string>('');
//   const [contacts, setContacts] = useState([]);
//   const [modalOpen, setModalOpen] = useState(false);

//   const dispatch = useTypedDispatch();

//   const onSubmit = (data: any) => {
//     console.log(data)
//     let referalNumber = data.ReferalNumber.split(' ').join('')

//     if (referalNumber === '1111111111') {
//       navigation.navigate('RecommendStatus', {
//         status: 'failure',
//         phonenumber: referalNumber,
//       })
//     } else {
//       navigation.navigate('RecommendStatus', {
//         status: 'success',
//         phonenumber: referalNumber,
//         // button1: 'Go Back',
//         // button2: 'Done'
//       })
//     }
//   }

//   const handleNavigation = () => {
//     control._reset()
//   };

//   const getContacts = async () => {
//     Contacts.getAll().then((contacts: any) => {
//       setContacts(contacts);
//     });
//   };

//   const requestContactsPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         getContacts();
//         setModalOpen(true)
//       } else {
//         console.log('Contacts permission denied');
//         const message = {
//           message:
//             'Contacts permission denied',
//           duration: 2000,
//           type: 'error',
//           close: true,
//         };
//         dispatch(addMessage(message));
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   const onContactPress = (item: any) => {
//     let phoneNumber = item.phoneNumbers[0].number.replace('+', '').split(' ').join('')
//     console.log(item.phoneNumbers[0].number)
//     setSelectedContact(phoneNumber)
//     setModalOpen(false)
//   }

//   const renderContact = ({ item }: any) => (
//     item.phoneNumbers.length > 0 && (
//       <TouchableOpacity style={{
//         backgroundColor: '#eee',
//         margin: 10,
//         padding: 10,
//         borderRadius: 10
//       }} flexDirection={'row'} alignSelf={'center'} onPress={() => onContactPress(item)}>
//         <Box style={styles.iconContainer}>
//           <Icon name={'ProfilePicIcon'} size={30} fill={globalMoMoBlue} />
//         </Box>
//         <Box style={styles.infoContainer}>
//           <Text style={styles.name}>{item.givenName} {item.familyName}</Text>
//           <Text style={styles.phoneNumber}>{item.phoneNumbers[0]?.number}</Text>
//         </Box>
//       </TouchableOpacity>
//     )
//   );

//   const openContactPicker = async () => {
//     // Linking.openURL('content://com.android.contacts/contacts')
//     requestContactsPermission()
//     console.log(`open contacts book`)
//   };


//   useEffect(() => {
//     setDisabled(!formState.isValid);
//     navigation.addListener('blur', handleNavigation);
//   }, [formState]);

//   return (
//     <Box flex={1} py={'vl'} px={'hl'} bg={'white'} justifyContent={'space-between'} >
//       <Box alignItems={'center'} >
//         <Text variant={'storyHead'} color={'momoBlue'} >Get 300MB for free</Text>
//         <Text style={styles.textStyle} >When you refer MoMo to a friend.
//           <Text onPress={() => navigation.navigate('LearnMore')} style={[styles.textStyle, { color: globalMoMoBlue }]}> Learn More.</Text>
//         </Text>
//         <IllustrationBackground style={{ marginTop: getFontSizeByWindowHeight(20) }} >
//           <CallCenter />
//         </IllustrationBackground>
//       </Box>
//       <Box gap={'vs'}>
//         <RHFInput
//           label={'Enter number'}
//           name={'ReferalNumber'}
//           control={control}
//           maxLength={maxInput}
//           required
//           value={selectedContact}
//           number
//           onChangeText={(text: string) => setSelectedContact(text)}
//           // maskType="phone"
//           mask="999 999 9999"
//           rightComponent={'PersonplusIcon'}
//           keyboardType='phone-pad'
//           rightComponentPress={openContactPicker}
//         />
//         <Box mt={'vl'} style={{ marginTop: 10 }}>
//           <Button
//             onPress={handleSubmit(onSubmit)}
//             label="Recommend"
//             variant="primary"
//             size="fullWidth"
//             disabled={disabled}
//           />
//         </Box>
//       </Box>
//       <Overlay open={modalOpen} setModalVisible={setModalOpen}>
//         <FlatList
//           ListHeaderComponent={<Text variant={'header'} color={'orange40'} marginBottom={'vs'} >Refer From your Contacts </Text>}
//           ListEmptyComponent={<Text variant={'body'} textAlign={'center'} marginBottom={'vs'} >No Contacts Found</Text>}
//           showsVerticalScrollIndicator={true}
//           maxToRenderPerBatch={4}
//           scrollEventThrottle={32}
//           decelerationRate={'fast'}
//           data={contacts}
//           renderItem={renderContact}
//           keyExtractor={(item: any) => item.recordID}
//           contentContainerStyle={{
//             justifyContent: 'center'
//           }}
//         />
//       </Overlay>
//     </Box>
//   )
// }


// const styles = StyleSheet.create({
//   textStyle: {
//     fontSize: getFontSizeByWindowWidth(12),
//     fontStyle: 'normal',
//     flexDirection: 'row',
//     alignItems: 'center'
//   },
//   container: {
//     flex: 1,
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//   },
//   iconContainer: {
//     marginRight: 20,
//   },
//   infoContainer: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   phoneNumber: {
//     fontSize: 14,
//   },
// })





