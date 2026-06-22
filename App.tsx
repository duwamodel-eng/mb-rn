import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  // string 
  const [name, setName] = useState<string>('hoidan it');

  // number 
  const [age, setAge] = useState<number>(12)


  // null. undifine , boolean   // không hiện ra màn hình 
  const test = false


  // object, array 
  const [persion, setPersion] = useState({
    name: 'nguyen van a',
    age: 20
  })

  const [array, setArray] = useState([
    {
      name: 'nguyen van b',
      age: 22
    }
  ])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{persion.name}</Text>
        <Text style={styles.text}>{persion.age}</Text>
        <Text style={styles.text}>{JSON.stringify(persion)}</Text>
        <Text style={styles.text}>{JSON.stringify(array)}</Text>
      </View>
      <Text style={styles.text}>hello word
        <Text style={styles.duwatruong}> duwatruong</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
