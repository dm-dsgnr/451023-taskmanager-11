import moment from "moment";

import {ESC_KEYCODE, ENTER_KEYCODE} from '../const.js';

export const isEscKeyDown = (evt, action) => {
  return evt.keyCode === ESC_KEYCODE ? action() : ``;
};

export const isEnterKeyDown = (evt, action) => {
  return evt.keyCode === ENTER_KEYCODE ? action() : ``;
};

export const formatTime = (date) => {
  return moment(date).format(`hh:mm`);
};

export const formatDate = (date) => {
  return moment(date).format(`DD MMMM`);
};

export const sortArray = (property, asc = false) => {
  let sortOrder = 1;

  if (!asc) {
    sortOrder = -1;
  }

  return function (a, b) {
    let result = 0;

    if (a[property] < b[property]) {
      result = -1;
    } else if (a[property] > b[property]) {
      result = 1;
    }

    return result * sortOrder;
  };
};

export const isRepeating = (repeatingDays) => {
  return Object.values(repeatingDays).some(Boolean);
};

export const isOverdueDate = (dueDate, date) => {
  return dueDate < date && !isOneDay(date, dueDate);
};

export const isOneDay = (dateA, dateB) => {
  const a = moment(dateA);
  const b = moment(dateB);
  return a.diff(b, `days`) === 0 && dateA.getDate() === dateB.getDate();
};
