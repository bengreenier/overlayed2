import React from 'react'
import Base, { ShapeProps } from './Base'

export const Chart = (props: ShapeProps) => <Base animation={animData} {...props} />

const animData = {
  v: '5.2.1',
  fr: 30,
  ip: 0,
  op: 180,
  w: 1155,
  h: 700,
  nm: 'chart black',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Path',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [437.498, 422.06, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
              ],
              t: 30,
              s: [0, 0, 100],
              e: [207, 207, 100],
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
              ],
              t: 35,
              s: [207, 207, 100],
              e: [207, 207, 100],
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
              ],
              t: 150,
              s: [207, 207, 100],
              e: [0, 0, 100],
            },
            { t: 155 },
          ],
          ix: 6,
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ind: 0,
              ty: 'sh',
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [-3.33, 0],
                    [0, 3.33],
                    [3.33, 0],
                    [0, -3.33],
                  ],
                  o: [
                    [3.33, 0],
                    [0, -3.33],
                    [-3.33, 0],
                    [0, 3.33],
                  ],
                  v: [
                    [-0.001, 6.028],
                    [6.029, -0.002],
                    [-0.001, -6.032],
                    [-6.031, -0.002],
                  ],
                  c: true,
                },
                ix: 2,
              },
              nm: 'Path 1',
              mn: 'ADBE Vector Shape - Group',
              hd: false,
            },
            {
              ty: 'fl',
              c: { a: 0, k: [0.980391979218, 0.890196025372, 0.678430974483, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              nm: 'Fill 1',
              mn: 'ADBE Vector Graphic - Fill',
              hd: false,
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: 'Transform',
            },
          ],
          nm: 'Path',
          np: 2,
          cix: 2,
          ix: 1,
          mn: 'ADBE Vector Group',
          hd: false,
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'Path',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [437.51, 376.566, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
              ],
              t: 20,
              s: [0, 0, 100],
              e: [207, 207, 100],
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
              ],
              t: 25,
              s: [207, 207, 100],
              e: [207, 207, 100],
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
              ],
              t: 145,
              s: [207, 207, 100],
              e: [0, 0, 100],
            },
            { t: 150 },
          ],
          ix: 6,
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ind: 0,
              ty: 'sh',
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [-3.33, 0],
                    [0, 3.33],
                    [3.33, 0],
                    [0, -3.33],
                  ],
                  o: [
                    [3.33, 0],
                    [0, -3.33],
                    [-3.33, 0],
                    [0, 3.33],
                  ],
                  v: [
                    [-0.001, 6.028],
                    [6.029, -0.002],
                    [-0.001, -6.032],
                    [-6.031, -0.002],
                  ],
                  c: true,
                },
                ix: 2,
              },
              nm: 'Path 1',
              mn: 'ADBE Vector Shape - Group',
              hd: false,
            },
            {
              ty: 'fl',
              c: { a: 0, k: [0.980391979218, 0.890196025372, 0.678430974483, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              nm: 'Fill 1',
              mn: 'ADBE Vector Graphic - Fill',
              hd: false,
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: 'Transform',
            },
          ],
          nm: 'Path',
          np: 2,
          cix: 2,
          ix: 1,
          mn: 'ADBE Vector Group',
          hd: false,
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: 'Path',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [463.8, 378.436, 0], ix: 2 },
        a: { a: 0, k: [-42.25, 0.75, 0], ix: 1 },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
              ],
              t: 25,
              s: [0, 207, 100],
              e: [207, 207, 100],
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
              ],
              t: 30,
              s: [207, 207, 100],
              e: [207, 207, 100],
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
              ],
              t: 145,
              s: [207, 207, 100],
              e: [0, 207, 100],
            },
            { t: 150 },
          ],
          ix: 6,
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ind: 0,
              ty: 'sh',
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [-0.53, 0],
                    [0, 0],
                    [0, -0.53],
                    [0, 0],
                    [0.53, 0],
                    [0, 0],
                    [0, 0.53],
                    [0, 0],
                  ],
                  o: [
                    [0, 0],
                    [0.53, 0],
                    [0, 0],
                    [0, 0.53],
                    [0, 0],
                    [-0.53, 0],
                    [0, 0],
                    [0, -0.53],
                  ],
                  v: [
                    [-41.465, -5.648],
                    [41.465, -5.648],
                    [42.425, -4.688],
                    [42.425, 4.682],
                    [41.465, 5.652],
                    [-41.465, 5.652],
                    [-42.425, 4.682],
                    [-42.425, -4.688],
                  ],
                  c: true,
                },
                ix: 2,
              },
              nm: 'Path 1',
              mn: 'ADBE Vector Shape - Group',
              hd: false,
            },
            {
              ty: 'fl',
              c: { a: 0, k: [0.980391979218, 0.890196025372, 0.678430974483, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              nm: 'Fill 1',
              mn: 'ADBE Vector Graphic - Fill',
              hd: false,
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: 'Transform',
            },
          ],
          nm: 'Path',
          np: 2,
          cix: 2,
          ix: 1,
          mn: 'ADBE Vector Group',
          hd: false,
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: 'Path',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [464.234, 422.603, 0], ix: 2 },
        a: { a: 0, k: [-52.25, 0.5, 0], ix: 1 },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
              ],
              t: 35,
              s: [0, 207, 100],
              e: [207, 207, 100],
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
              ],
              t: 40,
              s: [207, 207, 100],
              e: [207, 207, 100],
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
                '0p833_0p833_0p167_0p167',
              ],
              t: 150,
              s: [207, 207, 100],
              e: [0, 207, 100],
            },
            { t: 155 },
          ],
          ix: 6,
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ind: 0,
              ty: 'sh',
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [-0.53, 0],
                    [0, 0],
                    [0, -0.53],
                    [0, 0],
                    [0.53, 0],
                    [0, 0],
                    [0, 0.53],
                    [0, 0],
                  ],
                  o: [
                    [0, 0],
                    [0.53, 0],
                    [0, 0],
                    [0, 0.53],
                    [0, 0],
                    [-0.53, 0],
                    [0, 0],
                    [0, -0.53],
                  ],
                  v: [
                    [-51.675, -5.648],
                    [51.675, -5.648],
                    [52.635, -4.688],
                    [52.635, 4.682],
                    [51.675, 5.652],
                    [-51.675, 5.652],
                    [-52.635, 4.682],
                    [-52.635, -4.688],
                  ],
                  c: true,
                },
                ix: 2,
              },
              nm: 'Path 1',
              mn: 'ADBE Vector Shape - Group',
              hd: false,
            },
            {
              ty: 'fl',
              c: { a: 0, k: [0.980391979218, 0.890196025372, 0.678430974483, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              nm: 'Fill 1',
              mn: 'ADBE Vector Graphic - Fill',
              hd: false,
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: 'Transform',
            },
          ],
          nm: 'Path',
          np: 2,
          cix: 2,
          ix: 1,
          mn: 'ADBE Vector Group',
          hd: false,
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 5,
      ty: 4,
      nm: 'Path',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [791.073, 379.719, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [207, 207, 100], ix: 6 },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ind: 0,
              ty: 'sh',
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0, 0],
                    [59.8, -43.82],
                  ],
                  o: [
                    [43.83, 59.8],
                    [0, 0],
                  ],
                  v: [
                    [1.478, -93.811],
                    [-27.452, 93.809],
                  ],
                  c: false,
                },
                ix: 2,
              },
              nm: 'Path 1',
              mn: 'ADBE Vector Shape - Group',
              hd: false,
            },
            {
              ty: 'st',
              c: { a: 0, k: [0.074, 0.62, 0.72, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 8.672, ix: 5 },
              lc: 2,
              lj: 1,
              ml: 4,
              ml2: { a: 0, k: 4, ix: 8 },
              nm: 'Stroke 1',
              mn: 'ADBE Vector Graphic - Stroke',
              hd: false,
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: 'Transform',
            },
          ],
          nm: 'Path',
          np: 2,
          cix: 2,
          ix: 1,
          mn: 'ADBE Vector Group',
          hd: false,
        },
        {
          ty: 'tm',
          s: {
            a: 1,
            k: [
              {
                i: { x: [0.667], y: [1] },
                o: { x: [0.333], y: [0] },
                n: ['0p667_1_0p333_0'],
                t: 155,
                s: [0],
                e: [100],
              },
              { t: 165 },
            ],
            ix: 1,
          },
          e: {
            a: 1,
            k: [
              {
                i: { x: [0.667], y: [1] },
                o: { x: [0.333], y: [0] },
                n: ['0p667_1_0p333_0'],
                t: 15,
                s: [0],
                e: [100],
              },
              { t: 25 },
            ],
            ix: 2,
          },
          o: { a: 0, k: 0, ix: 3 },
          m: 1,
          ix: 2,
          nm: 'Trim Paths 1',
          mn: 'ADBE Vector Filter - Trim',
          hd: false,
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 6,
      ty: 4,
      nm: 'Path',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [758.368, 135.893, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
              o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
              n: ['0p667_1_0p333_0', '0p667_1_0p333_0', '0p667_1_0p333_0'],
              t: 10,
              s: [0, 0, 100],
              e: [207, 207, 100],
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [1, 1, 1] },
              o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
              n: ['0p833_1_0p333_0', '0p833_1_0p333_0', '0p833_1_0p333_0'],
              t: 20,
              s: [207, 207, 100],
              e: [207, 207, 100],
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [1, 1, 1] },
              o: { x: [0.167, 0.167, 0.167], y: [0, 0, 0] },
              n: ['0p833_1_0p167_0', '0p833_1_0p167_0', '0p833_1_0p167_0'],
              t: 150,
              s: [207, 207, 100],
              e: [0, 0, 100],
            },
            { t: 160 },
          ],
          ix: 6,
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ind: 0,
              ty: 'sh',
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [-6.13, 0],
                    [0, 6.14],
                    [6.14, 0],
                    [0, -6.13],
                  ],
                  o: [
                    [6.14, 0],
                    [0, -6.13],
                    [-6.13, 0],
                    [0, 6.14],
                  ],
                  v: [
                    [-0.002, 11.108],
                    [11.108, -0.002],
                    [-0.002, -11.112],
                    [-11.112, -0.002],
                  ],
                  c: true,
                },
                ix: 2,
              },
              nm: 'Path 1',
              mn: 'ADBE Vector Shape - Group',
              hd: false,
            },
            {
              ty: 'fl',
              c: { a: 0, k: [0.992156982422, 0.949020028114, 0.847059011459, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              nm: 'Fill 1',
              mn: 'ADBE Vector Graphic - Fill',
              hd: false,
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: 'Transform',
            },
          ],
          nm: 'Path',
          np: 2,
          cix: 2,
          ix: 1,
          mn: 'ADBE Vector Group',
          hd: false,
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 7,
      ty: 4,
      nm: 'Path',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [580.033, 270.177, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [207, 207, 100], ix: 6 },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ind: 0,
              ty: 'sh',
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [-4.44, 5.42],
                    [0, 7.01],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [-0.5, 0.1],
                  ],
                  o: [
                    [4.45, -5.41],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0.51, -0.07],
                    [6.88, -1.37],
                  ],
                  v: [
                    [8.346, 4.254],
                    [15.227, -14.956],
                    [-15.053, -14.956],
                    [-15.003, -15.006],
                    [-15.223, -14.966],
                    [-10.673, 15.004],
                    [-9.154, 14.744],
                  ],
                  c: true,
                },
                ix: 2,
              },
              nm: 'Path 1',
              mn: 'ADBE Vector Shape - Group',
              hd: false,
            },
            {
              ty: 'fl',
              c: { a: 0, k: [0.141176000237, 0.705882012844, 0.698038995266, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              nm: 'Fill 1',
              mn: 'ADBE Vector Graphic - Fill',
              hd: false,
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: 'Transform',
            },
          ],
          nm: 'Path',
          np: 2,
          cix: 2,
          ix: 1,
          mn: 'ADBE Vector Group',
          hd: false,
        },
        {
          ty: 'tm',
          s: { a: 0, k: 0, ix: 1 },
          e: {
            a: 1,
            k: [
              {
                i: { x: [0.667], y: [1] },
                o: { x: [0.333], y: [0] },
                n: ['0p667_1_0p333_0'],
                t: 36,
                s: [0],
                e: [100],
              },
              {
                i: { x: [0.563], y: [1] },
                o: { x: [0.199], y: [0] },
                n: ['0p563_1_0p199_0'],
                t: 51,
                s: [100],
                e: [47],
              },
              {
                i: { x: [0.748], y: [1] },
                o: { x: [0.318], y: [0] },
                n: ['0p748_1_0p318_0'],
                t: 93,
                s: [47],
                e: [100],
              },
              {
                i: { x: [0.761], y: [1] },
                o: { x: [0.417], y: [0] },
                n: ['0p761_1_0p417_0'],
                t: 140,
                s: [100],
                e: [0],
              },
              { t: 150 },
            ],
            ix: 2,
          },
          o: { a: 0, k: 179, ix: 3 },
          m: 1,
          ix: 2,
          nm: 'Trim Paths 1',
          mn: 'ADBE Vector Filter - Trim',
          hd: false,
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 8,
      ty: 4,
      nm: 'Path',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [540.47, 207.569, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [207, 207, 100], ix: 6 },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ind: 0,
              ty: 'sh',
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0, 0],
                    [0, 0],
                    [6.97, 0.68],
                    [5.83, -3.89],
                    [2.03, -6.7],
                    [0.19, -2],
                    [0, 0],
                  ],
                  o: [
                    [0, 0],
                    [-4.95, -4.95],
                    [-6.97, -0.69],
                    [-5.82, 3.89],
                    [-0.59, 1.94],
                    [0, 0],
                    [0, 0],
                  ],
                  v: [
                    [4.393, 15.097],
                    [25.773, -6.283],
                    [7.333, -15.003],
                    [-12.457, -10.053],
                    [-24.607, 6.337],
                    [-25.777, 12.257],
                    [4.303, 15.157],
                  ],
                  c: true,
                },
                ix: 2,
              },
              nm: 'Path 1',
              mn: 'ADBE Vector Shape - Group',
              hd: false,
            },
            {
              ty: 'fl',
              c: { a: 0, k: [0.196078002453, 0.227450996637, 0.42352899909, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              nm: 'Fill 1',
              mn: 'ADBE Vector Graphic - Fill',
              hd: false,
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: 'Transform',
            },
          ],
          nm: 'Path',
          np: 2,
          cix: 2,
          ix: 1,
          mn: 'ADBE Vector Group',
          hd: false,
        },
        {
          ty: 'tm',
          s: { a: 0, k: 0, ix: 1 },
          e: {
            a: 1,
            k: [
              {
                i: { x: [0.667], y: [1] },
                o: { x: [0.333], y: [0] },
                n: ['0p667_1_0p333_0'],
                t: 30,
                s: [0],
                e: [100],
              },
              {
                i: { x: [0.648], y: [1] },
                o: { x: [0.304], y: [0] },
                n: ['0p648_1_0p304_0'],
                t: 50,
                s: [100],
                e: [43],
              },
              {
                i: { x: [0.673], y: [0.003] },
                o: { x: [0.333], y: [0] },
                n: ['0p673_0p003_0p333_0'],
                t: 78,
                s: [43],
                e: [59.328],
              },
              {
                i: { x: [0.74], y: [1] },
                o: { x: [0.383], y: [0.223] },
                n: ['0p74_1_0p383_0p223'],
                t: 120,
                s: [59.328],
                e: [100],
              },
              {
                i: { x: [0.741], y: [1] },
                o: { x: [0.401], y: [0] },
                n: ['0p741_1_0p401_0'],
                t: 140,
                s: [100],
                e: [0],
              },
              { t: 150 },
            ],
            ix: 2,
          },
          o: { a: 0, k: 0, ix: 3 },
          m: 1,
          ix: 2,
          nm: 'Trim Paths 1',
          mn: 'ADBE Vector Filter - Trim',
          hd: false,
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 9,
      ty: 4,
      nm: 'Oval',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [548.52, 238.08, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [207, 207, 100], ix: 6 },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ind: 0,
              ty: 'sh',
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [-16.57, 0],
                    [0, 16.57],
                    [0, 0],
                    [0, 0],
                    [8.42, 0],
                    [0, -16.57],
                  ],
                  o: [
                    [16.57, 0],
                    [0, 0],
                    [0, 0],
                    [-5.45, -5.58],
                    [-16.57, 0],
                    [0, 16.57],
                  ],
                  v: [
                    [0, 30],
                    [30, 0],
                    [0, 0.31],
                    [21.48, -20.95],
                    [0, -30],
                    [-30, 0],
                  ],
                  c: true,
                },
                ix: 2,
              },
              nm: 'Path 1',
              mn: 'ADBE Vector Shape - Group',
              hd: false,
            },
            {
              ty: 'fl',
              c: { a: 0, k: [0.952941000462, 0.752941012383, 0.27058801055, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              nm: 'Fill 1',
              mn: 'ADBE Vector Graphic - Fill',
              hd: false,
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: 'Transform',
            },
          ],
          nm: 'Oval',
          np: 2,
          cix: 2,
          ix: 1,
          mn: 'ADBE Vector Group',
          hd: false,
        },
        {
          ty: 'tm',
          s: { a: 0, k: 0, ix: 1 },
          e: {
            a: 1,
            k: [
              {
                i: { x: [0.667], y: [1] },
                o: { x: [0.333], y: [0] },
                n: ['0p667_1_0p333_0'],
                t: 25,
                s: [0],
                e: [100],
              },
              {
                i: { x: [0.648], y: [1] },
                o: { x: [0.303], y: [0] },
                n: ['0p648_1_0p303_0'],
                t: 50,
                s: [100],
                e: [70],
              },
              {
                i: { x: [0.754], y: [1] },
                o: { x: [0.37], y: [0] },
                n: ['0p754_1_0p37_0'],
                t: 93,
                s: [70],
                e: [100],
              },
              {
                i: { x: [0.741], y: [1] },
                o: { x: [0.401], y: [0] },
                n: ['0p741_1_0p401_0'],
                t: 140,
                s: [100],
                e: [0],
              },
              { t: 150 },
            ],
            ix: 2,
          },
          o: { a: 0, k: 124, ix: 3 },
          m: 1,
          ix: 2,
          nm: 'Trim Paths 1',
          mn: 'ADBE Vector Filter - Trim',
          hd: false,
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 10,
      ty: 4,
      nm: 'Oval',
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [550.072, 352.447, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
              o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
              n: ['0p667_1_0p333_0', '0p667_1_0p333_0', '0p667_1_0p333_0'],
              t: 5,
              s: [0, 0, 100],
              e: [207, 207, 100],
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [1, 1, 1] },
              o: { x: [0.167, 0.167, 0.167], y: [0, 0, 0] },
              n: ['0p833_1_0p167_0', '0p833_1_0p167_0', '0p833_1_0p167_0'],
              t: 20,
              s: [207, 207, 100],
              e: [207, 207, 100],
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [1, 1, 1] },
              o: { x: [0.167, 0.167, 0.167], y: [0, 0, 0] },
              n: ['0p833_1_0p167_0', '0p833_1_0p167_0', '0p833_1_0p167_0'],
              t: 159,
              s: [207, 207, 100],
              e: [0, 0, 100],
            },
            { t: 170 },
          ],
          ix: 6,
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              d: 1,
              ty: 'el',
              s: { a: 0, k: [238.5, 238.5], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: 'Ellipse Path 1',
              mn: 'ADBE Vector Shape - Ellipse',
              hd: false,
            },
            {
              ty: 'fl',
              c: { a: 0, k: [1, 0.7, 0.7, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              nm: 'Fill 1',
              mn: 'ADBE Vector Graphic - Fill',
              hd: false,
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: 'Transform',
            },
          ],
          nm: 'Oval',
          np: 2,
          cix: 2,
          ix: 1,
          mn: 'ADBE Vector Group',
          hd: false,
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0,
    },
  ],
  markers: [],
}
