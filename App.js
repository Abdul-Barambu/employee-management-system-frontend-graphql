import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EmployeeQuery from './src/component/EmployeeQuery';
import AddEmployee from './src/component/AddEmployee';


const client = new ApolloClient({
  uri: "http://172.20.10.4:8080/graphql",
  cache: new InMemoryCache()
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        {/* <EmployeeQuery /> */}
        <AddEmployee />
        <StatusBar style="auto" />
      </View>
    </ApolloProvider>
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
