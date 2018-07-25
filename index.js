function getFirstSelector(selector) {
  return document.querySelector("" + selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

const lis = document.querySelectorAll('ul.ranked-list li')