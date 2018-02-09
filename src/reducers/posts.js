import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

/*
 *
 * Это reducer, он обрабатывает наши actions. Можно создать несколько редьюсеров для разных
 * по смыслу событий.
 *
 * Reducer это функция (всегда), которая принимает на вход два параметра,
 *
 * первый - state, это или кусочек данных из всего приложения который мы можем с помощью
 * этого редьюсера изменять.
 *
 * второй - action, это событие которое мы вызвали. Событием в redux служит объект, который по
 * договоренности должен содержать в себе тип события, и определенные данные которые
 * опять же по договоренности называются payload, этим payload может быть что угодно.
 *
 * Есть еще одно правило - функция reducer должна являться чистой функцией.
 *
 * Чистая функция — это функция, которая при одинаковых аргументах всегда
 * возвращает одни и те же значения и не имеет видимых побочных эффектов.
 *
 */

/* global localStorage */

const initial = JSON.parse(localStorage.getItem('posts')) || InitialState.posts;

export default function posts(state = initial, action) {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_POST:
      return [{ ...payload, id: state[state.length - 1].id + 1 }, ...state];

    case types.UPDATE_EDITED_POST:
      return state.map((item) => {
        if (item.id === Number(payload.id)) return { ...item, ...payload };
        return item;
      });

    case types.SEARCH_POST:
      // TODO: search
      return state;

    case types.UPDATE_CONTENT_TOGGLER:
      return state.map((item) => {
        if (item.id === payload) return { ...item, contentToggle: !item.contentToggle };
        return { ...item, contentToggle: false };
      });

    case types.DELETE_POST:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
}
