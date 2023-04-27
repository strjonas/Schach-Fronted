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

  },
  lists: {
    // lists are the 64 fields of a chessboard with unique uid
    'a1': {
        id: 'a1',
        title: 'a1',
        taskIds: ['r2'],
    },
    'a2': {
        id: 'a2',
        title: 'a2',
        taskIds: ['p1'],
    },
    'a3': {
        id: 'a3',
        title: 'a3',
        taskIds: [],
    },
    'a4': {
        id: 'a4',
        title: 'a4',
        taskIds: [],
    },
    'a5': {
        id: 'a5',
        title: 'a5',
        taskIds: [],
    },
    'a6': {
        id: 'a6',
        title: 'a6',
        taskIds: [],
    },
    'a7': {
        id: 'a7',
        title: 'a7',
        taskIds: ['P1'],
    },
    'a8': {
        id: 'a8',
        title: 'a8',
        taskIds: ['R2'],
    },
    'b1': {
        id: 'b1',
        title: 'b1',
        taskIds: ['n2'],
    },
    'b2': {
        id: 'b2',
        title: 'b2',
        taskIds: ['p2'],
    },
    'b3': {
        id: 'b3',
        title: 'b3',
        taskIds: [],
    },
    'b4': {
        id: 'b4',
        title: 'b4',
        taskIds: [],
    },
    'b5': {
        id: 'b5',
        title: 'b5',
        taskIds: [],
    },
    'b6': {
        id: 'b6',
        title: 'b6',
        taskIds: [],
    },
    'b7': {
        id: 'b7',
        title: 'b7',
        taskIds: ['P2'],
    },
    'b8': {
        id: 'b8',
        title: 'b8',
        taskIds: ['N2'],
    },
    'c1': {
        id: 'c1',
        title: 'c1',
        taskIds: ['b2'],
    },
    'c2': {
        id: 'c2',
        title: 'c2',
        taskIds: ['p3'],
    },
    'c3': {
        id: 'c3',
        title: 'c3',
        taskIds: [],
    },
    'c4': {
        id: 'c4',
        title: 'c4',
        taskIds: [],
    },
    'c5': {
        id: 'c5',
        title: 'c5',
        taskIds: [],
    },
    'c6': {
        id: 'c6',
        title: 'c6',
        taskIds: [],
    },

    'c7': {
        id: 'c7',
        title: 'c7',
        taskIds: ['P3'],
    },
    'c8': {
        id: 'c8',
        title: 'c8',
        taskIds: ['B2'],
    },
    'd1': {
        id: 'd1',
        title: 'd1',
        taskIds: ['q1'],
    },
    'd2': {
        id: 'd2',
        title: 'd2',
        taskIds: ['p4'],
    },
    'd3': {
        id: 'd3',
        title: 'd3',
        taskIds: [],
    },
    'd4': {
        id: 'd4',
        title: 'd4',

        taskIds: [],
    },
    'd5': {

        id: 'd5',
        title: 'd5',
        taskIds: [],
    },
    'd6': {
        id: 'd6',
        title: 'd6',
        taskIds: [],

    },
    'd7': {
        id: 'd7',
        title: 'd7',
        taskIds: ['P4'],
    },
    'd8': {
        id: 'd8',
        title: 'd8',
        taskIds: ['Q1'],
    },
    'e1': {
        id: 'e1',
        title: 'e1',
        taskIds: ['k1'],
    },
    'e2': {

        id: 'e2',
        title: 'e2',
        taskIds: ['p5'],
    },
    'e3': {
        id: 'e3',
        title: 'e3',
        taskIds: [],
    },
    'e4': {
        id: 'e4',
        title: 'e4',
        taskIds: [],
    },
    'e5': {
        id: 'e5',
        title: 'e5',
        taskIds: [],
    },
    'e6': {
        id: 'e6',
        title: 'e6',
        taskIds: [],
    },

    'e7': {
        id: 'e7',
        title: 'e7',
        taskIds: ['P5'],
    },
    'e8': {
        id: 'e8',

        title: 'e8',
        taskIds: ['K1'],
    },
    'f1': {
        id: 'f1',
        title: 'f1',

        taskIds: ['b1'],
    },
    'f2': {
        id: 'f2',
        title: 'f2',
        taskIds: ['p6'],
    },
    'f3': {
        id: 'f3',
        title: 'f3',
        taskIds: [],
    },
    'f4': {
        id: 'f4',

        title: 'f4',
        taskIds: [],
    },
    'f5': {
        id: 'f5',
        title: 'f5',
        taskIds: [],
    },
    'f6': {
        id: 'f6',
        title: 'f6',
        taskIds: [],
    },
    'f7': {
        id: 'f7',
        title: 'f7',
        taskIds: ['P6'],
    },
    'f8': {
        id: 'f8',
        title: 'f8',
        taskIds: ['B1'],
    },
    'g1': {
        id: 'g1',
        title: 'g1',
        taskIds: ['n1'],
    },
    'g2': {
        id: 'g2',
        title: 'g2',
        taskIds: ['p7'],
    },
    'g3': {
        id: 'g3',
        title: 'g3',
        taskIds: [],
    },
    'g4': {
        id: 'g4',
        title: 'g4',
        taskIds: [],
    },
    'g5': {
        id: 'g5',
        title: 'g5',
        taskIds: [],
    },
    'g6': {
        id: 'g6',
        title: 'g6',
        taskIds: [],
    },
    'g7': {
        id: 'g7',
        title: 'g7',
        taskIds: ['P7'],
    },
    'g8': {

        id: 'g8',
        title: 'g8',
        taskIds: ['N1'],
    },
    'h1': {
        id: 'h1',
        title: 'h1',
        taskIds: ['r1'],
    },
    'h2': {
        id: 'h2',
        title: 'h2',
        taskIds: ['p8'],
    },
    'h3': {
        id: 'h3',
        title: 'h3',
        taskIds: [],
    },
    'h4': {
        id: 'h4',
        title: 'h4',
        taskIds: [],
    },
    'h5': {
        id: 'h5',
        title: 'h5',
        taskIds: [],
    },
    'h6': {
        id: 'h6',
        title: 'h6',
        taskIds: [],
    },
    'h7': {
        id: 'h7',
        title: 'h7',
        taskIds: ['P8'],
    },
    'h8': {
        id: 'h8',
        title: 'h8',
        taskIds: ['R1'],
    },

  },
  listOrder: [['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'], ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'], ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'], ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'], ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'], ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'], ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'], ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8']],
};
