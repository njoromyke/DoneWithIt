import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  Picker,
} from 'react-native';
import defaultStyles from '../config/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import AppText from './AppText/AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';
const AppPicker = ({
  icon,
  placeholder,
  items,
  slectedItem,
  width = '100%',
  onSelectItem,
  PickerItemComponent = PickerItem,
  nuberOfColumns = 1,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {slectedItem ? (
            <AppText style={styles.text}> {slectedItem.label} </AppText>
          ) : (
            <AppText style={styles.placeholder}> {placeholder} </AppText>
          )}

          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title='close' onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            numColumns={nuberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },
  text: { flex: 1 },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
});

export default AppPicker;
