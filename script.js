console.clear();
// a-z --- 97-122

const obj = {};

// select elements
const paragraph = document.querySelector("#myParagraph");
const wordCloud = document.querySelector("#myWordCloud");
const wordCloudDiv = document.createDocumentFragment();
const largestFont = 64;

paragraph.textContent.split(" ").forEach((el) => {
  let properWord = el.trim().toLowerCase();

  properWord = properWord
    .split("")
    .filter(
      (el, i) => properWord.charCodeAt(i) > 96 && properWord.charCodeAt(i) < 123
    )
    .join("");

  if (properWord) {
    obj[properWord] = obj[properWord] + 1 || 1;
  }
});

const ObjArr = Object.entries(obj)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 12);

for (let i = 0; i < ObjArr.length; i++) {
  const p = document.createElement("p");
  p.textContent = ObjArr[i][0];
  p.style.fontSize = largestFont - i * 4 + "px";
  wordCloudDiv.append(p);
}

wordCloud.append(wordCloudDiv);
