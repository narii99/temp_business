const STORAGE_KEY = "theme";

function applyTheme(mode) {
  if (!import.meta.client) return;
  const root = document.documentElement;
  root.setAttribute("data-theme", mode);
}

// 다크 or 라이트 모드
export function useTheme() {
  const mode = useState("theme-mode", () => {
    if (import.meta.client) {
      const saved = localStorage.getItem(STORAGE_KEY) ?? "system";
      if (saved === "light" || saved === "dark") return saved;
      // 저장값이 없으면 시스템 선호도를 기준으로 초기값 결정
      const prefersDark =
        typeof window !== "undefined" &&
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  });

  const setMode = (next) => {
    mode.value = next;
    if (import.meta.client) localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  };

  const cycle = () => {
    setMode(mode.value === "dark" ? "light" : "dark");
  };

  onMounted(() => {
    applyTheme(mode.value);
  });

  return { mode, setMode, cycle };
}


