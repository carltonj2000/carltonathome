import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log({ user, email, profile, account, credentials });
      const isAllowedToSignIn =
        email === "carlton.joseph@gmail.com" || user === "carltonj2000";
      if (isAllowedToSignIn) {
        return true;
      } else {
        return "/unauthorized"; // or false
      }
    },
    //   async redirect({ url, baseUrl }) {
    //     // Allows relative callback URLs
    //     if (url.startsWith("/")) return `${baseUrl}${url}`;
    //     // Allows callback URLs on the same origin
    //     else if (new URL(url).origin === baseUrl) return url;
    //     return baseUrl;
    //   },
  },
};

export default authOptions;
