import './UniversalTable.scss';
import createElement from './utils.js';
import { collection, options } from './collectionSource.js';

export default function UniversalTable(collection, options = [{}]) {
  this.tableBody = null;
  this.collection = collection;
  this.options = options;
  this.emptyCellValue = ''
  this.sortingHeader = options.headers.find(
    ({ sortBy, sort }) => sortBy && sort
  );
  if (!this.sortingHeader) {
    throw new TypeError('No header found matching sorting header criteria!');
  }

  this.collection = collection.sort(this.sortingHeader.sort);

  if (
    (!this.options.deletable && this.options.onDelete) ||
    (this.options.deletable && !this.options.onDelete)
  ) {
    throw new Error('Both arguments are required: deleteable and onDelete');
  }
  this.deletable = this.options.deletable;
  this.onDelete = this.options.onDelete;
  this.headers = this.deletable
    ? [...options.headers, { name: 'delete', title: 'Delete' }]
    : options.headers;

  this.classes = {
    cellUnsorted: options?.classes?.cellUnsorted || 'table__cell--unsorted',
    cellSorted: options?.classes?.cellSorted || 'table__cell--sorted',
    cell: options?.classes?.cell || 'table__cell',
    row: options?.classes?.row || 'table__row',
    headerRow: options?.classes?.headerRow || 'table__header-row',
    table: options?.classes?.table || 'table',
  };
}

UniversalTable.prototype.render = function (parent) {
  const tableHeader = new createElement({
    tagName: 'ul',
    className: this.classes.table,
  });
  const tableHeaderRow = new createElement({
    tagName: 'li',
    onClick: (event) => {
      this.sortByHeaderRow(event);
    },
    className: [this.classes.row],
  });

  this.tableBody = createElement({
    tagName: 'ul',
    className: this.classes.table,
  });
  tableHeaderRow.innerHTML = this.headers
    .map(
      (headerCell) =>
        `<span class="${this.classes.cell}" data-property-name="${headerCell.name}">${headerCell.title}</span>`
    )
    .join('');

  tableHeader.append(tableHeaderRow);

  this.rentedTableBody();

  //тут в оригіналі ми ше додаємо на рядки таблиці для видалення транзакції. (куркулятор.юніверсалТабле)
  parent.append(tableHeader, this.tableBody);
};

UniversalTable.prototype.rentedTableBody = function () {
  this.tableBody.replaceChildren();
  if (this.deletable && this.onDelete) {
    this.collection = this.collection.map((collectionItem) => ({
      ...collectionItem,
      delete: `<button id="${collectionItem.id}"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>`,
    }));
  }

  this.collection.forEach((row, index) => {
    const tableRow = new createElement({
      tagName: 'li',
      className: this.classes.row,
    });
    tableRow.dataset.index = index;
    tableRow.innerHTML = this.headers
      .map(
        ({ name }) =>
          `<span class="${this.classes.cell}">${
            row[name] || this.emptyCellValue
          }</span>`
      )
      .join('');
    this.tableBody.append(tableRow);
  });

  //   this.collection.forEach((collectionItem, index) => {const tableRow = new CreateElement ({tagName: 'li', className: this.classes.row})
  //    tableRow.dataset.index = index
  //    tableRow.innerHTML = this.headers.map(({name}) => {`<span class="${this.classes.cell}">${collectionItem[name] || this.emptyCellValue}</span>`}).join('')
  //    this.tableBody.append(tableRow)
  //    })
};
