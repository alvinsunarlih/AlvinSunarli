const languages = [
  { id: "en", name: "EN" },
  { id: "id", name: "ID" },
  { id: "fr", name: "FR" },
  { id: "DL", name: "DL" },
];

const BoxLanguage = ({ translate, setTranslate }) => {
  return (
    <div className="flex h-10 items-center justify-center gap-2 text-sm px-2 py-1 bg-[var(--bg-primary-cray)] rounded-full">
      <i className="fa-solid fa-globe text-[var(--text-color-black)] text-sm"></i>
      {languages.map((language) => (
        <p
          key={language.id}
          className={`cursor-pointer text-[var(--text-color-black)] ${
            translate === language.id
              ? "font-bold opacity-100"
              : "opacity-70 hover:opacity-100"
          }`}
          onClick={() => setTranslate(language.id)}
        >
          {language.name}
        </p>
      ))}
    </div>
  );
};

export default BoxLanguage;
