import Head from "next/head";
import { Text } from "@chakra-ui/react";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { DnD } from "../components/DnD";
// import { Recipes } from "../../client/components/recipes";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Premium Recipes</title>
        <meta name="description" content="Clerk-Firebase integration" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <SignedIn>
          {/* <Recipes /> */}
          <DnD />
        </SignedIn>
        <SignedOut>
          <Text>Sign in to see inside!</Text>
        </SignedOut>
      </main>
    </div>
  );
}
