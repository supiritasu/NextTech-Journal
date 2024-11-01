import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Header from "./_components/header";
import  Genere  from "./_components/genre";
import Hero from "./_components/hero";
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Index() {
  const allPosts = getAllPosts();


  const morePosts = allPosts.slice();

  return (
    <main>
      <Container>
        <Intro />
        <Hero/>
      </Container>

      <Container>
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
      <Genere/>

    </main>
  );
}

