export default function() {
	const content = document.querySelector("#content");
	const cardDiv = document.createElement("div");

	cardDiv.classList.add("test");
	cardDiv.innerText = "test"

	content.appendChild(cardDiv);
}