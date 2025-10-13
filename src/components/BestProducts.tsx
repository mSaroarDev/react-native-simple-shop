import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Productcard from "./Productcard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { useNavigation } from "@react-navigation/native";

export const products = [
  {
    id: 1,
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
    shopName: "Tech Haven",
    description: "Experience high-quality sound with these wireless Bluetooth headphones. Perfect for music lovers and on-the-go listening."
  },
  {
    id: 2,
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
    shopName: "Urban Sports",
    description: "Lightweight and comfortable running shoes designed for optimal performance. Ideal for daily runs and workouts."
  },
  {
    id: 3,
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
    shopName: "HomeTech Store",
    description: "Enjoy vibrant visuals and smart features with this 43-inch LED TV. Stream your favorite shows and movies effortlessly."
  },
  {
    id: 4,
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
    shopName: "Elite Fashion",
    description: "Stylish and durable leather office bag with multiple compartments. Perfect for professionals on the go."
  },
  {
    id: 5,
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
    shopName: "Eco Living",
    description: "Keep your drinks cold or hot for hours with this eco-friendly stainless steel water bottle."
  },
  {
    id: 6,
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
    shopName: "Tech World",
    description: "Precision and speed combined with customizable RGB lighting for an immersive gaming experience."
  },
  {
    id: 7,
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
    shopName: "Fit Life",
    description: "Track your daily steps, heart rate, and sleep with this sleek smart fitness band."
  },
  {
    id: 8,
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
    shopName: "Fashion Hub",
    description: "Soft, breathable cotton T-shirt that ensures comfort and style for everyday wear."
  },
  {
    id: 9,
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
    shopName: "Office Zone",
    description: "Spacious and water-resistant laptop backpack perfect for travel, work, and study."
  },
  {
    id: 10,
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
    shopName: "Tech Haven",
    description: "Slim and stylish wireless keyboard with quiet keys for a comfortable typing experience."
  },
  {
    id: 11,
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
    shopName: "Kitchen World",
    description: "Elegant ceramic coffee mug set perfect for home, office, or gifting occasions."
  },
  {
    id: 12,
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
    shopName: "Sound House",
    description: "Portable Bluetooth speaker with deep bass and long-lasting battery life."
  },
  {
    id: 13,
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
    shopName: "Style Studio",
    description: "Trendy women’s handbag made with premium materials for both style and functionality."
  },
  {
    id: 14,
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
    shopName: "ChargePoint",
    description: "High-capacity power bank with fast charging support for all your devices on the go."
  },
  {
    id: 15,
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
    shopName: "Audio World",
    description: "Enjoy crystal-clear sound and noise cancellation with these premium wireless earbuds."
  },
  {
    id: 16,
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
    shopName: "Fit Life",
    description: "Durable, non-slip yoga mat designed for comfort and stability during workouts."
  },
  {
    id: 17,
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
    shopName: "Trendy Wear",
    description: "Classic denim jacket for women that adds a timeless look to any outfit."
  },
  {
    id: 18,
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
    shopName: "Time Hub",
    description: "Elegant stainless steel watch that combines precision with a sophisticated design."
  },
  {
    id: 19,
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
    shopName: "HomeTech Store",
    description: "Powerful and compact vacuum cleaner ideal for quick cleanups and car interiors."
  },
  {
    id: 20,
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
    shopName: "Sunny Shades",
    description: "Eco-friendly wooden sunglasses with UV protection and a stylish, lightweight design."
  }
];

type BestProductsProps = NativeStackScreenProps<RootStackParamList, "Home">;

const BestProducts = () => {
  const navigation = useNavigation<BestProductsProps["navigation"]>();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Best Products</Text>
          <Text style={styles.filterLabel}>Filters</Text>
        </View>

        <FlatList
          data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate('DetailsScreen', { productId: item.id })}
            >
              <Productcard data={item} />
            </Pressable>
          )}
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
    gap: 5,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default BestProducts;