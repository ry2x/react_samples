export const data: DataType[] = [
  {
    id: 'root',
    name: 'Parent',
    children: [
      {
        id: '1',
        name: 'Child - 1',
        children: [],
      },
      {
        id: '3',
        name: 'Child - 3',
        children: [
          {
            id: '4',
            name: 'Child - 4',
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: '1root',
    name: 'Parent1',
    children: [
      {
        id: '5',
        name: 'Child - 1-1',
        children: [],
      },
      {
        id: '7',
        name: 'Child - 3-1',
        children: [
          {
            id: '8',
            name: 'Child - 4-1',
            children: [],
          },
        ],
      },
    ],
  },
];

export type DataType = {
  id: string;
  name: string;
  children: DataType[];
};
