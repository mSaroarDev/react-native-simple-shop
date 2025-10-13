import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import BackComponent from "../components/BackComponent";
import Icon from "@react-native-vector-icons/feather";

import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { products } from "../components/BestProducts";

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'DetailsScreen'>;

const DetailsScreen = ({route}: DetailsScreenProps) => {

  const { productId } = route.params;
  const productData = products.find(item => item.id === productId);

    return (
        <View style={styles.container}>
          <View style={styles.topBar}>
            <BackComponent title="Back" />

            <View style={styles.actionButtons}>
              <Pressable>
                <Icon name="heart" size={20} color="#000" />
              </Pressable>

              <Pressable>
                <Icon name="share-2" size={20} color="#000" />
              </Pressable>
            </View>
          </View>

          <View style={styles.imagWrapper}>
            <Image 
              source={{
                uri: productData?.images[0] || 'https://via.placeholder.com/150',
              }}
              style={styles.image}
            />
          </View>

          <View style={styles.detailsWrapper}>
            <Text style={styles.priceText}>${productData?.price} USD</Text>
            <Text style={styles.productName}>{productData?.productName}</Text>
            <Text style={styles.description}>{productData?.description}</Text>
          </View>


          <View style={styles.footerWraper}>
            <Pressable
              style={styles.buyNowButton}
            >
              <Icon name="shopping-cart" size={20} color="#fff" />
              <Text style={styles.buyNowButtonText}>Buy Now</Text>
            </Pressable>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    height: 40,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: -60,
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  actionButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  imagWrapper: {
    height: 300,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  detailsWrapper: {
    padding: 15,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  productName: {
    fontSize: 25,
    fontWeight: "700",
    color: "#000",
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    color: "#333",
    marginTop: 10,
    lineHeight: 20,
  },
  footerWraper: {
    height: 60,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  buyNowButton: {
    height: 50,
    backgroundColor: "#ff626a",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  buyNowButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  }
});

export default DetailsScreen;