function selectLanguage(lang) {
  localStorage.setItem("language", lang);

  // Save appointment target page based on language
  let targetPage = "appointment_page.html"; // default

  if (lang === "English") {
    targetPage = "appointment_page.html";
  } else if (lang === "Hindi") {
    targetPage = "hindi.html";
  } else if (lang === "Odia") {
    targetPage = "odia.html";
  } else if (lang === "Bengali") {
    targetPage = "bengali.html";
  }

  // Store targetPage so Welcome page knows where to go next
  localStorage.setItem("appointmentPage", targetPage);

  // ✅ Redirect to Welcome Page first
  window.location.href = "welcome.html";
}
