import './data.js';
import {createData} from './data.js';
import {renderRandomCard} from './cards-render.js';
//console.log(createData());

const dates = createData();
renderRandomCard(dates);

//const cards = createData().map((item)=>renderCard(item));
