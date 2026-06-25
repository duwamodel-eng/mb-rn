import { FlatList } from "react-native";
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
}

const ListTodo = (props: IProps) => {
  const { todoList } = props
  return (
    <>
      <FlatList
        style={{ marginTop: 20, borderColor: 'red', borderWidth: 1 }}
        data={todoList}
        keyExtractor={item => item.id + ""}
        renderItem={({ item }) => {
          return (
            <Text
              style={styles.todo}
            >
              {item.title}
            </Text>
          )
        }}
      />
    </>
  )
}

export default ListTodo;