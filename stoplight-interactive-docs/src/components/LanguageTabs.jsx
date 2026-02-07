export default function LanguageTabs({ languages, active, onSelect }) {
  return (
    <div className="language-tabs">
      {Object.entries(languages).map(([key, lang]) => (
        <button
          key={key}
          className={`lang-tab ${active === key ? 'active' : ''}`}
          onClick={() => onSelect(key)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
