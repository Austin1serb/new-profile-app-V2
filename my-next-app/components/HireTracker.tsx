import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const HireTracker: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const ONE_HOUR = 60 * 60 * 1000; // One hour in milliseconds
  const LOCAL_STORAGE_KEY = "lastHashEmails";
  const [hash, setHash] = React.useState("");

  useEffect(() => {
    const currentHash = window.location.hash;
    setHash(currentHash);

    // Check if the email should be sent for the current hash
    if (hash && shouldSendEmail(currentHash)) {
      sendNotification(currentHash);
    }
  }, [hash]);

  const shouldSendEmail = (hash: string): boolean => {
    const emailTimestamps = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || "{}"
    );

    const lastTimestamp = emailTimestamps[hash];
    const now = Date.now();

    if (!lastTimestamp) {
      // If no timestamp exists for this hash, email should be sent
      return true;
    }

    const elapsedTime = now - lastTimestamp;

    // Check if one hour has passed since the last email for this hash
    return elapsedTime > ONE_HOUR;
  };

  const sendNotification = async (hash: string) => {
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = "template_yxprl1c";

    try {
      if (!userId || !serviceId || !templateId) {
        console.error("Missing required EmailJS environment variables");
        return;
      }

      // Send the email
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current as HTMLFormElement,
        userId
      );

      console.log(`Notification email sent for ${hash}!`);

      // Update the timestamp for this hash in localStorage
      const emailTimestamps = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY) || "{}"
      );
      emailTimestamps[hash] = Date.now();
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(emailTimestamps));
    } catch (error) {
      console.error(`Failed to send notification email for ${hash}:`, error);
    }
  };

  return (
    <form ref={formRef} style={{ display: "none" }}>
      {/* Hidden fields to send data */}
      <input
        type="hidden"
        name="message"
        value={`Someone visited your site! ${hash}`}
      />
    </form>
  );
};

export default HireTracker;
