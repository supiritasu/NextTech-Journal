import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Header from "./_components/header";
import { ContainerWithChildren } from "postcss/lib/container";
import { Contact } from "./_components/contact";
import { Genere } from "./_components/genre";
export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
     <Header />
      <Container>
        
        
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
          tags={heroPost.tags}
        />

        
      </Container>

      <Genere/>

      <Container>
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
      
      <hr/>
      <Contact />
    </main>
  );
}