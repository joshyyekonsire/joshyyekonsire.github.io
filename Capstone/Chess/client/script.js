const whiteQueenKnight = document.getElementById("whiteQueenKnight");
whiteQueenKnight.addEventListener("mousedown", whiteQueenKnight.onmousedown);

const whiteKingKnight = document.getElementById("whiteKingKnight");
whiteKingKnight.addEventListener("mousedown", whiteKingKnight.onmousedown);

const whiteQueenBishop = document.getElementById("whiteQueenBishop");
whiteQueenBishop.addEventListener("mousedown", whiteQueenBishop.onmousedown);

const whiteKingBishop = document.getElementById("whiteKingBishop");
whiteKingBishop.addEventListener("mousedown", whiteKingBishop.onmousedown);

const whiteQueenRook = document.getElementById("whiteQueenRook");
whiteQueenRook.addEventListener("mousedown", whiteQueenRook.onmousedown);

const whiteKingRook = document.getElementById("whiteKingRook");
whiteKingRook.addEventListener("mousedown", whiteKingRook.onmousedown);

const whiteKing = document.getElementById("whiteKing");
whiteKing.addEventListener("mousedown", whiteKing.onmousedown);

const whiteQueen = document.getElementById("whiteQueen");
whiteQueen.addEventListener("mousedown", whiteQueen.onmousedown);

const blackQueen = document.getElementById("blackQueen");
blackQueen.addEventListener("mousedown", blackQueen.onmousedown);

const blackKing = document.getElementById("blackKing");
blackKing.addEventListener("mousedown", blackKing.onmousedown);

const blackKingRook = document.getElementById("blackKingRook");
blackKingRook.addEventListener("mousedown", blackKingRook.onmousedown);

const blackKingKnight = document.getElementById("blackKingKnight");
blackKingKnight.addEventListener("mousedown", blackKingKnight.onmousedown);

const blackKingBishop = document.getElementById("blackKingBishop");
blackKingBishop.addEventListener("mousedown", blackKingBishop.onmousedown);

const blackQueenRook = document.getElementById("blackQueenRook");
blackQueenRook.addEventListener("mousedown", blackQueenRook.onmousedown);

const blackQueenKnight = document.getElementById("blackQueenKnight");
blackQueenKnight.addEventListener("mousedown", blackQueenKnight.onmousedown);

const blackQueenBishop = document.getElementById("blackQueenBishop");
blackQueenBishop.addEventListener("mousedown", blackQueenBishop.onmousedown);

const blackPawn1 = document.getElementById("blackPawn1");
blackPawn1.addEventListener("mousedown", blackPawn1.onmousedown);

const blackPawn2 = document.getElementById("blackPawn2");
blackPawn2.addEventListener("mousedown", blackPawn2.onmousedown);

const blackPawn3 = document.getElementById("blackPawn3");
blackPawn3.addEventListener("mousedown", blackPawn3.onmousedown);

const blackPawn4 = document.getElementById("blackPawn4");
blackPawn4.addEventListener("mousedown", blackPawn4.onmousedown);

const blackPawn5 = document.getElementById("blackPawn5");
blackPawn5.addEventListener("mousedown", blackPawn5.onmousedown);

const blackPawn6 = document.getElementById("blackPawn6");
blackPawn6.addEventListener("mousedown", blackPawn6.onmousedown);

const blackPawn7 = document.getElementById("blackPawn7");
blackPawn7.addEventListener("mousedown", blackPawn7.onmousedown);

const blackPawn8 = document.getElementById("blackPawn8");
blackPawn8.addEventListener("mousedown", blackPawn8.onmousedown);

const whitePawn1 = document.getElementById("whitePawn1");
whitePawn1.addEventListener("mousedown", whitePawn1.onmousedown);

const whitePawn2 = document.getElementById("whitePawn2");
whitePawn2.addEventListener("mousedown", whitePawn2.onmousedown);

const whitePawn3 = document.getElementById("whitePawn3");
whitePawn3.addEventListener("mousedown", whitePawn3.onmousedown);

