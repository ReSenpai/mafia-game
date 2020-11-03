import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import HeaderContainer from '../Header/HeaderContainer';
import Layout from '../Layout/Layout';
import '../../utils/reset/reset.css';
import { colors } from '../../utils/variables';

const Rules = () => {
  return (
    <Layout>
      <HeaderContainer />
      <RulesContainer>
        <RulesTitle>Правила</RulesTitle>
        <RulesList>
          <Carousel itemsToScroll={1} itemsToShow={1}>
            <RulesItem>
              <RulesItemTitle>Как общаться с другими игроками?</RulesItemTitle>

              <RulesItemText>
                Если нажать на чей-то ник, то можно написать сообщение,
                адресованное именно ему, но доступное для чтения всем остальным
                присутствующим на улице. Если нажать на конверт, то сообщение
                будет приватным и окажется видным только Вам и адресату.
              </RulesItemText>

              <RulesItem>
                <RulesItemTitle>Как начать игру?</RulesItemTitle>

                <RulesItemText>
                  На главной странице можно создать партию самому, нажав кнопку
                  «Создать». Либо же присоединиться к уже созданной заявке, нажав на
                  красный крест справа от заявки. Игра начинается с того момента,
                  когда наберётся указанное максимальное количество игроков, либо же
                  истечёт время ожидания, а игроков в заявке будет 7 или более.
                </RulesItemText>
              </RulesItem>

              <RulesItem>
                <RulesItemTitle>Как проходит игра?</RulesItemTitle>

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

            </RulesItem>
            <RulesItem>
              <RulesItemTitle>Какие роли есть в игре?</RulesItemTitle>

              <RulesItemText>
                После начала партии случайным образом происходит распределение
                ролей. Выбор ролей ограничивается тремя: комиссар, мафия и честный
                человек.
              </RulesItemText>
              <RulesItem>
                <RulesItemTitle>Комиссар (ком, шериф)</RulesItemTitle>

                <RulesItemText>
                  Комиссар в свой ход может узнать роль любого другого игрока. А
                  затем известить о своей проверке всех остальных. Если комиссар
                  оказывается под угрозой посадки, то он должен огласить свою роль.
                  Комиссар играет за честных жителей.
                </RulesItemText>
              </RulesItem>

              <RulesItem>
                <RulesItemTitle>Честный человек (чиж, мир)</RulesItemTitle>

                <RulesItemText>
                  Знает только свою роль. Должен помнить, что в игре есть комиссар,
                  словам которого можно доверять.
                </RulesItemText>
              </RulesItem>

              <RulesItem>
                <RulesItemTitle>Мафия</RulesItemTitle>

                <RulesItemText>
                  Мафия видит свою роль и роль напарника. В первые две минуты у них
                  есть возможность обсудить план на игру с помощью приватных
                  сообщений. Ночью для убийства необходимо, чтоб каждый мафиози
                  выбрал одну и ту же жертву.
                </RulesItemText>
              </RulesItem>

              <RulesItem>
                <RulesItemTitle>Задача в игре</RulesItemTitle>

                <RulesItemText>
                  Для мафии — убить всех честных жителей, для честных жителей —
                  посадить всю мафию в тюрьму. Игра продолжается до тех пор, пока в
                  городе не останутся только честные жители или мафиози.
                </RulesItemText>
              </RulesItem>
            </RulesItem>
          </Carousel>
        </RulesList>
      </RulesContainer>
    </Layout>
  );
};

export default Rules;

const { red } = colors;

const RulesContainer = styled.div`
  margin-top: 4em;
`;

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

const RulesItemTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${red};
  line-height: 146%;
`;

const RulesItemText = styled.div`
  font-size: 1rem;
  line-height: 146%;
  margin-bottom: 25px;
`;
