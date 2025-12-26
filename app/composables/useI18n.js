import { messages } from "~/data/messages";

const STORAGE_KEY = "locale";

//다국어 한/영/일/중
//app > data > messages.js 에서 데이터 관리
function normalizeLocale(value) {
  return value === "ko" || value === "en" || value === "ja" || value === "zh" ? value : "ko";
}

export function useI18n() {
  const locale = useState("locale", () => {
    if (import.meta.client) return normalizeLocale(localStorage.getItem(STORAGE_KEY));
    return "ko";
  });

  const setLocale = (next) => {
    locale.value = normalizeLocale(next);
    if (import.meta.client) localStorage.setItem(STORAGE_KEY, locale.value);
  };

  const cycleLocale = () => {
    const order = ["ko", "en", "ja", "zh"];
    const idx = order.indexOf(locale.value);
    setLocale(order[(idx + 1) % order.length] ?? "ko");
  };

  const t = (key) => {
    const entry = messages?.[key];
    if (!entry) return key;
    return entry?.[locale.value] ?? entry?.ko ?? entry?.en ?? key;
  };

  // html lang 반영
  useHead(() => ({
    htmlAttrs: { lang: locale.value },
  }));

  return { locale, setLocale, cycleLocale, t };
}


