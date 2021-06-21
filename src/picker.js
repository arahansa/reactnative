import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import {Picker} from '@react-native-picker/picker';
const PickerCompo = () =>{

    const [country, setCountry]  = useState('Canada')
    return (
        <View style={styles.container}>
            <Picker style={{height: 20, width: 250}}
            selectedValue={country}
                    onValueChange={(val, idx)=>{
                        setCountry(val)
                    }}
            >
                <Picker.Item label={'Korea'} value={'Korea'} />
                <Picker.Item label={'Canada'} value={'Canada'} />
            </Picker>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        marginBottom: 200,
        alignItems: "center"
    }
})

export default PickerCompo
