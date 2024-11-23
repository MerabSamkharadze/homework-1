import React from "react";
import "./Contact.css";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");
  return (
    <section className="contact-section">
      <div className="container34">
        <div className="contactInfo">
          <div>
            <h2>{t("contact")}</h2>
            <ul className="info">
              <li>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-filled/50/marker.png"
                    alt="marker"
                  />
                </span>
                <span>
                  {t("address")}
                  <br />
                  3000
                </span>
              </li>
              <li>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-filled/50/mail.png"
                    alt="mail"
                  />
                </span>
                <span>desmondjeon@gmail.com</span>
              </li>
              <li>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-filled/50/phone.png"
                    alt="phone"
                  />
                </span>
                <span>0481-111-1111</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="contactForm">
          <h2>{t("h1")}</h2>
          <form className="formBox">
            <div className="inputBox w50">
              <span>{t("first-name")}</span>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                placeholder={t("first-name")}
              />
            </div>
            <div className="inputBox w50">
              <span>{t("last-name")}</span>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                placeholder={t("last-name")}
              />
            </div>
            <div className="inputBox w50">
              <span>{t("email")}</span>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder={t("email")}
              />
            </div>
            <div className="inputBox w50">
              <span>{t("mobile")}</span>
              <input
                type="text"
                name="mobileNumber"
                id="mobileNumber"
                required
                placeholder={t("mobile")}
              />
            </div>
            <div className="inputBox w100">
              <textarea
                name="message"
                id="message"
                required
                placeholder={t("text-area")}
              ></textarea>
            </div>
            <div className="inputBox w100">
              <input type="submit" value={t("submit")} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
