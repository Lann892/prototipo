import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

interface RecipeProps {
  url: string;
  title: string;
  description: string;
}

const Recipie: React.FC<RecipeProps> = ({ url, title, description }) => {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      style={styles.recipeContainer}
      onPress={() =>
        navigation.navigate("Detail", { url, title, description })
      }>
      <Image style={styles.image} source={{ uri: url }} />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  recipeContainer: {
    flexDirection: "row",
    padding: 15,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 3,
    color: "#333",
  },
  description: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
  },
});

export default Recipie;
