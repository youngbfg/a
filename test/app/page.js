import styles from "./styles.module.css";
import BlogCard from "../components/BlogCard";
import FlashNews from "../components/FlashNews";
import { useMatches } from "react-router-dom";

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts?limit=8");
  return response.json();
}

async function getPostss() {
  const response = await fetch("https://dummyjson.com/posts?limit=1");
  return response.json();
}

export default async function Home() {
  const { posts } = await getPosts();
  const apiUrl =  await getPostss();

  return (
    <div >
      <div>
      {apiUrl?.posts.map((post) => (
        <FlashNews key={post.id} {...post}/>
      ))}
      </div>
      <div className={styles.card}>
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
