import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import ZendDesk from '@pagopa/io-react-native-zendesk';

export default function App() {
  // const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    console.log(ZendDesk);
  }, []);

  return (
    <View style={styles.container}>{/* <Text>Result: {result}</Text> */}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
