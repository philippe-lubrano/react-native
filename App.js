import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview'
import Constants from 'expo-constants';

// You can import from local files
import SectionListBasics from './components/SectionListBasics';
import TouchablesExamples from './components/TouchablesExamples';
import ActivityIndicatorDemo from './components/ActivityIndicatorDemo';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [nextPage, setNextPage] = React.useState("");
  const [toDisplay, setToDisplay] = React.useState("Hello world.");

  const onPressButton = (page) => {
    setNextPage(page)
  }

  const itemSelected = (item) => {
    setToDisplay(item)
    setNextPage(false)
  }

  return (
    <View style={styles.container}>
      {nextPage === "" &&
        <View>
          <Text style={styles.paragraph}>
            {toDisplay}
          </Text>
          <Button onPress={() => onPressButton("list")} title="Press Me To see List" />
          <View style={styles.button}><Button onPress={() => onPressButton("touchables")} title="Press Me To see touchables buttons" /></View>
          <View style={styles.button}><Button onPress={() => onPressButton("ActivityIndicatorDemo")} title="Press Me To see ActivityIndicatorDemo" /></View>
          <View style={styles.button}><Button onPress={() => onPressButton("WebView")} title="Press Me To see Google WebView" /></View>
        </View>
      }
      {nextPage === "list" && <SectionListBasics itemSelected={itemSelected} />}
      {nextPage === "touchables" && <TouchablesExamples />}
      {nextPage === "ActivityIndicatorDemo" && <ActivityIndicatorDemo />}
      {nextPage === "WebView" && <Button onPress={() => onPressButton("")} title="Home" />}
      {nextPage === "WebView" && <WebView source={{ uri:'https://www.google.com' }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    paddingTop: 20,
  },
});
