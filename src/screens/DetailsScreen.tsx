import { Pressable, StyleSheet, View } from "react-native";
import BackComponent from "../components/BackComponent";
import Icon from "@react-native-vector-icons/feather";

const DetailsScreen = () => {
    return (
        <>
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
        </>
    );
};

const styles = StyleSheet.create({
  topBar: {
    height: 60,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  actionButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  }
});

export default DetailsScreen;