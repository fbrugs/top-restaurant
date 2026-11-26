export default function() {
	const content = document.querySelector("#content");
	const btn = document.createElement("button");

	btn.innerText = "hello, world!";
	content.appendChild(btn);
}