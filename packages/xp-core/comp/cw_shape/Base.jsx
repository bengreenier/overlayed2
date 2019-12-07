import React from 'react'
import PropTypes from 'prop-types'
import Lottie from 'react-lottie'
import { Box } from 'grommet'

export default class BaseShape extends React.Component {
  render() {
    const options = {
      loop: this.props.shape.loop,
      autoplay: this.props.shape.autoplay,
      animationData: this.props.animation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }

    const shapeProps = {
      ...this.props.shape,
      options,
    }

    return (
      <Box width={this.props.width} height={this.props.height}>
        <Lottie {...shapeProps} />
      </Box>
    )
  }
}

export const propTypes = {
  shape: PropTypes.shape({
    loop: PropTypes.bool,
    autoplay: PropTypes.bool,
    isStopped: PropTypes.bool,
    isPaused: PropTypes.bool,
    eventListeners: PropTypes.arrayOf(PropTypes.func),
    speed: PropTypes.number,
    direction: PropTypes.number,
    isClickToPauseDisabled: PropTypes.bool,
    title: PropTypes.string,
  }),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
}

BaseShape.propTypes = {
  ...propTypes,
  animation: PropTypes.object.isRequired,
}

// default props below animData

// a loading circle dataset (for the default use)
const animData = {
  v: '5.2.1',
  fr: 30,
  ip: 0,
  op: 180,
  w: 1155,
  h: 700,
  nm: 'dotted line black',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Oval',
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.667], y: [1] },
              o: { x: [0.333], y: [0] },
              n: ['0p667_1_0p333_0'],
              t: 165,
              s: [100],
              e: [0],
            },
            { t: 175 },
          ],
          ix: 11,
        },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ['0p833_0p833_0p167_0p167'],
              t: 0,
              s: [0],
              e: [180],
            },
            { t: 180 },
          ],
          ix: 10,
        },
        p: { a: 0, k: [577.5, 350, 0], ix: 2 },
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
              t: 5,
              s: [0, 0, 100],
              e: [862.05, 862.05, 100],
            },
            {
              i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
              o: { x: [0.167, 0.167, 0.167], y: [0, 0, 0] },
              n: ['0p667_1_0p167_0', '0p667_1_0p167_0', '0p667_1_0p167_0'],
              t: 15,
              s: [862.05, 862.05, 100],
              e: [862.05, 862.05, 100],
            },
            {
              i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
              o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
              n: ['0p667_1_0p333_0', '0p667_1_0p333_0', '0p667_1_0p333_0'],
              t: 165,
              s: [862.05, 862.05, 100],
              e: [210, 210, 100],
            },
            { t: 175 },
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
              s: { a: 0, k: [54.742, 54.742], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: 'Ellipse Path 1',
              mn: 'ADBE Vector Shape - Ellipse',
              hd: false,
            },
            {
              ty: 'st',
              c: { a: 0, k: [0.074, 0.62, 0.72, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 2, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              ml2: { a: 0, k: 4, ix: 8 },
              d: [{ n: 'd', nm: 'dash', v: { a: 0, k: 2.03, ix: 1 } }],
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
          e: { a: 0, k: 100, ix: 2 },
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
      ind: 2,
      ty: 4,
      nm: 'Oval 2',
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.667], y: [1] },
              o: { x: [0.167], y: [0] },
              n: ['0p667_1_0p167_0'],
              t: 56,
              s: [21],
              e: [100],
            },
            {
              i: { x: [0.667], y: [1] },
              o: { x: [0.333], y: [0] },
              n: ['0p667_1_0p333_0'],
              t: 165,
              s: [100],
              e: [0],
            },
            { t: 175 },
          ],
          ix: 11,
        },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ['0p833_0p833_0p167_0p167'],
              t: 0,
              s: [0],
              e: [180],
            },
            { t: 180 },
          ],
          ix: 10,
        },
        p: { a: 0, k: [594.3, 359.45, 0], ix: 2 },
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
              t: 5,
              s: [0, 0, 100],
              e: [862.05, 862.05, 100],
            },
            {
              i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
              o: { x: [0.167, 0.167, 0.167], y: [0, 0, 0] },
              n: ['0p667_1_0p167_0', '0p667_1_0p167_0', '0p667_1_0p167_0'],
              t: 15,
              s: [862.05, 862.05, 100],
              e: [862.05, 862.05, 100],
            },
            {
              i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
              o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
              n: ['0p667_1_0p333_0', '0p667_1_0p333_0', '0p667_1_0p333_0'],
              t: 165,
              s: [862.05, 862.05, 100],
              e: [210, 210, 100],
            },
            { t: 175 },
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
              s: { a: 0, k: [54.742, 54.742], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: 'Ellipse Path 1',
              mn: 'ADBE Vector Shape - Ellipse',
              hd: false,
            },
            {
              ty: 'st',
              c: { a: 0, k: [1, 0.7, 0.7, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 2, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              ml2: { a: 0, k: 4, ix: 8 },
              d: [{ n: 'd', nm: 'dash', v: { a: 0, k: 2.03, ix: 1 } }],
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
          e: { a: 0, k: 100, ix: 2 },
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
  ],
  markers: [],
}

BaseShape.defaultProps = {
  animation: animData,
  shape: { loop: true, autoplay: true, isClickToPauseDisabled: true },
  width: 'medium',
}
