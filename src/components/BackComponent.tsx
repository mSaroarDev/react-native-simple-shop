import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "@react-native-vector-icons/feather";
import { useNavigation } from "@react-navigation/native";

type BackComponentProps = {
  title?: string;
}

const BackComponent = ({ title }: BackComponentProps) => {
  const { navigate } = useNavigation();

  return (
    <>
      <View style={styles.headingWrapper}>
        <Pressable
          onPress={() => navigate("Home" as never)}
        >
          <Icon name="arrow-left" size={20} color="#000" />
        </Pressable>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headingWrapper: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingLeft: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  }
});

export default BackComponent;