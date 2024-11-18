"use client";
import "./Profile.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
export default function ProfileContent({ picture, username, useremail, user }) {
  const t = useTranslations("Profile");

  return (
    <section className="profile-section">
      <div className="profile-container">
        <h1 className="profile-title">{t("profile")}</h1>
        <p className="profile-intro">{t("react")}</p>
        <div className="profile-layout">
          <div className="profile-about">
            <h4>{t("about")}</h4>
            <p>{t("text")}</p>
          </div>
          <div className="profile-image">
            {user && (
              <Image
                src={picture}
                alt={username}
                width={200}
                height={200}
                className="profile-pic"
              />
            )}
          </div>
          <div className="profile-details">
            <h4>{t("details")}</h4>
            <div>
              <span className="bold-text">
                {t("name")}:{user && <p>{username}</p>}
              </span>

              <span className="bold-text">
                {t("email")}:{user && <p>{useremail} </p>}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
