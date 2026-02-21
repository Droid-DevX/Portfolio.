import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useSendEmail = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = async (formRef: React.RefObject<HTMLFormElement>) => {
    if (!formRef.current) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      return { type: "success" };
    } catch (error) {
      return { type: "error" };
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading };
};