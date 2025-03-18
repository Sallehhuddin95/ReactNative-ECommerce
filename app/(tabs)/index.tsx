import {
  Image,
  StyleSheet,
  Pressable,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import TextInput from "@/app/components/TextInput";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useState } from "react";

const categories = ["Electronics", "Clothing", "Home", "Beauty", "Toys"];
const featuredProducts = [
  {
    id: "1",
    name: "Smartphone",
    image: "",
  },
  { id: "2", name: "Sneakers", image: "" },
  { id: "3", name: "Laptop", image: "" },
];

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        {/* Search Bar */}
        <TextInput
          placeholder="Search for products..."
          value={search}
          onChangeText={setSearch}
          style={styles.searchBar}
        />

        <Link href="/cart" asChild style={styles.cart}>
          <Pressable>
            <IconSymbol size={28} name="cart.fill" color={"blue"} />
          </Pressable>
        </Link>
      </View>
      {/* Banner */}
      <Image
        source={{ uri: "https://via.placeholder.com/300x150" }}
        style={styles.banner}
      />

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Featured Products */}
      <Text style={styles.sectionTitle}>Featured Products</Text>
      <FlatList
        horizontal
        data={featuredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  searchBar: {
    width: "100%",
    marginBottom: 16,
  },
  cart: {
    height: 40,
    marginVertical: 12,
    marginHorizontal: 5,
    paddingVertical: 10,
  },
  banner: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  categoryItem: {
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 8,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "500",
  },
  productItem: {
    width: 120,
    marginRight: 10,
    alignItems: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});
