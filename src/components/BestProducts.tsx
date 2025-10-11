import { FlatList, StyleSheet, Text, View } from "react-native";
import Productcard from "./Productcard";

const products = [
  {
    productName: "Wireless Bluetooth Headphones",
    price: 59.99,
    ratings: 4.6,
    category: "Electronics",
    reviewsCount: 324,
    totalSold: 1280,
    brand: "SoundCore",
    color: "Black",
    isAddedToWishlist: false,
    isAddedToCart: false,
    images: ["https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg"],
    shopName: "Tech Haven"
  },
  {
    productName: "Men’s Running Shoes",
    price: 79.5,
    ratings: 4.3,
    category: "Footwear",
    reviewsCount: 210,
    totalSold: 860,
    brand: "Nike",
    color: "Blue",
    isAddedToWishlist: true,
    isAddedToCart: false,
    images: ["https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg"],
    shopName: "Urban Sports"
  },
  {
    productName: "Smart LED TV 43 inch",
    price: 329.99,
    ratings: 4.8,
    category: "Home Appliances",
    reviewsCount: 540,
    totalSold: 2300,
    brand: "Samsung",
    color: "Black",
    isAddedToWishlist: false,
    isAddedToCart: true,
    images: ["https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg"],
    shopName: "HomeTech Store"
  },
  {
    productName: "Leather Office Bag",
    price: 49.0,
    ratings: 4.2,
    category: "Accessories",
    reviewsCount: 98,
    totalSold: 420,
    brand: "Fossil",
    color: "Brown",
    isAddedToWishlist: true,
    isAddedToCart: false,
    images: ["https://images.pexels.com/photos/4812956/pexels-photo-4812956.jpeg"],
    shopName: "Elite Fashion"
  },
  {
    productName: "Stainless Steel Water Bottle",
    price: 15.99,
    ratings: 4.5,
    category: "Home & Kitchen",
    reviewsCount: 150,
    totalSold: 1050,
    brand: "HydroMax",
    color: "Silver",
    isAddedToWishlist: false,
    isAddedToCart: false,
    images: ["https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"],
    shopName: "Eco Living"
  },
  {
    productName: "Gaming Mouse RGB",
    price: 39.99,
    ratings: 4.7,
    category: "Computer Accessories",
    reviewsCount: 220,
    totalSold: 940,
    brand: "Logitech",
    color: "Black",
    isAddedToWishlist: false,
    isAddedToCart: false,
    images: ["https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg"],
    shopName: "Tech World"
  },
  {
    productName: "Smart Fitness Band",
    price: 45.99,
    ratings: 4.4,
    category: "Wearables",
    reviewsCount: 310,
    totalSold: 1500,
    brand: "Mi",
    color: "Black",
    isAddedToWishlist: true,
    isAddedToCart: false,
    images: ["https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg"],
    shopName: "Fit Life"
  },
  {
    productName: "Cotton T-Shirt",
    price: 19.99,
    ratings: 4.1,
    category: "Clothing",
    reviewsCount: 85,
    totalSold: 530,
    brand: "H&M",
    color: "White",
    isAddedToWishlist: false,
    isAddedToCart: true,
    images: ["https://images.pexels.com/photos/4812956/pexels-photo-4812956.jpeg"],
    shopName: "Fashion Hub"
  },
  {
    productName: "Laptop Backpack",
    price: 35.0,
    ratings: 4.3,
    category: "Accessories",
    reviewsCount: 140,
    totalSold: 880,
    brand: "Dell",
    color: "Gray",
    isAddedToWishlist: false,
    isAddedToCart: false,
    images: ["https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"],
    shopName: "Office Zone"
  },
  {
    productName: "Wireless Keyboard",
    price: 49.99,
    ratings: 4.5,
    category: "Computer Accessories",
    reviewsCount: 180,
    totalSold: 1120,
    brand: "Logitech",
    color: "White",
    isAddedToWishlist: false,
    isAddedToCart: true,
    images: ["https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg"],
    shopName: "Tech Haven"
  },
  {
    productName: "Ceramic Coffee Mug Set",
    price: 25.99,
    ratings: 4.6,
    category: "Home & Kitchen",
    reviewsCount: 195,
    totalSold: 670,
    brand: "ClayCraft",
    color: "White",
    isAddedToWishlist: true,
    isAddedToCart: false,
    images: ["https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg"],
    shopName: "Kitchen World"
  },
  {
    productName: "Bluetooth Speaker",
    price: 69.0,
    ratings: 4.7,
    category: "Electronics",
    reviewsCount: 250,
    totalSold: 970,
    brand: "JBL",
    color: "Red",
    isAddedToWishlist: false,
    isAddedToCart: false,
    images: ["https://images.pexels.com/photos/4812956/pexels-photo-4812956.jpeg"],
    shopName: "Sound House"
  },
  {
    productName: "Women’s Handbag",
    price: 55.99,
    ratings: 4.3,
    category: "Fashion",
    reviewsCount: 320,
    totalSold: 1040,
    brand: "Zara",
    color: "Beige",
    isAddedToWishlist: true,
    isAddedToCart: false,
    images: ["https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"],
    shopName: "Style Studio"
  },
  {
    productName: "Portable Power Bank 20000mAh",
    price: 35.99,
    ratings: 4.5,
    category: "Electronics",
    reviewsCount: 430,
    totalSold: 2100,
    brand: "Anker",
    color: "Black",
    isAddedToWishlist: false,
    isAddedToCart: true,
    images: ["https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg"],
    shopName: "ChargePoint"
  },
  {
    productName: "Wireless Earbuds",
    price: 89.99,
    ratings: 4.8,
    category: "Electronics",
    reviewsCount: 600,
    totalSold: 3100,
    brand: "Sony",
    color: "White",
    isAddedToWishlist: true,
    isAddedToCart: false,
    images: ["https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg"],
    shopName: "Audio World"
  },
  {
    productName: "Yoga Mat",
    price: 29.99,
    ratings: 4.4,
    category: "Fitness",
    reviewsCount: 150,
    totalSold: 740,
    brand: "Adidas",
    color: "Green",
    isAddedToWishlist: false,
    isAddedToCart: false,
    images: ["https://images.pexels.com/photos/4812956/pexels-photo-4812956.jpeg"],
    shopName: "Fit Life"
  },
  {
    productName: "Women’s Denim Jacket",
    price: 69.99,
    ratings: 4.6,
    category: "Clothing",
    reviewsCount: 260,
    totalSold: 1200,
    brand: "Levi’s",
    color: "Blue",
    isAddedToWishlist: true,
    isAddedToCart: false,
    images: ["https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"],
    shopName: "Trendy Wear"
  },
  {
    productName: "Stainless Steel Watch",
    price: 119.0,
    ratings: 4.7,
    category: "Accessories",
    reviewsCount: 420,
    totalSold: 1350,
    brand: "Casio",
    color: "Silver",
    isAddedToWishlist: false,
    isAddedToCart: false,
    images: ["https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg"],
    shopName: "Time Hub"
  },
  {
    productName: "Portable Vacuum Cleaner",
    price: 85.99,
    ratings: 4.3,
    category: "Home Appliances",
    reviewsCount: 310,
    totalSold: 950,
    brand: "Dyson",
    color: "Gray",
    isAddedToWishlist: false,
    isAddedToCart: true,
    images: ["https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg"],
    shopName: "HomeTech Store"
  },
  {
    productName: "Wooden Sunglasses",
    price: 25.99,
    ratings: 4.2,
    category: "Accessories",
    reviewsCount: 95,
    totalSold: 410,
    brand: "Woodies",
    color: "Brown",
    isAddedToWishlist: true,
    isAddedToCart: false,
    images: ["https://images.pexels.com/photos/4812956/pexels-photo-4812956.jpeg"],
    shopName: "Sunny Shades"
  }
];

const BestProducts = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>BestProducts</Text>
          <Text style={styles.filterLabel}>Filters</Text>
        </View>

        <FlatList
          data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Productcard data={item} />}
          numColumns={2}
          contentContainerStyle={styles.productsContainer}
          columnWrapperStyle={styles.row}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingBottom: 50,
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  filterLabel: {
    fontSize: 12,
    color: '#ff626a',
  },
  productsContainer: {
    gap: 10,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default BestProducts;