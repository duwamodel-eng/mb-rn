import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import InputTodo from './components/todo/input.todo';
import ListTodo from './components/todo/list.todo';

export default function App() {

  const [todoList, setTodoList] = useState<ITodo[]>([])

  function getRandomizer(bottom: number, top: number) {
    return Math.floor(Math.random() * (1 + top - bottom)) + bottom;
  }

  const addTodo = (text: string) => {
    const todo = { id: getRandomizer(1, 10000), title: text }
    setTodoList([...todoList, todo])
  }

  const deletedTodo=(id:number) => {
    const newTodo=todoList.filter(todo => todo.id != id)
    setTodoList(newTodo)
  }

  return (
    <View style={styles.container}>

      <InputTodo
        addTodo={addTodo}
      />

      <ListTodo
        todoList={todoList} 
        deleteTodo={deletedTodo}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    fontSize: 60,
    color: 'red',
    paddingTop: 50,
    paddingHorizontal: 20,
    marginTop: 50
  }
});
