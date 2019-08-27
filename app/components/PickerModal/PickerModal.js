import React from 'react';
import { Picker, View } from 'react-native';

import styles from './styles';


const PickerModal = props => {
  // const [selectedValue, setSelectedValue] = useState('java');
  // const [display, setDisplay] = useState(false);
  const { pickerValues, selectCurrency, currencyAttribute, which } = props;

  return (
    <View style={styles.pickerContainer}>
      <View style={styles.pickerHolder}>
        <Picker
          selectedValue={currencyAttribute[which]}
          style={{ ...styles.picker }}
          onValueChange={itemValue => {
            const newSelectedValue = pickerValues.find(
              item => item.currencyId === itemValue
            ).currencyId;
            selectCurrency(newSelectedValue);
          }}
        >
          {pickerValues.map(item => (
            <Picker.Item
              label={item.currencyId}
              value={item.currencyId}
              key={item.id}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default PickerModal;

