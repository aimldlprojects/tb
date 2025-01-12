import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const HomeScreen = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedTestType, setSelectedTestType] = useState(''); 
  const [openUser, setOpenUser] = useState(false);
  const [openTestType, setOpenTestType] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleButtonClick = () => {
    console.log("Selected User:", selectedUser);
    console.log("Selected Test Type:", selectedTestType); 
  };

  const handleDropdownOpen = () => {
    setButtonVisible(false);
  };

  const handleDropdownClose = () => {
    setButtonVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}> 
        <Text style={styles.label}>Select User:</Text> 
        <DropDownPicker
          open={openUser}
          value={selectedUser}
          items={[
            { label: 'Bhavi', value: 'Bhavi' },
            { label: 'Madhu', value: 'Madhu' },
            { label: 'User', value: 'User' },
          ]}
          setOpen={setOpenUser}
          setValue={setSelectedUser}
          containerStyle={styles.dropdownContainer}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdown}
          onChangeValue={value => setSelectedUser(value ?? '')}
          onOpen={handleDropdownOpen}
          onClose={handleDropdownClose}
        />
      </View>

      <View style={styles.rowContainer}> 
        <Text style={styles.label}>Test Type:</Text> 
        <DropDownPicker
          open={openTestType}
          value={selectedTestType}
          items={[
            { label: 'Additions', value: 'Additions' },
            { label: 'Subtractions', value: 'Subtractions' },
            { label: 'Multiplications', value: 'Multiplications' },
            { label: 'Tables', value: 'Tables' },
          ]}
          setOpen={setOpenTestType}
          setValue={setSelectedTestType}
          containerStyle={styles.dropdownContainer}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdown}
          onChangeValue={value => setSelectedTestType(value ?? '')}
          onOpen={handleDropdownOpen}
          onClose={handleDropdownClose}
        />
      </View>

      {buttonVisible && (
        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={handleButtonClick} />
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    label: {
      marginRight: 10,
      fontSize: 18,
    },
    dropdownContainer: {
      width: '50%',
    },
    dropdown: {
      backgroundColor: '#fafafa',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
      alignItems: 'center',
    },
  });
  

export default HomeScreen;