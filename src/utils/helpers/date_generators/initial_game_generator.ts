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

  const names = [
    'Lupusregina[beta]',
    'Den Ri',
    'Зомби Ich bin Roboter',
    'Bunk Bunkovich',
    'Aleksander irreligious86',
    'Anton Miroshnichenko',
    'Ilya Kozyura',
    'Chingiz Mamyev',
    'pacificescape',
  ];

  return {
    id,
    name: ((id * 1000) ^ 0).toString(),
    date: new Date(),
    size,
    players: [...names.map(name => ({ name: name, id: Math.random() }))].slice(
      0,
      size,
    ),
    status: 9 < size ? 1 : 0, // 1 - open, 0 -- close ???
  };
};

export default getInitialGame;
