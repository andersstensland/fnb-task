function LanguageSelector({ onChange, currentLanguage, languages }) {
  return (
    <select value={currentLanguage} onChange={(e) => onChange(e.target.value)}>
      {/*languages.map((lang) => (
        <option key={lang.id} value={lang.id}>
          {lang.title}
        </option>
      ))*/}
    </select>
  );
}
export default LanguageSelector;
