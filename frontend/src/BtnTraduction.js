import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css"; 
import Fr from "./Images/fr.png";
import En from "./Images/en.png";

export default function LangSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  // Tableau des langues avec les bonnes icônes
  const languages = [
    { code: "en", Icon: En },
    { code: "fr", Icon: Fr },
  ];

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="lang-switcher">
      {/* Bouton principal */}
      <button className="lang-btn" onClick={() => setOpen(!open)}>
        <img src={currentLang.Icon} alt={currentLang.code} className="flag-icon" />
      </button>

      {/* Menu déroulant */}
      {open && (
        <div className="lang-dropdown">
          {languages
            .filter((l) => l.code !== currentLang.code)
            .map((l) => (
              <div
                key={l.code}
                className="lang-option"
                onClick={() => changeLang(l.code)}
              >
                <img src={l.Icon} alt={l.code} className="flag-icon" />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
