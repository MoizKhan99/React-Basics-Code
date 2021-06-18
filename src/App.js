import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import GreetClass from './components/GreetClass';
import Message from './components/Message';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import ClassClick from './components/ClassClick';
import FunctionClick from './components/FunctionClick';
import EventHandlerClass from './components/EventHandlerClass'
import NameList from './components/NameList';
import StyleSheet from "./components/StyleSheet"
import Inline from "./components/Inline"
import Form from './components/Form'
import useTodo from './hooks/useTodo'

function App() {
  return (
    <div className="App">
      <useTodo />
      {/* <Form /> */}
      {/* <Inline /> */}
      {/* <StyleSheet /> */}
      {/* <NameList /> */}
      {/* <EventHandlerClass /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <CounterFunction /> */}
      {/* <CounterClass /> */}
      {/* <Message /> */}
    {/* <Greet /> */}
    {/* <Greet name="Moiz" /> */}
    {/* <Greet name="Raza"/> */}
    {/* <GreetClass /> */}
    {/* <GreetClass name="Moiz"/> */}
    {/* <GreetClass name="Raza"/> */}
    {/* <h1>Hello World</h1> */}
    </div>
  );
}

export default App;
