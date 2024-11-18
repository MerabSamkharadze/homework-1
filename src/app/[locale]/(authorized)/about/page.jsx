import "./About.css";
import { useTranslations } from "next-intl";

export default function about() {
  const t = useTranslations("About");
  return (
    <div className="about-container">
      <div className="about-us">
        <h1>{t("heading")}</h1>
        <p>{t("text-1")}</p>
        <p>{t("text-2")}</p>
        <div className="about-buttons">
          <div>{t("button-1")}</div>
          <div>{t("button-2")}</div>
        </div>
      </div>
    </div>
  );
}
