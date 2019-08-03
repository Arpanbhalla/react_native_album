import React from "react";
import { Image, Text, View } from "react-native";

import Card from "./Card";
import CardSection from "./CardSection";

const AlbumDetail = ({ album }) => {
  const { thumbnail_image, title, artist, image } = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainer,
    headerText,
    albumImage
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={albumImage} source={{ uri: image }} />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },

  headerText: {
    fontSize: 18
  },

  thumbnailStyle: {
    width: 50,
    height: 50
  },

  thumbnailContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },

  albumImage: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
