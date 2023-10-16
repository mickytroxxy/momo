import { Box, Button, Text } from "@atom";
import { StatusAction } from "@organisms";
import { useNavigation } from "@react-navigation/native";

export default function BeneficiariesStatus() {
    const { goBack } = useNavigation()
    return (
        <Box flex={1} justifyContent={'center'} mx={'vl'} >
            {/* <StatusAction title='Beneficiary saved' subtitle='You successfully saved Uche to your beneficiary list' share={false} onPress={() => goBack()} /> */}
            <Text variant={'header'}>Status Screen</Text>
            <Button label="Back" onPress={() => goBack()} variant={'primary'} />
        </Box>
    )
}