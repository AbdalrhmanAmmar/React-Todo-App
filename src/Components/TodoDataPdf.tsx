import { Document, Page, Text, StyleSheet, View } from "@react-pdf/renderer";
import { ITask } from "../Interfaces";

interface Iprops {
  TodoList: ITask[];
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
function MyDocument({ TodoList }: Iprops) {
  const tasks = TodoList;

  console.log(TodoList);
  // No return statement needed anymore
  return (
    <Document>
      <Page style={styles.body}>
        <button>hello</button>

        <Text style={styles.title}>Your Tasks</Text>
        <View style={styles.container}>
          <Text style={styles.listItem}>Task</Text>
          <Text style={styles.listItem}>Date</Text>
          <Text style={styles.listItem}>Time</Text>
          <Text style={styles.listItem}>Option</Text>
        </View>
        {tasks.map((task) => (
          <View style={styles.container}>
            {" "}
            // Added key for better performance
            <Text style={styles.listItem}>{task.YourTask}</Text>
            <Text style={styles.listItem}>{task.Date}</Text>
            <Text style={styles.listItem}>{task.Time}</Text>
            <Text style={styles.listItem}></Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}
export default MyDocument;
