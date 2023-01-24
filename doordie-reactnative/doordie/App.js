import { StyleSheet, View, Image } from 'react-native';

export default function App() {
  return (
  <View style={styles.container}>
    <View style={styles.deadHeader} />
    <Image
      source={require('./assets/background.png')}
      style={styles.background}
    />
    <View style={styles.formContainer}>
    <Image
      source={require('./assets/white-transparent.png')}
      style={styles.background}
    />
      <Image
        source={require('./assets/logo.png')}
        style={styles.logoImg}
      />
    </View>
    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  deadHeader: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    position: 'relative',
  },
  formContainer: {
    padding: 15,
    paddingTop: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%'
    
  },
  logoImg: {
    width: '100%',
    height: 90,
    position: 'absolute',
    resizeMode:'contain',
    top: 70
  }
  
});
