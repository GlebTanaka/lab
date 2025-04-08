import java.util.ArrayList;
import java.util.HashMap;

public class Graph {

    private HashMap<String, ArrayList<String>> adjList = new HashMap<>();

    public boolean addVertex(String vertex) {
        if (adjList.containsKey(vertex)) {
            return false;
        }
        adjList.put(vertex, new ArrayList<>());
        return true;
    }

    public boolean addEdge(String src, String dest) {
        // Check if both vertices exist
        if (!adjList.containsKey(src) || !adjList.containsKey(dest)) {
            return false; // One or both vertices do not exist
        }

        // Add the edge
        adjList.get(src).add(dest);
        adjList.get(dest).add(src);
        return true; // Edge successfully added
    }

    public void addEdgeWithVertex(String src, String dest) {
        // Add the vertices if they don't already exist
        adjList.putIfAbsent(src, new ArrayList<>());
        adjList.putIfAbsent(dest, new ArrayList<>());

        // Add the edge
        adjList.get(src).add(dest);
        adjList.get(dest).add(src);
    }

    public boolean removeEdge(String src, String dest) {
        // Check if both vertices exits
        if (!adjList.containsKey(src) || !adjList.containsKey(dest)) {
            return false; // One or both vertices do not exist
        }

        adjList.get(src).remove(dest);
        adjList.get(dest).remove(src);
        return true;
    }

    public boolean removeVertex(String vertex) {
        // Check if the vertex exists
        if (!adjList.containsKey(vertex)) {
            return false; // Vertex doesn't exist, nothing to remove
        }

        // Remove the vertex from the adjacency lists of its neighbors
        for (String neighbor : adjList.get(vertex)) {
            adjList.get(neighbor).remove(vertex);
        }

        // Remove the vertex itself from the graph
        adjList.remove(vertex);

        return true; // Successfully removed the vertex
    }

    public void printGraph() {
        for (String vertex : adjList.keySet()) {
            System.out.print(vertex + " -> ");
            System.out.println(adjList.get(vertex));
        }
    }
}