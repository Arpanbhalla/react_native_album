// Step 1

import React from 'react';
import { View, AppRegistry } from "react-native";

import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList"

// Step 2

const App = () => {
  return(
    <View style={{ flex: 1 }}>
      <Header headerText={"Albums"} />
      <AlbumList />
    </View>
  );
};

// Step 3

AppRegistry.registerComponent("albums", () => App);
