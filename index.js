function getFirstSelector(selector) {
  return document.querySelector("" + selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list')
for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(i + n).toString()
 }
}

function deepestChild() {
var nodes = document.querySelectorAll('#grand-node div');
return nodes[nodes.length- 1];
}