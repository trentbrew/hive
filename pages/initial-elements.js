import { MarkerType, Position } from '@vue-flow/core'

export const initialElements = [
  {
    id: '1',
    type: 'resizable',
    label: 'Node 1 (resizable + image)',
    position: { x: 0, y: 50 },
    sourcePosition: Position.Right,
    style: { background: '#fff', border: '2px solid black' },
  },
  {
    id: '2',
    type: 'resizable',
    label: 'Node 2 (resizable)',
    position: { x: 250, y: 0 },
    targetPosition: Position.Left,
    style: { background: '#fff', border: '2px solid black' },
  },
  {
    id: '3',
    label: 'Node 3 (not resizable)',
    position: { x: 250, y: 100 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { background: '#fff', border: '2px solid black' },
  },
  {
    id: '4',
    type: 'custom',
    label: 'Node 4 (custom + not resizable)',
    position: { x: 500, y: 150 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '5',
    label: 'Node 5 (not resizable)',
    position: { x: 750, y: 50 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },

  // ---

  // { id: '6', label: 'Node 1', position: { x: 400, y: 400 } },
  // { id: '7', label: 'Node 2', position: { x: 800, y: 800 } },
  // { id: '8', label: 'Node 3', position: { x: 800, y: 400 } },
  // { id: '9', label: 'Node 4', position: { x: 400, y: 800 } },
  // {
  //   id: '10',
  //   style: { borderColor: 'red' },
  //   label: 'Drag me over another node',
  //   position: { x: 200, y: 600 },
  // },
  // { id: 'e1-2', source: '1', target: '2', animated: true },
  // { id: 'e1-3', source: '1', target: '3', markerEnd: MarkerType.Arrow },
  // {
  //   id: 'e4-5',
  //   source: '4',
  //   target: '5',
  //   style: { stroke: 'orange' },
  //   labelBgStyle: { fill: 'orange' },
  // },
  // { id: 'e3-4', source: '3', target: '4' },
]
