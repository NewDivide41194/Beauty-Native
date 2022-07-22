import * as React from "react";
import { Text, View, SafeAreaView, Button } from "react-native";

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
        },
        {
          title: "Item 2",
          text: "Text 2",
        },
        {
          title: "Item 3",
          text: "Text 3",
        },
        {
          title: "Item 4",
          text: "Text 4",
        },
        {
          title: "Item 5",
          text: "Text 5",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: "floralwhite",
          borderRadius: 5,
          height: 450,
          padding: 50,
          
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center",padding:10 }}
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
