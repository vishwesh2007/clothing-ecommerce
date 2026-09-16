import { useMemo, useState } from "react";
import "./App.css";

const suggestions = [
  "cart",
  "catalog",
  "checkout",
  "dress",
  "jacket",
  "orders",
  "profile",
  "wishlist",
];

function App() {
  const [tabAutocompleteEnabled, setTabAutocompleteEnabled] = useState(true);
  const [query, setQuery] = useState("ca");

  const normalizedQuery = query.trim().toLowerCase();

  const suggestedValue = useMemo(() => {
    if (!normalizedQuery) return "";

    return (
      suggestions.find((item) =>
        item.toLowerCase().startsWith(normalizedQuery),
      ) ?? ""
    );
  }, [normalizedQuery]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key !== "Tab" || !tabAutocompleteEnabled) {
      return;
    }

    if (!suggestedValue || normalizedQuery === suggestedValue) {
      return;
    }

    event.preventDefault();
    setQuery(suggestedValue);
  };

  return (
    <main className="app-shell">
      <section className="panel" aria-label="Tab autocomplete settings">
        <div className="header-row">
          <div>
            <p className="eyebrow">Settings</p>
            <h1>Toggle Tab Autocomplete</h1>
          </div>

          <button
            type="button"
            className={`toggle ${tabAutocompleteEnabled ? "enabled" : ""}`}
            onClick={() => setTabAutocompleteEnabled((current) => !current)}
            aria-label="Toggle tab autocomplete"
            aria-pressed={tabAutocompleteEnabled}
          >
            <span className="toggle-knob" />
          </button>
        </div>

        <p className="status">
          {tabAutocompleteEnabled
            ? "Tab autocomplete is enabled."
            : "Tab autocomplete is disabled."}
        </p>

        <label className="search-field">
          <span>Product keyword</span>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type to search"
          />
        </label>

        <div className="suggestion-box">
          <p>Suggested value</p>
          <strong>
            {tabAutocompleteEnabled
              ? suggestedValue || "No suggestion available"
              : "Disabled"}
          </strong>
        </div>
      </section>
    </main>
  );
}

export default App;
