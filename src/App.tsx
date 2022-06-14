import React, { useEffect, useState } from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Carousel
, { Pagination } from 'react-native-snap-carousel';
import { DataSlide, slideData } from './classes/SlideData.class';

const App = () => {
  const { width, height } = Dimensions.get('screen');
  const [activeItem, setActiveItem] = useState(0);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 10,
      justifyContent: 'center',
    },
    image: {
      width: 350,
      height: 400,
      resizeMode: 'center',
    },
    color: {
      color: '#000',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#5856d6',
    },
    subtitle: {
      fontSize: 16,
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 10,
      backgroundColor: '#5856d6',
    },
  });

    function renderItem(item: DataSlide) {
    return (
      <View>
        <Image
          source={item.img}
          style={styles.image}
        />
        <Text style={styles.title}>
          {item.title}
        </Text>
        <Text style={[styles.color, styles.subtitle]}>
          {item.desc}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={styles.container}>
      <Carousel
        data={slideData()}
        renderItem={({ item }) => renderItem(item)}
        sliderWidth={width}
        itemWidth={width}
        keyExtractor={({ id }) => id!.toString()}
        layout={'default'}
        onSnapToItem={(index) => setActiveItem(index)}
      />
      <Pagination
        dotsLength={slideData().length}
        activeDotIndex={activeItem}
        dotStyle={styles.dot}
      />
    </SafeAreaView >
  );
};

export default App;
