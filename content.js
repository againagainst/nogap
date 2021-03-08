let re = new RegExp(
  "([\u0400-\u04FF])_([\u0400-\u04FF])", 'giu'
)

function replaceAllText() {
  var walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null
  );

  while (walker.nextNode()) {
    if (walker.currentNode.nodeValue.trim()) {
      walker.currentNode.nodeValue = replacedText(walker.currentNode.nodeValue);
    }
  }
}

function replacedText(text) {
  return text.replaceAll(re, "$1$2");
}

window.onload = replaceAllText();
