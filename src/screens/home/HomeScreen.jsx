import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {Card} from '../../components';
import {CARDS} from '../../helpers/constants';

const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Card />
      {/* {CARDS.map((card, index) => {
        if (index < currentIndex) {
          return null;
        } else if (index === currentIndex) {
          return <Card key={card?.id} cardColor={card?.bgColor} />;
        } else {
          return <Card key={card?.id} cardColor={card?.bgColor} />;
        }
      }).reverse()} */}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    marginTop: 50,
  },
});
