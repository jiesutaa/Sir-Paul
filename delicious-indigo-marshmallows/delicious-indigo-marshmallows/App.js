import { TouchableOpacity }from 'react-native-gesture-handler';

function MyComponent() {
  return ( 
    <TouchableOpacity onPress={() => console.log('Button pressed!')}>
     Press Me
    </TouchableOpacity> 
    );
}
function App() {
return ( 
  <div>
   <MyComponent/>
  </div>
 );
}
export default App;