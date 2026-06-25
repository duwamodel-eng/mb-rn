import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  todoInput: {
    borderColor: 'violet',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5
  }
})

const InputTodo = () => {
  const [name, setName] = useState<string>('');
  return (
    <>
      <View>
        <TextInput
          onChangeText={v => setName(v)}
          value={name}
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.todoInput} />
        <Button
          title='Add new'
          color={'green'}
          onPress={() => alert('tab me')}
        />
      </View>
    </>
  )
}

export default InputTodo;