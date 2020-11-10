type TPlayer = {
  name: string;
  id: number;
};

enum EStatus {
  open = 1,
  close = 2,
}

export interface IGetInitialGame {
  id: number;
  name: string;
  date: Date;
  size: number;
  players: Array<TPlayer>;
  status: EStatus;
}

const getInitialGame = (): IGetInitialGame => {
  const id = Math.random();
  const size = (5 + id * 20) ^ 0;

  return {
    id,
    name: 'Game name ' + ((id * 1000) ^ 0),
    date: new Date(),
    size,
    players: [
      {
        name: 'Lupusregina[beta]',
        id: Math.random(),
      },
      {
        name: 'Den Ri',
        id: Math.random(),
      },
      {
        name: 'Зомби Ich bin Roboter',
        id: Math.random(),
      },
      {
        name: 'Bunk Bunkovich',
        id: Math.random(),
      },
      {
        name: 'Aleksander irreligious86',
        id: Math.random(),
      },
      {
        name: 'Anton Miroshnichenko',
        id: Math.random(),
      },
      {
        name: 'Ilya Kozyura',
        id: Math.random(),
      },
      {
        name: 'Chingiz Mamyev',
        id: Math.random(),
      },
      {
        name: 'pacificescape',
        id: Math.random(),
      },
    ].slice(0, size),
    status: 9 < size ? 1 : 0, // 1 - open, 0 -- close ???
  };
};

export default getInitialGame;
