import { FlatList, TouchableOpacity } from "react-native";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  todo: {
    color: 'purple',
    backgroundColor: 'pink',
    fontSize: 32,
    marginBottom: 20,
    padding: 15
  }
})

interface IProps {
  todoList: ITodo[]
  deleteTodo: (v: number) => void
}

const ListTodo = (props: IProps) => {
  const { todoList, deleteTodo } = props
  // console.log(todoList)
  return (
    <>
      <FlatList
        style={{ marginTop: 20, borderColor: 'red', borderWidth: 1 }}
        data={todoList}
        keyExtractor={item => item.id + ""}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                deleteTodo(item.id)
              }}>
              <Text
                style={styles.todo}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )
        }}
      />
    </>
  )
}

export default ListTodo;