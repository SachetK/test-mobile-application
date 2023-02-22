import React, { useState } from "react";
import { View, Text, Button, Modal, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const HomeScreen = () => {
  const [todos, setTodos] = useState(['']);

  return (
    <SafeAreaView className="bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <View className="h-full w-full p-4">
        {todos.map(todo => <Text>{todo}</Text>)}

        <AddNewTodoButton addTodo={newTodo => setTodos(prev => [...prev, newTodo])} />
      </View>
    </SafeAreaView>
  );
};

const AddNewTodoButton: React.FC<{ addTodo: (newTodo: string) => void}> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Button title="Add new todo" onPress={() => setIsVisible(prev => !prev)} />
      
      <Modal visible={isVisible} animationType="slide">
        <TextInput value={newTodo} onChangeText={setNewTodo} />\
        
        <Button title="Save" onPress={() => {
          addTodo(newTodo);
          setIsVisible(prev => !prev);
          setNewTodo('');
        }} />
        
        <Button title="Cancel" onPress={() => {
          setIsVisible(prev => !prev);
          setNewTodo('');
        }} />
      </Modal>
    </>
  )
}
