import React from "react";
import { Document, Page, Text, StyleSheet, View } from "@react-pdf/renderer";

interface Iprops {
  hello: string;
}

// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 35,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "blue",
    paddingVertical: 7,
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
    width: "100%",
  },
  listItem: {
    flex: 1,
    textAlign: "center",
  },
});

// Create Document Component
export const MyDocument = ({ hello }: Iprops) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.title}>Your Task</Text>
      <View style={styles.container}>
        <Text style={styles.listItem}>Tasks</Text>
        <Text style={styles.listItem}>Date</Text>
        <Text style={styles.listItem}>Time</Text>
        <Text style={styles.listItem}>Option</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.listItem}>Tasks</Text>
        <Text style={styles.listItem}>Date</Text>
        <Text style={styles.listItem}>Time</Text>
        <Text style={styles.listItem}>{hello}</Text>
      </View>
    </Page>
  </Document>
);
