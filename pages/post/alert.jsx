// Alert.jsx
import React from "react";
import styles from "./alert.module.css";
import { clsx } from "clsx";

export default function alert({ children, type }) {
  return (
    <div
      className={clsx({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      <h1>hello</h1>
      <main>{children}</main>
    </div>
  );
}
