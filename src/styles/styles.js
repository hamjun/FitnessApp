import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recommendation: {
    height: 50,
    borderRadius: 5,
    margin: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1673B6',
    padding: 10,
    borderRadius: 10,
    width: 100
  },
  getExercisesButton: {
    backgroundColor: 'green',
    maxWidth: '75%',
    marginTop: 15,
    marginHorizontal: '21%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    textAlign: 'center',
  }
});

export default styles;
