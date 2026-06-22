import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name, setName] = useState<string>('');


  return (
    <View style={styles.container}>
      <View>
        <TextInput
          onChangeText={v => setName(v)}
          value={name}
          autoCapitalize='none'
          autoCorrect={false}
          // keyboardType='numeric'
          // maxLength={2}
          // multiline
          style={styles.input} />
        <Text style={styles.text}>{name}</Text>
      </View>
      <Button title='Add new'/>
      <Text style={styles.text}>hello word
        <Text style={styles.duwatruong}> duwatruong</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'violet',
    borderWidth: 1,
    padding: 10,
  },

  duwatruong: {
    color: 'green'
  },
  text: {
    fontSize: 30,
    color: "red"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 20
  }
});
