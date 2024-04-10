import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Proyecto Simple de Ejemplo</Text>
      <Image style={styles.imgStyleLogo} source={require('./assets/fundacionKinal.webp')} />
      <Text style={styles.textStyle}>Promocion XXXI</Text>
      <Image style={styles.imgStyle} source={require('./assets/in6bv.jpg')} />
      <Text style={styles.textStyle}>Villa Nueva</Text>
      <Image style={styles.imgStyle} source={require('./assets/Vertedero.png')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001F3F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#ffffff',
    fontSize: 20,
  },
  imgStyle: {
    width: 350,
    height: 200,
    marginTop: 30,
    marginBottom: 30
  },
  imgStyleLogo: {
    marginTop: 30,
    marginBottom: 30
  }
});
