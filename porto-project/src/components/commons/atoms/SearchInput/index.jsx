const SearchInput = ({ value, onChange, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(value);
    }
  };

  return (
    <div className="flex h-10 w-auto items-center justify-center gap-1 rounded-full bg-[var(--bg-primary-cray)] px-2">
      <input
        className="ml-2 bg-transparent text-[var(--text-color-black)] placeholder:text-[var(--text-color-grey)] focus:outline-none"
        type="text"
        placeholder="Searching..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[var(--bg-secondary-cray)] hover:opacity-100"
        onClick={() => onSearch(value)}
      >
        <i className="fa-solid fa-magnifying-glass text-[var(--text-color-black)] text-sm"></i>
      </button>
    </div>
  );
};

export default SearchInput;
