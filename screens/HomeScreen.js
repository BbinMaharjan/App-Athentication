import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Button, Appbar, List} from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';
import {useDispatch, useSelector} from 'react-redux';
import {addTodosToFirebase, getAllTodos} from '../store/actions/todos';

const HomeScreen = props => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todosState.todos);

  React.useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <View style={styles.container}>
      <Appbar.Header style={{backgroundColor: 'green'}}>
        <Appbar.Content title="Home" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {todos.map(todo => {
          return (
            <List.Item
              key={todo.id}
              title={todo.description}
              right={props => <List.Icon {...props} icon="post" />}
              style={{backgroundColor: '#fff', margin: 10, borderRadius: 25}}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'gray',
  },
});

export default HomeScreen;
