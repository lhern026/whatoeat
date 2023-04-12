import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react"; // import state
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import RecipeEntries from "../components/Recipes/RecipeEntries";
import { api } from "../utils/api";

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <main className="flex flex-col items-center pt-4 ">Loading...</main>;
  }

  return (
    <div className="container mx-auto mb-8 px-8">
      <Header />
      <Hero />
      <RecipeEntries />
    </div>
  );
};

export default Home;
