const bus = new Vue();
new Vue({
  el: '#app',
  data () {
    return {
      currentFen: '',
      positionInfo: null,
      color: 'white',
      bus,
    }
  },
  computed: {
    history:function(){
      return this.currentFen;
    }
  },
  components: {
    VueChessboard
  },
  methods: {
    showInfo(data) {
      this.positionInfo = data
    },
    loadFen(fen) {
      this.currentFen = fen
    },
    newGame(){
        this.loadFen('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
        this.color = Math.floor(Math.random() * 2) ? "white" : "black"
    },
    promote() {
      if (confirm("Want to promote to rook? Queen by default") ) {
        return 'r'
      } else {
        return 'q'
      }
    },
    undo() {
      this.chess.game.undo()
      this.chess.board.set({
        fen: this.chess.game.fen(),
        movable: {events: { after: this.userPlay()}},
      });
    },
    userPlay() {
      return (orig, dest) => {
        if (this.chess.isPromotion(orig, dest)) {
          this.chess.promoteTo = this.promote();
        }
        this.chess.game.move({from: orig, to: dest, promotion: this.chess.promoteTo}) // promote to queen for simplicity
        this.currentFen = this.chess.game.fen();
        this.chess.board.set({
          fen: this.chess.game.fen()
        })
        this.chess.calculatePromotions()
        this.aiNextMove()
      };
    },
    aiNextMove() {
      let moves = this.chess.game.moves({verbose: true})
      let randomMove = moves[Math.floor(Math.random() * moves.length)]
      this.chess.game.move(randomMove)
      this.currentFen = this.chess.game.fen();
      this.chess.board.set({
        fen: this.chess.game.fen(),
        turnColor: this.chess.toColor(),
        movable: {
          color: this.chess.toColor(),
          dests: this.chess.possibleMoves(),
          events: { after: this.userPlay()},
        }
      });
    },
  },
  created() {
    this.fens = ['5rr1/3nqpk1/p3p2p/Pp1pP1pP/2pP1PN1/2P1Q3/2P3P1/R4RK1 b - f3 0 28',
                'r4rk1/pp1b3p/6p1/8/3NpP2/1P4P1/P2K3P/R6R w - - 0 22',
                'rnbqkbnr/p1pp1ppp/8/1p2p3/1P2P3/8/P1PP1PPP/RNBQKBNR w KQkq - 0 3',
                'rnbqkbnr/p4ppp/8/1pP1p3/1Pp1P3/8/P4PPP/RNBQKBNR w KQkq - 0 6'
                ]
    console.log(this);
  },
  mounted() {
    this.chess = this.$children[0];
    this.chess.board.set({
      movable: { events: { after: this.userPlay()} },
    })
  },
});