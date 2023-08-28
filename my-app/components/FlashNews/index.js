"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";

import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import moment from "moment";
import "moment/locale/tr";

export default async function FlashNews({ title, body, id }) {
  return (
     <div>
    <Link href={`/${id}`} className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/200/300?random=${id}`}
          alt="Blog Card Image"
          fill
        />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.body}>{body}</p> 
        <div className={styles.time}>{moment(id).format("LLL")}</div>
        <button className={styles.buttons}>Daha fazla Oku</button>
        <div className={styles.icons}>
        <FacebookShareButton url={`http://10.1.245.102:3000/${id}`}>
          <AiFillFacebook size={22} />
        </FacebookShareButton>
        <LinkedinShareButton url={`http://192.168.68.111:3000/${id}`}>
          <AiFillLinkedin size={22}  />
        </LinkedinShareButton>
        <TwitterShareButton url={`http://192.168.68.111:3000/${id}`}>
          <AiFillTwitterCircle  size={22} />
        </TwitterShareButton>
        <WhatsappShareButton url={`http://192.168.68.111:3000/${id}`}>
          <AiOutlineWhatsApp size={22}  />
        </WhatsappShareButton>
        </div>
      </div>
     
    </Link>
    
    </div>
  );
}

