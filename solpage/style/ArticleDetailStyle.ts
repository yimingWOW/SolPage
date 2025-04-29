import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    color: '#888',
    marginRight: 16,
  },
  paidCount: {
    fontSize: 14,
    color: '#888',
  },
  content: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginTop: 16,
  },
});

export default styles; 