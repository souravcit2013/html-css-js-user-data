const getUserData = () => {
  fetch(`https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json`)
    .then((response) => response.json())
    .then((data) => printUserData(data));
};

getUserData();

const getChildNodes = (item) => {
  const itemTD = document.createElement("td");
  const itemTextNode = document.createTextNode(item);
  itemTD.appendChild(itemTextNode);
  return itemTD;
};

const printUserData = (userData) => {
  const usertableBody = document.querySelector("tbody");
  userData.forEach((userObject) => {
    const tableBodyRow = document.createElement("tr");
    const { name, id, language, bio } = userObject || {};

    tableBodyRow.appendChild(getChildNodes(id));
    tableBodyRow.appendChild(getChildNodes(name));
    tableBodyRow.appendChild(getChildNodes(language));
    tableBodyRow.appendChild(getChildNodes(bio));

    usertableBody.appendChild(tableBodyRow);
  });
};
