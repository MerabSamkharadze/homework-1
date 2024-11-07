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
          <div>Get template</div>
          <div>Learn more</div>
        </div>
      </div>
    </div>
  );
}
