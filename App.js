import React, {useState} from 'react';
import { FlatList, StyleSheet, View, Text  } from 'react-native';
import AddToDo from './components/AddToDo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {

  const [todos, setTodos] = useState([
    {text: 'Take a Walk', key:'1'},
    {text: 'Study', key:'2'},
    {text: 'Play Fifa', key:'3'},
    {text: 'Text paddies', key:'4'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) =>{ 
      return prevTodos.filter(todo => todo.key != key )
    } )
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddToDo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
            />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //justifyContent: 'center',
    //alignItems:'center',
  },

  content:{
    padding: 40,
  },

  list:{
    marginTop: 20
  }

});
