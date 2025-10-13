import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TProduct } from "../types/products.types";

const CARD_WIDTH = (Dimensions.get('window').width / 2) - 18;

type ProductCardProps = {
  data: TProduct
}

const Productcard = ({
  data,
}: ProductCardProps) => {

  return (
    <>
      <View style={styles.productCard}>
        <View>
          <View style={styles.productConver}>
            <Image
              style={styles.coverImage}
              source={{
                uri: data.images[0],
              }}
            />
          </View>

          <View style={styles.productDetails}>
            <Text style={styles.productCategory}>{data.category}</Text>
            <Text style={styles.productName}>{data.productName}</Text>
          </View>
        </View>

        <View style={styles.priceWrapper}>
          <Text style={styles.productRatings}>⭐{data.ratings}</Text>
          <Text style={styles.productPrice}>${data.price}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  productCard: {
    height: 250,
    width: CARD_WIDTH,
    borderWidth: 1,
    borderColor: '#dbdddd',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    overflow: 'hidden',
  },
  productConver: {
    width: '100%',
    height: 120,
    backgroundColor: '#f5f5f5',
    objectFit: 'cover',
  },
  coverImage: {
    width: CARD_WIDTH,
    height: '100%',
    resizeMode: 'cover',
  },
  productDetails: {
    padding: 10,
  },
  productCategory: {
    fontSize: 12,
    color: '#000',
  },
  productName: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
    marginTop: 5,
  },
  priceWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
    width: '100%', 
  },
  productRatings: {
    fontSize: 12,
    color: '#000',
  },
  productPrice: {
    fontSize: 16,
    color: '#ff626a',
    fontWeight: 'bold',
  },
  
});

export default Productcard;