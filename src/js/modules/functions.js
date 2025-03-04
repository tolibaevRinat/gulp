export const isWebp = () => {
  const testWebp = (callback) => {
    let webp = new Image();
    webp.onload = webp.onerror = () => {
      callback(webp.height == 2);
    };
    webp.src =
      "data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMw" +
      "AgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA";
  };

  testWebp((support) => {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
};
