const localStorage = window.localStorage;

document.body.addEventListener("input", updateLocalStorage);

function setLocalData() {
  const localData = getLocalData();

  for (const key in localData) {
    document.getElementById(key).value = localData[key];
  }
}

function updateLocalStorage(el) {
  const localData = getLocalData();
  const newContent = { ...localData, [el.target.id]: el.target.value };

  localStorage.setItem("fields", JSON.stringify(newContent));
}

function getLocalData() {
  const prevLocal = localStorage.getItem("fields");
  const parsedLocal = prevLocal ? JSON.parse(prevLocal) : {};

  return parsedLocal;
}

setLocalData();
