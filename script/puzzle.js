var pieces = document.querySelectorAll(".puzzle-piece");
var emptyPiece = 16;

for (var i = 0; i < pieces.length; i++) {
  pieces[i].addEventListener("click", function () {
    var pieceId = parseInt(this.id.substring(5));
    if (isAdjacent(pieceId, emptyPiece)) {
      swapPieces(pieceId, emptyPiece);
      emptyPiece = pieceId;
      if (isSolved()) {
        alert("Congratulations, you solved the puzzle!");
      }
    }
  });
}

function isAdjacent(pieceId, emptyPiece) {
  if (pieceId == emptyPiece - 4 || pieceId == emptyPiece + 4) {
    return true;
  }
  if (pieceId % 4 != 0 && pieceId == emptyPiece - 1) {
    return true;
  }
  if (pieceId % 4 != 3 && pieceId == emptyPiece + 1) {
    return true;
  }
  return false;
}

function swapPieces(piece1, piece2) {
  var piece1Element = document.getElementById("piece" + piece1);
  var piece2Element = document.getElementById("piece" + piece2);
  var temp = piece1Element.style.order;
  piece1Element.style.order = piece2Element.style.order;
  piece2Element.style.order = temp;
}

function isSolved() {
  for (var i = 1; i <= 16; i++) {
    if (document.getElementById("piece" + i).style.order != i - 1) {
      return false;
    }
  }
  return true;
}

function shuffle() {
  for (var i = 0; i < 1000; i++) {
    var adjacentPieces = [];
    if (emptyPiece > 4) {
      adjacentPieces.push(emptyPiece - 4);
    }
    if (emptyPiece < 13) {
      adjacentPieces.push(emptyPiece + 4);
    }
    if (emptyPiece % 4 != 0) {
      adjacentPieces.push(emptyPiece - 1);
    }
    if (emptyPiece % 4 != 3) {
      adjacentPieces.push(emptyPiece + 1);
    }
    var randomPiece =
      adjacentPieces[Math.floor(Math.random() * adjacentPieces.length)];
    swapPieces(randomPiece, emptyPiece);
    emptyPiece = randomPiece;
  }
}
