function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function loadAllScripts() {
  try {
    const pref = "/core/scripts";
    await loadScript(pref + "/homework-old.js");
    await loadScript(pref + "/homework-5.js");
    console.log("Все скрипты успешно загружены");
  } catch (error) {
    console.error("Ошибка загрузки скрипта:", error);
  }
}

loadAllScripts();
