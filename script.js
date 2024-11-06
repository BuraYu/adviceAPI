const heading = document.querySelector(".heading");
const paragraph = document.querySelector(".quote");

const showQuote = async () => {
  const apiUrl = "https://api.adviceslip.com/advice";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new ("There is an error " + response.statusText)();
    }

    const data = await response.json();

    heading.textContent = "Advice #" + data.slip.id;
    paragraph.textContent = data.slip.advice;
  } catch (error) {
    console.error("Error, ", error);
  }
};
