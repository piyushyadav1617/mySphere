import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql_schema";
import { resolvers } from "./resolvers/resolvers";
import Jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";



async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => {
      const token = req.headers.authorization?.split(" ")[1]; // Bearer token
      if (!token) return { user: null };
      try {
        const decoded = Jwt.verify(token, JWT_SECRET);
        return { user: decoded };
      } catch (error) {
        if (error instanceof Jwt.JsonWebTokenError) {
          return { user: null };
        }
        console.error(error)
        throw error;
      }

    },

    listen: { port: 3000, path: "/graphql" }
  });
  console.log(`🚀 Server running at ${url}.You canq querry on http://localhost:3000/graphql`);
}
startApolloServer();