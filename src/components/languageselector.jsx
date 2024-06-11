function LanguageSelector({ onChange, currentLanguage }) {
  return (
    <select value={currentLanguage} onChange={(e) => onChange(e.target.value)}>
      <option value="en">English</option>
      <option value="nb">Norwegian Bokmål</option>
      <option value="nn">Norwegian Nynorsk</option>
    </select>
  );
}

export default LanguageSelector;
