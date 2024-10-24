import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

import { connectToDB } from "@mongodb/database";
import User from "@models/User";

const handler = NextAuth({
  providers: [
    // Google OAuth Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    // Credentials (Email and Password) Provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "you@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Ensure both email and password are provided
        if (!credentials.email || !credentials.password) {
          throw new Error("Email and password are required.");
        }

        // Connect to MongoDB database
        await connectToDB();

        // Check if the user exists in the database
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No user found with this email.");
        }

        // Compare the entered password with the stored hashed password
        const isPasswordValid = await compare(
          credentials.password,
          user.password
        );
        if (!isPasswordValid) {
          throw new Error("Invalid email or password.");
        }

        // If password matches, return the user object
        return { id: user._id, email: user.email, name: user.username };
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    // Handle session management
    async session({ session, token }) {
      // Attach the user ID and other relevant data to the session object
      if (token) {
        session.user.id = token.sub;
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },

    // Handle JWT token generation and include user data
    async jwt({ token, user }) {
      // If user object exists (i.e., after logging in), append to the token
      if (user) {
        token.sub = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },

    // Handle sign-in for Google OAuth
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        try {
          await connectToDB();

          // Check if the user already exists in the database
          let user = await User.findOne({ email: profile.email });

          // If user doesn't exist, create a new user
          if (!user) {
            user = await User.create({
              email: profile.email,
              username: profile.name,
              profileImagePath: profile.picture,
              wishlist: [],
              cart: [],
              order: [],
              work: [],
            });
          }

          return true;
        } catch (error) {
          console.error("Error checking if user exists: ", error.message);
          return false;
        }
      }
      return true;
    },
  },

  // Define custom pages
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error", // Custom error page for authentication errors
  },

  // Enable debug logging
  debug: false,
});

export { handler as GET, handler as POST };
