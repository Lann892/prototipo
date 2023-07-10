import React from "react";
import { Text, StyleSheet, View, FlatList, Pressable } from "react-native";
import Recipie from "../components/Recipie";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

interface RecipeData {
  title: string;
  description: string;
  url: string;
}

const Main: React.FC<{}> = () => {
  const data: RecipeData = {
    title: "Té de óregano",
    description:
      "El té de orégano ayuda a reducir las molestias estomacales que se producen tras las comidas como la acidez o el reflujo.",
    url: "https://www.gastrolabweb.com/u/fotografias/m/2022/1/26/f850x638-24785_102274_5050.jpg",
  };

  return (
    <View style={styles.container}>
      <View style={styles.encabezado}>
        <Text style={styles.text}>Recetario</Text>
        <Pressable>
          <FontAwesome name="search" size={24} color="black" />
        </Pressable>
      </View>
      <ScrollView
        style={{
          marginBottom: 30,
        }}>
        <Recipie
          title={data.title}
          description={data.description}
          url={data.url}
        />
        <Recipie
          title={data.title}
          description={data.description}
          url={data.url}
        />
        <Recipie
          title={data.title}
          description={data.description}
          url={data.url}
        />
        <Recipie
          title={data.title}
          description={data.description}
          url={data.url}
        />
        <Recipie
          title={data.title}
          description={data.description}
          url={data.url}
        />
        <Recipie
          title={data.title}
          description={data.description}
          url={data.url}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 15,
  },
  text: {
    fontWeight: "600",
    color: "black",
    fontSize: 20,
    letterSpacing: 1,
    paddingBottom: 5,
  },
  encabezado: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 10,
  },
});

export default Main;