const whitePawn4 = document.getElementById("whitePawn4");
whitePawn4.addEventListener("mousedown", whitePawn4.onmousedown);

const whitePawn5 = document.getElementById("whitePawn5");
whitePawn5.addEventListener("mousedown", whitePawn5.onmousedown);

const whitePawn6 = document.getElementById("whitePawn6");
whitePawn6.addEventListener("mousedown", whitePawn6.onmousedown);

const whitePawn7 = document.getElementById("whitePawn7");
whitePawn7.addEventListener("mousedown", whitePawn7.onmousedown);

const whitePawn8 = document.getElementById("whitePawn8");
whitePawn8.addEventListener("mousedown", whitePawn8.onmousedown);




whiteQueenKnight.onmousedown = function(event) {
    whiteQueenKnight.style.position = 'absolute';
    whiteQueenKnight.style.zIndex = 1000;
    document.body.append(whiteQueenKnight);
    function moveAt(pageX, pageY) {
        whiteQueenKnight.style.left = pageX - whiteQueenKnight.offsetWidth / 2 + 'px';
        whiteQueenKnight.style.top = pageY - whiteQueenKnight.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    whiteQueenKnight.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      whiteQueenKnight.onmouseup = null;
    };
  
  };
whiteKingKnight.onmousedown = function(event) {
    whiteKingKnight.style.position = 'absolute';
    whiteKingKnight.style.zIndex = 1000;
    document.body.append(whiteKingKnight);
    function moveAt(pageX, pageY) {
        whiteKingKnight.style.left = pageX - whiteKingKnight.offsetWidth / 2 + 'px';
        whiteKingKnight.style.top = pageY - whiteKingKnight.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    whiteKingKnight.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      whiteKingKnight.onmouseup = null;
    };
  
  };
  whiteQueenBishop.onmousedown = function(event) {
    whiteQueenBishop.style.position = 'absolute';
    whiteQueenBishop.style.zIndex = 1000;
    document.body.append(whiteQueenBishop);
    function moveAt(pageX, pageY) {
      whiteQueenBishop.style.left = pageX - whiteQueenBishop.offsetWidth / 2 + 'px';
      whiteQueenBishop.style.top = pageY - whiteQueenBishop.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    whiteQueenBishop.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      whiteQueenBishop.onmouseup = null;
    };
  
  };
  whiteKingBishop.onmousedown = function(event) {
    whiteKingBishop.style.position = 'absolute';
    whiteKingBishop.style.zIndex = 1000;
    document.body.append(whiteKingBishop);
    function moveAt(pageX, pageY) {
      whiteKingBishop.style.left = pageX - whiteKingBishop.offsetWidth / 2 + 'px';
      whiteKingBishop.style.top = pageY - whiteKingBishop.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    whiteKingBishop.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      whiteKingBishop.onmouseup = null;
    };
  
  };
  whiteQueenRook.onmousedown = function(event) {
    whiteQueenRook.style.position = 'absolute';
    whiteQueenRook.style.zIndex = 1000;
    document.body.append(whiteQueenRook);
    function moveAt(pageX, pageY) {
      whiteQueenRook.style.left = pageX - whiteQueenRook.offsetWidth / 2 + 'px';
      whiteQueenRook.style.top = pageY - whiteQueenRook.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    whiteQueenRook.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      whiteQueenRook.onmouseup = null;
    };
  
  };
  whiteKingRook.onmousedown = function(event) {
    whiteKingRook.style.position = 'absolute';
    whiteKingRook.style.zIndex = 1000;
    document.body.append(whiteKingRook);
    function moveAt(pageX, pageY) {
      whiteKingRook.style.left = pageX - whiteKingRook.offsetWidth / 2 + 'px';
      whiteKingRook.style.top = pageY - whiteKingRook.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    whiteKingRook.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      whiteKingRook.onmouseup = null;
    };
  
  };
  whiteKing.onmousedown = function(event) {
    whiteKing.style.position = 'absolute';
    whiteKing.style.zIndex = 1000;
    document.body.append(whiteKing);
    function moveAt(pageX, pageY) {
      whiteKing.style.left = pageX - whiteKing.offsetWidth / 2 + 'px';
      whiteKing.style.top = pageY - whiteKing.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    whiteKing.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      whiteKing.onmouseup = null;
    };
  
  };
  whiteQueen.onmousedown = function(event) {
    whiteQueen.style.position = 'absolute';
    whiteQueen.style.zIndex = 1000;
    document.body.append(whiteQueen);
    function moveAt(pageX, pageY) {
      whiteQueen.style.left = pageX - whiteQueen.offsetWidth / 2 + 'px';
      whiteQueen.style.top = pageY - whiteQueen.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    whiteQueen.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      whiteQueen.onmouseup = null;
    };
  
  };
  blackQueen.onmousedown = function(event) {
    blackQueen.style.position = 'absolute';
    blackQueen.style.zIndex = 1000;
    document.body.append(blackQueen);
    function moveAt(pageX, pageY) {
      blackQueen.style.left = pageX - blackQueen.offsetWidth / 2 + 'px';
      blackQueen.style.top = pageY - blackQueen.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    blackQueen.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      blackQueen.onmouseup = null;
    };
  
  };
  blackQueenRook.onmousedown = function(event) {
    blackQueenRook.style.position = 'absolute';
    blackQueenRook.style.zIndex = 1000;
    document.body.append(blackQueenRook);
    function moveAt(pageX, pageY) {
      blackQueenRook.style.left = pageX - blackQueenRook.offsetWidth / 2 + 'px';
      blackQueenRook.style.top = pageY - blackQueenRook.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    blackQueenRook.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      blackQueenRook.onmouseup = null;
    };
  
  };
  blackQueenKnight.onmousedown = function(event) {
    blackQueenKnight.style.position = 'absolute';
    blackQueenKnight.style.zIndex = 1000;
    document.body.append(blackQueenKnight);
    function moveAt(pageX, pageY) {
      blackQueenKnight.style.left = pageX - blackQueenKnight.offsetWidth / 2 + 'px';
      blackQueenKnight.style.top = pageY - blackQueenKnight.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    blackQueenKnight.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      blackQueenKnight.onmouseup = null;
    };
  
  };
  blackQueenBishop.onmousedown = function(event) {
    blackQueenBishop.style.position = 'absolute';
    blackQueenBishop.style.zIndex = 1000;
    document.body.append(blackQueenBishop);
    function moveAt(pageX, pageY) {
      blackQueenBishop.style.left = pageX - blackQueenBishop.offsetWidth / 2 + 'px';
      blackQueenBishop.style.top = pageY - blackQueenBishop.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    blackQueenBishop.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      blackQueenBishop.onmouseup = null;
    };
  
  };
  blackKing.onmousedown = function(event) {
    blackKing.style.position = 'absolute';
    blackKing.style.zIndex = 1000;
    document.body.append(blackKing);
    function moveAt(pageX, pageY) {
      blackKing.style.left = pageX - blackKing.offsetWidth / 2 + 'px';
      blackKing.style.top = pageY - blackKing.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    blackKing.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      blackKing.onmouseup = null;
    };
  
  };
  blackKingRook.onmousedown = function(event) {
    blackKingRook.style.position = 'absolute';
    blackKingRook.style.zIndex = 1000;
    document.body.append(blackKingRook);
    function moveAt(pageX, pageY) {
      blackKingRook.style.left = pageX - blackKingRook.offsetWidth / 2 + 'px';
      blackKingRook.style.top = pageY - blackKingRook.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    blackKingRook.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      blackKingRook.onmouseup = null;
    };
  
  };
  blackKingKnight.onmousedown = function(event) {
    blackKingKnight.style.position = 'absolute';
    blackKingKnight.style.zIndex = 1000;
    document.body.append(blackKingKnight);
    function moveAt(pageX, pageY) {
      blackKingKnight.style.left = pageX - blackKingKnight.offsetWidth / 2 + 'px';
      blackKingKnight.style.top = pageY - blackKingKnight.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    blackKingKnight.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      blackKingKnight.onmouseup = null;
    };
  
  };
  blackKingBishop.onmousedown = function(event) {
    blackKingBishop.style.position = 'absolute';
    blackKingBishop.style.zIndex = 1000;
    document.body.append(blackKingBishop);
    function moveAt(pageX, pageY) {
      blackKingBishop.style.left = pageX - blackKingBishop.offsetWidth / 2 + 'px';
      blackKingBishop.style.top = pageY - blackKingBishop.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    blackKingBishop.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      blackKingBishop.onmouseup = null;
    };
  
  };
  blackPawn1.onmousedown = function(event) {
    blackPawn1.style.position = 'absolute';
    blackPawn1.style.zIndex = 1000;
    document.body.append(blackPawn1);
    function moveAt(pageX, pageY) {
      blackPawn1.style.left = pageX - blackPawn1.offsetWidth / 2 + 'px';
      blackPawn1.style.top = pageY - blackPawn1.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    blackPawn1.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      blackPawn1.onmouseup = null;
    };
  
  };
  blackPawn2.onmousedown = function(event) {
    blackPawn2.style.position = 'absolute';
    blackPawn2.style.zIndex = 1000;
    document.body.append(blackPawn2);
    function moveAt(pageX, pageY) {
      blackPawn2.style.left = pageX - blackPawn2.offsetWidth / 2 + 'px';
      blackPawn2.style.top = pageY - blackPawn2.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    blackPawn2.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      blackPawn2.onmouseup = null;
    };
  
  };
  blackPawn3.onmousedown = function(event) {
    blackPawn3.style.position = 'absolute';
    blackPawn3.style.zIndex = 1000;
    document.body.append(blackPawn3);
    function moveAt(pageX, pageY) {
      blackPawn3.style.left = pageX - blackPawn3.offsetWidth / 2 + 'px';
      blackPawn3.style.top = pageY - blackPawn3.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    blackPawn3.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      blackPawn3.onmouseup = null;
    };
  
  };
  blackPawn4.onmousedown = function(event) {
    blackPawn4.style.position = 'absolute';
    blackPawn4.style.zIndex = 1000;
    document.body.append(blackPawn4);
    function moveAt(pageX, pageY) {
      blackPawn4.style.left = pageX - blackPawn4.offsetWidth / 2 + 'px';
      blackPawn4.style.top = pageY - blackPawn4.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    blackPawn4.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      blackPawn4.onmouseup = null;
    };
  
  };
  blackPawn5.onmousedown = function(event) {
    blackPawn5.style.position = 'absolute';
    blackPawn5.style.zIndex = 1000;
    document.body.append(blackPawn5);
    function moveAt(pageX, pageY) {
      blackPawn5.style.left = pageX - blackPawn5.offsetWidth / 2 + 'px';
      blackPawn5.style.top = pageY - blackPawn5.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    blackPawn5.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      blackPawn5.onmouseup = null;
    };
  
  };
  blackPawn6.onmousedown = function(event) {
    blackPawn6.style.position = 'absolute';
    blackPawn6.style.zIndex = 1000;
    document.body.append(blackPawn6);
    function moveAt(pageX, pageY) {
      blackPawn6.style.left = pageX - blackPawn6.offsetWidth / 2 + 'px';
      blackPawn6.style.top = pageY - blackPawn6.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    blackPawn6.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      blackPawn6.onmouseup = null;
    };
  
  };
  blackPawn7.onmousedown = function(event) {
    blackPawn7.style.position = 'absolute';
    blackPawn7.style.zIndex = 1000;
    document.body.append(blackPawn7);
    function moveAt(pageX, pageY) {
      blackPawn7.style.left = pageX - blackPawn7.offsetWidth / 2 + 'px';
      blackPawn7.style.top = pageY - blackPawn7.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    blackPawn7.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      blackPawn7.onmouseup = null;
    };
  
  };
  blackPawn8.onmousedown = function(event) {
    blackPawn8.style.position = 'absolute';
    blackPawn8.style.zIndex = 1000;
    document.body.append(blackPawn8);
    function moveAt(pageX, pageY) {
      blackPawn8.style.left = pageX - blackPawn8.offsetWidth / 2 + 'px';
      blackPawn8.style.top = pageY - blackPawn8.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    blackPawn8.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      blackPawn8.onmouseup = null;
    };
  
  };
  whitePawn1.onmousedown = function(event) {
    whitePawn1.style.position = 'absolute';
    whitePawn1.style.zIndex = 1000;
    document.body.append(whitePawn1);
    function moveAt(pageX, pageY) {
      whitePawn1.style.left = pageX - whitePawn1.offsetWidth / 2 + 'px';
      whitePawn1.style.top = pageY - whitePawn1.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    whitePawn1.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      whitePawn1.onmouseup = null;
    };
  
  };
  whitePawn2.onmousedown = function(event) {
    whitePawn2.style.position = 'absolute';
    whitePawn2.style.zIndex = 1000;
    document.body.append(whitePawn2);
    function moveAt(pageX, pageY) {
      whitePawn2.style.left = pageX - whitePawn2.offsetWidth / 2 + 'px';
      whitePawn2.style.top = pageY - whitePawn2.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    whitePawn2.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      whitePawn2.onmouseup = null;
    };
  
  };
  whitePawn3.onmousedown = function(event) {
    whitePawn3.style.position = 'absolute';
    whitePawn3.style.zIndex = 1000;
    document.body.append(whitePawn3);
    function moveAt(pageX, pageY) {
      whitePawn3.style.left = pageX - whitePawn3.offsetWidth / 2 + 'px';
      whitePawn3.style.top = pageY - whitePawn3.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    whitePawn3.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      whitePawn3.onmouseup = null;
    };
  
  };
  whitePawn4.onmousedown = function(event) {
    whitePawn4.style.position = 'absolute';
    whitePawn4.style.zIndex = 1000;
    document.body.append(whitePawn4);
    function moveAt(pageX, pageY) {
      whitePawn4.style.left = pageX - whitePawn4.offsetWidth / 2 + 'px';
      whitePawn4.style.top = pageY - whitePawn4.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    whitePawn4.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      whitePawn4.onmouseup = null;
    };
  
  };





  whitePawn5.onmousedown = function(event) {
    whitePawn5.style.position = 'absolute';
    whitePawn5.style.zIndex = 1000;
    document.body.append(whitePawn5);
    function moveAt(pageX, pageY) {
      whitePawn5.style.left = pageX - whitePawn5.offsetWidth / 2 + 'px';
      whitePawn5.style.top = pageY - whitePawn5.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    whitePawn5.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      whitePawn5.onmouseup = null;
    };
  };





  whitePawn6.onmousedown = function(event) {
    whitePawn6.style.position = 'absolute';
    whitePawn6.style.zIndex = 1000;
    document.body.append(whitePawn6);
    function moveAt(pageX, pageY) {
      whitePawn6.style.left = pageX - whitePawn6.offsetWidth / 2 + 'px';
      whitePawn6.style.top = pageY - whitePawn6.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    whitePawn6.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      whitePawn6.onmouseup = null;
    };
  
  };
  whitePawn7.onmousedown = function(event) {
    whitePawn7.style.position = 'absolute';
    whitePawn7.style.zIndex = 1000;
    document.body.append(whitePawn7);
    function moveAt(pageX, pageY) {
      whitePawn7.style.left = pageX - whitePawn7.offsetWidth / 2 + 'px';
      whitePawn7.style.top = pageY - whitePawn7.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    whitePawn7.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      whitePawn7.onmouseup = null;
    };
  
  };
  whitePawn8.onmousedown = function(event) {
    whitePawn8.style.position = 'absolute';
    whitePawn8.style.zIndex = 1000;
    document.body.append(whitePawn8);
    function moveAt(pageX, pageY) {
      whitePawn8.style.left = pageX - whitePawn8.offsetWidth / 2 + 'px';
      whitePawn8.style.top = pageY - whitePawn8.offsetHeight / 2 + 'px';
    }
    moveAt(event.pageX, event.pageY);
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    whitePawn8.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      whitePawn8.onmouseup = null;
    };
  
  };


  