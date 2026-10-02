import { useNavigation } from '@react-navigation/native';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View, Text, Button } from 'react-native';


const Home = () => {
  const navigation: any = useNavigation()
  return (
    <View>
      <Text>Home component</Text>
      <Button
        onPress={() => navigation.navigate("HomeDetail")}
        title='go to detail' />
    </View>
  )
}
export default Home