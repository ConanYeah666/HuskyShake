import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import App1 from './components/mainpage/mainpage'
export default function App() {
  return (
    <View style={styles.container}>
      {/* <MainPage/ > */}
      <App1></App1>
      <StatusBar style="auto" />
    </View>
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
