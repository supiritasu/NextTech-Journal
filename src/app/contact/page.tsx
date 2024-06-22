import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { ContainerWithChildren } from "postcss/lib/container";
import { Contact } from "@/app/_components/contact";
import Header from "../_components/header";


export default function Index() {
  
  return (
    <>
    <Header/>
    <main>
      <Contact />
    </main>
    </>
  );
}