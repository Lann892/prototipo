import React from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

const newsData = [
  {
    id: "1",
    title: "Lo último",
    description: "¿Qué es What Young People Want?",
    imageUrl:
      "https://static.wixstatic.com/media/c1e164_e30d8e7fcc0c4cbe83c6538be8a55ec4~mv2.png/v1/fill/w_842,h_842,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c1e164_e30d8e7fcc0c4cbe83c6538be8a55ec4~mv2.png",
  },
  {
    id: "4",
    title: "Mira el video",
    description:
      "¡Echa un vistazo a nuestro último video para obtener más información sobre la campaña!",
    imageUrl: "https://youtu.be/E6_ERqyI8nA",
  },
];

const News: React.FC<{}> = () => {
  const renderNewsItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.newsItemContainer}
      onPress={() => openUrl(item.imageUrl)}>
      <View style={styles.newsContent}>
        <Image style={styles.newsImage} source={{ uri: item.imageUrl }} />
        <View style={styles.newsTextContainer}>
          <Text style={styles.newsTitle}>{item.title}</Text>
          <Text style={styles.newsDescription}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const openUrl = (url: any) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.newsSectionTitle}>Últimas noticias</Text>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        renderItem={renderNewsItem}
        contentContainerStyle={styles.newsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  newsSectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  newsList: {
    paddingBottom: 20,
  },
  newsItemContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    elevation: 4,
    overflow: "hidden",
  },
  newsContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  newsImage: {
    width: 120,
    height: 120,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  newsTextContainer: {
    flex: 1,
    padding: 15,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  newsDescription: {
    fontSize: 14,
    color: "#666",
  },
});

export default News;
