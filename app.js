async function sortLowToHigh() {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

  const result = await promise.json();

  const firstSix = result
    .filter((elem) => elem.completed === false)
    .slice(0, 6);

  console.log(firstSix);
}

sortLowToHigh(4);
