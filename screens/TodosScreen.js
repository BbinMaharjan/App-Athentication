import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Appbar, FAB, Modal, TextInput} from 'react-native-paper';

const TodosScreen = props => {
  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState('');

  const showModal = () => setVisible(true);
  const hideModal = () => {
    setDescription('');
    setVisible(false);
  };

  const submitForm = () => {
    hideModal();
  };
  return (
    <View style={styles.screen}>
      <Appbar.Header style={{backgroundColor: 'green'}}>
        <Appbar.Content title="Todo" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={{
          padding: 20,
          margin: 20,
          backgroundColor: '#fff',
        }}>
        <TextInput
          mode="outlined"
          label="What Are You Planning?"
          multiline
          numberOfLines={3}
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Button
            icon="content-save"
            mode="contained"
            onPress={submitForm}
            style={{
              borderRadius: 20,
              height: 40,
              backgroundColor: 'green',
              marginRight: 10,
            }}>
            Save
          </Button>
          <Button
            icon="close"
            mode="contained"
            style={{marginRight: 10}}
            onPress={hideModal}
            style={{
              borderRadius: 20,
              height: 40,
              backgroundColor: 'red',
              marginLeft: 10,
            }}>
            Close
          </Button>
        </View>
      </Modal>
      <FAB style={styles.fab} icon="plus" onPress={showModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default TodosScreen;
