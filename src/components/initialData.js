export const initialData = {
  tasks: {
    // task for each chess piece with unique id
    'p1': { id: 'p1', color: 'black', content: 'Pawn 1' },
    'p2': { id: 'p2', color: 'black', content: 'Pawn 2' },
    'p3': { id: 'p3', color: 'black', content: 'Pawn 3' },
    'p4': { id: 'p4', color: 'black', content: 'Pawn 4' },
    'p5': { id: 'p5', color: 'black', content: 'Pawn 5' },
    'p6': { id: 'p6', color: 'black', content: 'Pawn 6' },
    'p7': { id: 'p7', color: 'black', content: 'Pawn 7' },
    'p8': { id: 'p8', color: 'black', content: 'Pawn 8' },
    'r1': { id: 'r1', color: 'black', content: 'Rook 1' },
    'r2': { id: 'r2', color: 'black', content: 'Rook 2' },
    'n1': { id: 'n1', color: 'black', content: 'Knight 1' },
    'n2': { id: 'n2', color: 'black', content: 'Knight 2' },
    'b1': { id: 'b1', color: 'black', content: 'Bishop 1' },
    'b2': { id: 'b2', color: 'black', content: 'Bishop 2' },
    'q1': { id: 'q1', color: 'black', content: 'Queen 1' },
    'k1': { id: 'k1', color: 'black', content: 'King 1' },
    'P1': { id: 'P1', color: 'white', content: 'Pawn 1' },
    'P2': { id: 'P2', color: 'white', content: 'Pawn 2' },
    'P3': { id: 'P3', color: 'white', content: 'Pawn 3' },
    'P4': { id: 'P4', color: 'white', content: 'Pawn 4' },
    'P5': { id: 'P5', color: 'white', content: 'Pawn 5' },
    'P6': { id: 'P6', color: 'white', content: 'Pawn 6' },
    'P7': { id: 'P7', color: 'white', content: 'Pawn 7' },
    'P8': { id: 'P8', color: 'white', content: 'Pawn 8' },
    'R1': { id: 'R1', color: 'white', content: 'Rook 1' },
    'R2': { id: 'R2', color: 'white', content: 'Rook 2' },
    'N1': { id: 'N1', color: 'white', content: 'Knight 1' },
    'N2': { id: 'N2', color: 'white', content: 'Knight 2' },
    'B1': { id: 'B1', color: 'white', content: 'Bishop 1' },
    'B2': { id: 'B2', color: 'white', content: 'Bishop 2' },
    'Q1': { id: 'Q1', color: 'white', content: 'Queen 1' },
    'K1': { id: 'K1', color: 'white', content: 'King 1' },
    'dot': { id: 'dot', color: 'dot', content: 'dot' },

  },
//   lists: {

//      // lists are the 64 fields of a chessboard with unique uid
//     'a1': 'r2',
//     'a2': 'p1',
//     'a3': '',
//     'a4': '',
//     'a5': '',
//     'a6': '',
//     'a7': 'P1',
//     'a8': 'R2',
//     'b1': 'n2',
//     'b2': 'p2',
//     'b3': '',
//     'b4': '',
//     'b5': '',
//     'b6': '',
//     'b7': 'P2',
//     'b8': 'N2',
//     'c1': 'b2',
//     'c2': 'p3',
//     'c3': '',
//     'c4': '',
//     'c5': '',
//     'c6': '',
//     'c7': 'P3',
//     'c8': 'B2',
//     'd1': 'q1',       
//     'd2': 'p4',
//     'd3': '',
//     'd4': '',
//     'd5': '',
//     'd6': '',
//     'd7': 'P4',
//     'd8': 'Q1',
//     'e1': 'k1',
//     'e2': 'p5',
//     'e3': '',
//     'e4': '',
//     'e5': '',
//     'e6': '',
//     'e7': 'P5',
//     'e8': 'K1',
//     'f1': 'b1',
//     'f2': 'p6',
//     'f3': '',
//     'f4': '',
//     'f5': '',
//     'f6': '',
//     'f7': 'P6',
//     'f8': 'B1',
//     'g1': 'n1',
//     'g2': 'p7',
//     'g3': '',
//     'g4': '',
//     'g5': '',
//     'g6': '',
//     'g7': 'P7',
//     'g8': 'N1',
//     'h1': 'r1',
//     'h2': 'p8',
//     'h3': '',
//     'h4': '',
//     'h5': '',
//     'h6': '',
//     'h7': 'P8',
//     'h8': 'R1',
//  },


// lists but in order of the chessboard black is now in row 8 and 7 and white in 2 and 1

 lists: {
  'a8': 'r2',
  'a7': 'p1',
  'a6': '',
  'a5': '',
  'a4': '',
  'a3': '',
  'a2': 'P1',
  'a1': 'R2',
  'b8': 'n2',
  'b7': 'p2',
  'b6': '',
  'b5': '',
  'b4': '',
  'b3': '',
  'b2': 'P2',
  'b1': 'N2',
  'c8': 'b2',
  'c7': 'p3',
  'c6': '',
  'c5': '',
  'c4': '',
  'c3': '',
  'c2': 'P3',
  'c1': 'B2',
  'd8': 'q1',
  'd7': 'p4',
  'd6': '',
  'd5': '',
  'd4': '',
  'd3': '',
  'd2': 'P4',
  'd1': 'Q1',
  'e8': 'k1',
  'e7': 'p5',
  'e6': '',
  'e5': '',
  'e4': '',
  'e3': '',
  'e2': 'P5',
  'e1': 'K1',
  'f8': 'b1',
  'f7': 'p6',
  'f6': '',
  'f5': '',
  'f4': '',
  'f3': '',
  'f2': 'P6',
  'f1': 'B1',

  'g8': 'n1',
  'g7': 'p7',
  'g6': '',
  'g5': '',
  'g4': '',
  'g3': '',
  'g2': 'P7',
  'g1': 'N1',
  'h8': 'r1',
  'h7': 'p8',
  'h6': '',
  'h5': '',
  'h4': '',
  'h3': '',
  'h2': 'P8',
  'h1': 'R1',
  'dot': 'dot',
  
 }
,
  listOrder: [['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'], ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'], ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'], ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'], ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'], ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'], ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'], ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1']],

 
  //listOrder: [['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'], ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'], ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'], ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'], ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'], ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'], ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'], ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8']],
};
