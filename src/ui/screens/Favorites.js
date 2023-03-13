import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import FavoritesScreenCard from '../components/FavoritesScreenCard';

const Favorites = () => {
  const favoritesRestaurants = useSelector(
    selector => selector.user.favoritesFood,
  );

  const renderCategory = ({item}) => <FavoritesScreenCard item={item} />;

  const emptyFavoritesList = () => (
    <Text style={styles.emptyText}>Empty of List</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>Favorites</Text>
      </View>
      <FlatList
        data={favoritesRestaurants}
        renderItem={renderCategory}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        ListEmptyComponent={emptyFavoritesList}
      />
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  list: {
    paddingHorizontal: units.width / 14,
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: units.height / 34,
  },
  topText: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.DARK,
  },
  emptyText: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
  },
});
