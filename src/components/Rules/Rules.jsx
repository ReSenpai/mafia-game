import styled from 'styled-components';

// === components ===
import { Layout } from 'src/components';
import { Typography } from '@material-ui/core';
// === utils ===
import { colors } from 'src/utils/variables';

const Rules = () => {
  return (
    <Layout>
      <RulesContainer>
        <RulesTitle>Правила</RulesTitle>
        <RulesList>
          <RulesItem>
            <Typography variant="h5" color="primary">
              Как общаться с другими игроками?
            </Typography>

            <RulesItemText>
              Если нажать на чей-то ник, то можно написать сообщение,
              адресованное именно ему, но доступное для чтения всем остальным
              присутствующим на улице. Если нажать на конверт, то сообщение
              будет приватным и окажется видным только Вам и адресату.
            </RulesItemText>
          </RulesItem>

          <RulesItem>
            <Typography variant="h5" color="primary">
              Как начать игру?
            </Typography>

            <RulesItemText>
              На главной странице можно создать партию самому, нажав кнопку
              «Создать». Либо же присоединиться к уже созданной заявке, нажав на
              красный крест справа от заявки. Игра начинается с того момента,
              когда наберётся указанное максимальное количество игроков, либо же
              истечёт время ожидания, а игроков в заявке будет 7 или более.
            </RulesItemText>
          </RulesItem>

          <RulesItem>
            <Typography variant="h5" color="primary">
              Как проходит игра?
            </Typography>

            <RulesItemText>
              Первые две минуты игры уходят на то, чтоб мафия могла обсудить
              план действий. Далее игра приобретает циклический характер: День:
              <ListItemPar>
                — Голосование, выбор посадки (днём честные жители, во время
                обсуждения, пытаются вычислить, кто в игре — мафия, и путём
                голосования выбирают, кого посадить в тюрьму)
              </ListItemPar>
              Ночь:
              <ListItemPar>
                — Ход комиссара (комиссар может проверить любого игрока и узнать
                его настоящую роль, а ночью мафия убивает честных жителей)
              </ListItemPar>
              <ListItemPar>
                — Ход мафии (чтобы убить честного жителя, мафия должна
                консолидированно проголосовать за одного и того же игрока)
              </ListItemPar>
              Игра продолжается до тех пор, пока в городе не останутся только
              честные жители или мафиози.
            </RulesItemText>
          </RulesItem>

          <RulesItem>
            <Typography variant="h5" color="primary">
              Какие роли есть в игре?
            </Typography>

            <RulesItemText>
              После начала партии случайным образом происходит распределение
              ролей. Выбор ролей ограничивается тремя: комиссар, мафия и честный
              человек.
            </RulesItemText>
          </RulesItem>

          <RulesItem>
            <Typography variant="h5" color="primary">
              Комиссар (ком, шериф)
            </Typography>

            <RulesItemText>
              Комиссар в свой ход может узнать роль любого другого игрока. А
              затем известить о своей проверке всех остальных. Если комиссар
              оказывается под угрозой посадки, то он должен огласить свою роль.
              Комиссар играет за честных жителей.
            </RulesItemText>
          </RulesItem>

          <RulesItem>
            <Typography variant="h5" color="primary">
              Честный человек (чиж, мир)
            </Typography>

            <RulesItemText>
              Знает только свою роль. Должен помнить, что в игре есть комиссар,
              словам которого можно доверять.
            </RulesItemText>
          </RulesItem>

          <RulesItem>
            <Typography variant="h5" color="primary">
              Мафия
            </Typography>

            <RulesItemText>
              Мафия видит свою роль и роль напарника. В первые две минуты у них
              есть возможность обсудить план на игру с помощью приватных
              сообщений. Ночью для убийства необходимо, чтоб каждый мафиози
              выбрал одну и ту же жертву.
            </RulesItemText>
          </RulesItem>

          <RulesItem>
            <Typography variant="h5" color="primary">
              Задача в игре
            </Typography>

            <RulesItemText>
              Для мафии — убить всех честных жителей, для честных жителей —
              посадить всю мафию в тюрьму. Игра продолжается до тех пор, пока в
              городе не останутся только честные жители или мафиози.
            </RulesItemText>
          </RulesItem>
        </RulesList>
      </RulesContainer>
    </Layout>
  );
};

export default Rules;

const { red } = colors;

const RulesContainer = styled.div``;

const RulesTitle = styled.div`
  font-size: 3em;
  text-align: center;
`;

const RulesList = styled.ul`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  gap: 3em;
`;

const RulesItem = styled.li`
  list-style-type: none;
`;

const ListItemPar = styled.p`
  margin-left: 10px;
`;

// const Typography = styled.div`
//   font-size: 1.5rem;
//   font-weight: 500;
//   color: ${red};
//   line-height: 146%;
// `;

const RulesItemText = styled.div`
  font-size: 1rem;
  line-height: 146%;
`;
