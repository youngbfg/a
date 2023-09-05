"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import styles from "./styles.module.css";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import "moment/locale/tr";

async function getPost(id) {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export default async function Page({ params }) {
  const { id, title, body, userId } = await getPost(params.id);
  if (!title) {
    return notFound();
  }

  return (
    <div className={styles.blogContainer}>
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/960/400?random=${id}`}
          alt="/"
          fill
        />
      </div>
      <div className={styles.smallImage}>
        <img
          alt="/"
          className={styles.smallImage}
          src={`https://picsum.photos/960/400?random=${id}`}
        />
        <div className={styles.text}>userId:{userId}</div>
        <div className={styles.texts}>8 Mayıs 2023 / İstanbul </div>
      </div>
      <div className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-50 dark:opacity-50"></div>
      <div className={styles.icona}>
        <FacebookShareButton url={`http://10.1.245.102:3000/${id}`}>
          <AiFillFacebook size={27} />
        </FacebookShareButton>
        <TwitterShareButton url={`http://192.168.68.111:3000/${id}`}>
          <AiFillTwitterCircle size={27} />
        </TwitterShareButton>
        <LinkedinShareButton url={`http://192.168.68.111:3000/${id}`}>
          <AiFillLinkedin size={27} />
        </LinkedinShareButton>
        <WhatsappShareButton url={`http://192.168.68.111:3000/${id}`}>
          <AiOutlineWhatsApp size={27} />
        </WhatsappShareButton>
      </div>
      <div className={styles.title}>{title}</div>
      <p className={styles.titles}>{body}</p>
      <div className={styles.iconas}>
        <FacebookShareButton url={`http://10.1.245.102:3000/${id}`}>
          <AiFillFacebook size={27} />
        </FacebookShareButton>
        <TwitterShareButton url={`http://192.168.68.111:3000/${id}`}>
          <AiFillTwitterCircle size={27} />
        </TwitterShareButton>
        <LinkedinShareButton url={`http://192.168.68.111:3000/${id}`}>
          <AiFillLinkedin size={27} />
        </LinkedinShareButton>
        <WhatsappShareButton url={`http://192.168.68.111:3000/${id}`}>
          <AiOutlineWhatsApp size={27} />
        </WhatsappShareButton>
      </div>
    </div>
  );
}