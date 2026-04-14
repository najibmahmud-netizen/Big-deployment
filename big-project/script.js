// PURE FUNCTION
async function getCatFact() {
  const res = await fetch("https://cat-fact.herokuapp.com/facts/random");
  const data = await res.json();
  console.log("API Response:[{text: 'cats sleep alot'}]"); // THIS LINE IS YOUR BESTRIEND
  return data[0].text; 
}

// DOM CODE
if (typeof document !== "undefined") {
  // FIX 1: Look for "homeBtn" (Home page) OR "btn" (Facts page)
  const homeBtn = document.getElementById("homeBtn");
  const factsBtn = document.getElementById("btn");
  const factText = document.getElementById("fact");

  // Logic for the Home Button
  if (homeBtn && factText) {
    homeBtn.addEventListener("click", () => {
      factText.textContent = "Welcome to the Cat Facts Explorer! We hope you find some paws-itive information here.";
    });
  }

  // Logic for the Facts Button (The API one)
  if (factsBtn && factText) {
    factsBtn.addEventListener("click", async () => {
      factText.textContent = "Loading...";
      try {
        const fact = await getCatFact();
        factText.textContent = fact;
      } catch (error) {
        factText.textContent = "Failed to load cat fact. Maybe the API is down?";
      }
    });
  }
}

if (typeof module !== "undefined") {
  module.exports = { getCatFact };
}