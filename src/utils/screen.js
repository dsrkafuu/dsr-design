export function geiScreenStatus() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return {
    width,
    height,
    status: width >= 1092,
  };
}
