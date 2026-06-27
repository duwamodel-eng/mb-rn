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

interface Iprops {
  addTodo: (v: string) => void
}

const InputTodo = (props: Iprops) => {
  const { addTodo } = props
  const [name, setName] = useState<string>('');

  const handleAddNewTodo = () => {
    addTodo(name)
  }

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
          onPress={handleAddNewTodo}
        />
      </View>
    </>
  )
}

export default InputTodo;