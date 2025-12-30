import { messages } from "~/data/messages";

const STORAGE_KEY = "locale";

function normalizeLocale(value) {
  if (value === "ko" || value === "en" || value === "ja" || value === "zh") return value;
  return "ko";
}

export function useI18n() {
  const supportedLocales = ["ko", "en", "ja", "zh"];

  const locale = useState("i18n-locale", () => {
    if (import.meta.client) {
      const saved = localStorage.getItem(STORAGE_KEY);
      return normalizeLocale(saved);
    }
    return "ko";
  });

  const setLocale = (next) => {
    locale.value = next;
    if (import.meta.client) localStorage.setItem(STORAGE_KEY, next);
  };

  const cycleLocale = () => {
    const idx = supportedLocales.indexOf(locale.value);
    const next = supportedLocales[(idx + 1) % supportedLocales.length] ?? "ko";
    setLocale(next);
  };

  const applyHtmlLang = (next) => {
    if (!import.meta.client) return;
    document.documentElement.lang = next;
  };

  onMounted(() => {
    applyHtmlLang(locale.value);
  });

  watch(locale, (next) => {
    applyHtmlLang(next);
  });

  const t = (key) => {
    const entry = messages[key];
    if (!entry) return key;
    return entry[locale.value] ?? key;
  };

  return { locale, setLocale, cycleLocale, t };
}


