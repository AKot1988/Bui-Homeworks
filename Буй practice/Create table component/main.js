import { collection, options } from './src/table/collectionSource.js';
import UniversalTable from './src/table/UniversalTable.js';
import './main.scss';

const newTable = new UniversalTable(collection, options);
newTable.render(document.getElementById('app'));
