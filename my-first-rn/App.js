import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log('Expo React native');

  const test = 10;
  const name = 'hyeonguk';
  const isFullName = true;

  const add = (a, b) => {
    return a + b;
  };

  return (
    <>
      <View style={styles.container}>
        {/* <Text>My First Recat Native</Text> */}
        <Text>My name is {name}</Text>
        <Text>1 + 2= {add(1, 2)}</Text>
        <Text>{isFullName === true ? name + 'seo' : name}</Text>
        <StatusBar style="auto" />
      </View>
      <Text>NEW</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
