import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "@react-native-vector-icons/feather";
import { useNavigation } from "@react-navigation/native";

type BackComponentProps = {
  title?: string;
}

const BackComponent = ({ title }: BackComponentProps) => {
  const { goBack } = useNavigation();

  return (
    <>
      <View style={styles.headingWrapper}>
        <Pressable
          onPress={() => goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-left" size={20} color="#000" />
          <Text style={styles.titleText}>{title}</Text>
        </Pressable>
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
  },
  titleText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  backButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  }
});

export default BackComponent;