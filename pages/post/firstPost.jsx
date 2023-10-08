import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";
import styles from './firstPost.module.css'
const firstPost = () => {
  return (
    <Layout >
      <div className={styles.contaier}>
      <h1 className={styles.heading1}>First Post</h1>
      <h2 className={styles.heading2}>
        <Link href="/">Back to Home</Link>
      </h2>
      </div>
    </Layout>
  );
};
export default firstPost;
