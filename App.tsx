import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>test</Text>
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
    fontSize: 40,
    color: "red"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
