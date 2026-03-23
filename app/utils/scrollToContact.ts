export function scrollToContact(e: React.MouseEvent) {
  const el = document.getElementById("contact");
  if (el) {
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", window.location.pathname);
  }
}
