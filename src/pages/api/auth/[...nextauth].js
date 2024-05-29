import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../../lib/knex";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const { username, password } = credentials;

        const user = await db("usuarios").where({ username }).first();

        if (user && user.password === password) {
          return { id: user.id, name: user.username };
        } else {
          return null;
        }
      }
    })
  ],
  session: {
    jwt: true
  },
  pages: {
    signIn: "/login"
  }
});
