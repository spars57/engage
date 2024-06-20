export const smoothScrollTo = (
  id: string,
  options?: ScrollIntoViewOptions,
  callback?: () => void
) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
    ...options,
  });
  if (callback) callback();
};
