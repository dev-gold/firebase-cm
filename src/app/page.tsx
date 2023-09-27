"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { onMessageListener, requestForToken } from "@/utils/firebase";
import { toast } from "react-toastify";

export default function Home() {
  const [notificationsShow, setNotificacionShow] = useState(false);

  const [notification, setNotification] = useState({ title: "", body: "" });

  useEffect(() => {
    if (notification?.title) {
      toast(
        <div>
          <p>
            <b>{notification?.title}</b>
          </p>
          <p>{notification?.body}</p>
        </div>
      );
    }
  }, [notification]);

  requestForToken();

  onMessageListener()
    .then((payload: any) => {
      setNotification({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
      });
    })
    .catch((err) => console.log("failed: ", err));
  return <main className={styles.main}></main>;
}
