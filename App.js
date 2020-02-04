import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Movies from "./components/Movies";
import MoviesView from "./components/MoviesView";
import ViewPage from "./components/ViewPager";
//import ViewPage from "./components/ViewPager";
export default function App() {
  return (
      <ViewPage/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
