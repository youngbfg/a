import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span>HABERLER</span>
      </Link>
    </header>
  );
}

export default Header;
