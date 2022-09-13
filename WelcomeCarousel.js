import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import IMG_1 from "./assets/images/welcome_1.jpg";

import Carousel from "react-native-snap-carousel";

export default class WelcomeCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Item 1",
          text: "Text 1",
          imageURL: require("./assets/images/welcome_1.jpg"),
        },
        {
          title: "Item 2",
          text: "Text 2",
          imageURL: require("./assets/images/welcome_2.jpg"),
        },
        {
          title: "ပြည်ထောင်စုဖောင့် ဒေါင်းလုဒ်",
          text: "Text 3",
          imageURL: require("./assets/images/welcome_3.jpg"),
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <ImageBackground
        style={styles.tinyLogo}
        source={item.imageURL}
        resizeMode="cover"
        borderRadius={8}
      >
        <View
          style={{
            backgroundColor: "transparent",
            borderRadius: 5,

            // height: 450,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "#ffffff",
              textShadowColor: "rgba(0, 0, 0, 0.8)",
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 4,
            }}
          >
            {item.title}
          </Text>
          <Text>{item.text}</Text>
        </View>
      </ImageBackground>
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <Carousel
            sliderHeight={10}
            autoplay
            showsHorizontalScrollIndicator
            layout={"default"}
            ref={"carousel"}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  tinyLogo: {
    backgroundColor: "floralwhite",
    borderRadius: 5,
    height: 450,
    padding: 50,
  },
});
