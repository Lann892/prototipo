import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TransitionPresets } from "@react-navigation/stack";

const RecipieDetail = ({ route }: any) => {
  const { url, title, description } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      ...TransitionPresets.ModalPresentationIOS, // Aplicar la animación de transición modal
    });
  }, []);

  // Ejemplo de datos de receta
  const ingredients = ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"];
  const steps = ["Paso 1", "Paso 2", "Paso 3"];
  const story = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.closeButtonText}>Cerrar</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={{ uri: url }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.subtitle}>Ingredientes:</Text>
      {ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.listItem}>
          - {ingredient}
        </Text>
      ))}
      <Text style={styles.subtitle}>Pasos:</Text>
      {steps.map((step, index) => (
        <Text key={index} style={styles.listItem}>
          {index + 1}. {step}
        </Text>
      ))}
      <Text style={styles.subtitle}>Historia:</Text>
      <Text style={styles.story}>{story}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  closeButton: {
    alignSelf: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  closeButtonText: {
    color: "#888",
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: "#666",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
    color: "#666",
  },
  story: {
    fontSize: 16,
    color: "#666",
  },
});

export default RecipieDetail;
