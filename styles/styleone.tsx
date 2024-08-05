import { StyleSheet } from 'react-native';

const styleone = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  textFeature: {
    color: '#181725',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 10,
  },
  safeArea: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginTop: 70,
     // adjust according to header height
  },
});

export default styleone;
