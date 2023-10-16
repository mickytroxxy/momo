import React from 'react';
import {View, Text, Button, Modal, StyleSheet} from 'react-native';

const CustomPermissionDialog = ({visible, onRequestAllow, onRequestDeny}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.dialogContainer}>
        <View style={styles.dialogBox}>
          <Text style={styles.dialogText}>
            We need your location to show nearby restaurants.
          </Text>
          <View style={styles.buttonContainer}>
            <Button title="Allow" onPress={onRequestAllow} />
            <Button title="Deny" onPress={onRequestDeny} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  dialogContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialogBox: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  dialogText: {
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default CustomPermissionDialog;
