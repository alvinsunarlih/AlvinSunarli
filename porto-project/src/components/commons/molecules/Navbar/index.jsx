import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoxLanguege from "../../atoms/BoxLanguege";
import BoxProfile from "../../atoms/BoxProfile";
import SearchInput from "../../atoms/SearchInput";

const Navbar = () => {
  const navigate = useNavigate();
  const [translate, setTranslate] = useState("en");
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const translations = {
    en: {
      home: "Home",
      about: "About",
      certificate: "Certificate",
      menu: "Menu",
    },
    id: {
      home: "Beranda",
      about: "Tentang",
      certificate: "Sertifikat",
      menu: "Menu",
    },
    fr: {
      home: "Accueil",
      about: "À propos",
      certificate: "Certificat",
      menu: "Menu",
    },
    DL: {
      home: "DL Home",
      about: "DL About",
      certificate: "DL Cert",
      menu: "DL Menu",
    },
  };

  const listNavbar = [
    { name: translations[translate].home, path: "/" },
    { name: translations[translate].about, path: "/about" },
    { name: translations[translate].certificate, path: "/certificate" },
  ];

  return (
    <>
      <header className="absolute top-4 right-4 z-50 mt-2 flex h-12 w-[var(--my-width-nav)] items-center justify-between bg-transparent px-4">
        <section className="flex items-center gap-3">
          {/* Menu Button */}
          <div className="flex items-center gap-3 rounded-full bg-[var(--bg-primary-cray)] px-4 py-1">
            <p className="font-barlow text-sm font-semibold text-[var(--text-color-black)]">
              {translations[translate].menu}
            </p>
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--bg-secondary-cray)] hover:opacity-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className="fa-solid fa-bars text-[var(--text-color-black)] text-sm"></i>
            </button>
          </div>

          {/* Language Selector */}
          <BoxLanguege translate={translate} setTranslate={setTranslate} />
        </section>

        {/* Search & Profile (desktop only) */}
        <section className="flex items-center gap-3 max-md:hidden">
          <SearchInput
            value={search}
            onChange={(val) => setSearch(val)}
            onSearch={(val) => console.log("Search value:", val)}
          />
          <BoxProfile
            name="Alvin Sunarli"
            onClick={() => console.log("Profile clicked")}
            picture="/images/alvin bg.jpg"
          />
        </section>
      </header>

      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-black/50 transition-opacity duration-300 ${
          isOpen ? "z-40 opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-screen w-64 bg-[var(--bg-secondary-cray)] transition-transform duration-300 ${
          isOpen ? "z-50 translate-x-0" : "translate-x-full z-40"
        }`}
      >
        <div className="relative flex h-full flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
          >
            <i className="fa-solid fa-xmark text-[var(--text-color-black)] text-lg"></i>
          </button>

          {listNavbar.map((item, index) => (
            <p
              key={index}
              className="w-full cursor-pointer px-6 py-3 text-lg font-semibold text-[var(--text-color-black)] opacity-80 transition duration-300 hover:bg-[var(--bg-primary-cray)] hover:opacity-100"
              onClick={() => {
                navigate(item.path);
                setIsOpen(false);
              }}
            >
              {item.name}
            </p>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Navbar;
