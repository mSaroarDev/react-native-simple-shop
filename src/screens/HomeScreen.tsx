import Icon from "@react-native-vector-icons/feather";
import { StyleSheet, Text, TextInput, View } from "react-native";
import BestProducts from "../components/BestProducts";

const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <Icon name="search" size={20} color={"#000"} />
            <TextInput 
              placeholder="Search" 
              style={styles.searchInput} 
              placeholderTextColor={"#000"}
            />
          </View>
          <View style={styles.cartIcon}>
            <Icon name="shopping-cart" size={20} color={"#000"} />
            <View style={styles.count}>
              <Text style={styles.countText}>3</Text>
            </View>
          </View>
          <View style={styles.chatIcon}>
            <Icon name="message-circle" size={20} color={"#000"} />
            <View style={styles.count}>
              <Text style={styles.countText}>7</Text>
            </View>
          </View>
        </View>

        <BestProducts />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  searchBox: {
    // width: '100%',
    borderColor: '#dbdddd',
    borderWidth: 1,
    borderRadius: 8,
    maxHeight: 40,
    paddingHorizontal: 5,
    paddingVertical: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    flex: 1,
  },
  searchInput: {
    // width: '100%',
    color: '#000',
    fontSize: 14,
  },
  cartIcon: {
    position: 'relative',
  },
  chatIcon: {
    position: 'relative',
  },
  count: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 50,
    width: 15,
    height: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    color: '#fff',
    fontSize: 10,
  }
});

export default HomeScreen;