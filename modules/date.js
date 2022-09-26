import { DateTime } from './luxon.js';

const dateFill = document.querySelector('#date');

const Date = () => {
  const now = DateTime.local();
  const date = now.toLocaleString(DateTime.DATE_MED);
  const time = now.toLocaleString(DateTime.TIME_WITH_SECONDS);
  dateFill.textContent = `${date} ${time}`;
};

export default Date;