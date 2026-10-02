import { useNavigation } from '@react-navigation/native';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View, Text, Button } from 'react-native';

const Like = () => {
  const navigation: any = useNavigation()
  return (
    <View>
      <Text>Like component</Text>
      <Button
        onPress={() => navigation.navigate("LikeDetail")}
        title='like detail' />
    </View>
  )
}
export default Like