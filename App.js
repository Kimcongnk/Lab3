import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';

const DATA_LISTNV = [
  { name: 'Devin', sdt: '098762888' },
  { name: 'Dan', sdt: '088299289' },
  { name: 'Dominic', sdt: '090989900' },
  { name: 'Jackson', sdt: '088990088' },
  { name: 'James', sdt: '098779989' },
  { name: 'Joel', sdt: '098787899' },
  { name: 'John', sdt: '078997899' },
];

export default function App() {

  const [isModalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      {/* FlatList */}
      <FlatList
        style={{ height: 400 }}
        data={DATA_LISTNV}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              alert(`${item.name} - ${item.sdt}`);
            }}
          >
            <View style={styles.listItem}>
              <Text style={styles.item}>{item.name}</Text>
              <Text style={styles.item}>{item.sdt}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Username and Password TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true} // Hide password input
      />

      {/* Login button */}
      <Button title="Đăng nhập" onPress={toggleModal} />

      {/* Modal */}
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Thông tin đăng nhập:</Text>
          <Text style={styles.modalText}>Tên đăng nhập: {username}</Text>
          <Text style={styles.modalText}>Mật khẩu: {password}</Text>
          <Button title="Đóng" onPress={toggleModal} />
        </View>
      </Modal>

      {/* ScrollView */}
      <ScrollView>
        <Text style={styles.scrollText}>Nội dung 1</Text>
        <Text style={styles.scrollText}>Nội dung 2</Text>
        <Text style={styles.scrollText}>Nội dung 3</Text>
      </ScrollView>

      {/* Image */}
      <Image source={require('./assets/phone.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: 'green',
    padding: 10,
    marginVertical: 5,
  },
  item: {
    flex: 1,
    fontSize: 16,
    color: 'white',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
  },
  scrollText: {
    fontSize: 20,
    padding: 16,
  },
});
