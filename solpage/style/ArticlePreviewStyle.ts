import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#4F8EF7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  address: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    marginRight: 8,
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  summary: {
    fontSize: 15,
    color: '#666',
    marginBottom: 6,
  },
  paidCount: {
    fontSize: 12,
    color: '#4F8EF7',
    marginTop: 4,
    alignSelf: 'flex-end',
  },
}); 