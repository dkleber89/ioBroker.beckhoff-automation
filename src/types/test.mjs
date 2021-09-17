import fs from 'fs';

const jsonFile = fs.readFileSync('./datatyps.json', { encoding: 'utf-8' });

const jsonData = JSON.parse(jsonFile);

let items = [];
const crazyItems = [];

const readType = element => {
  if (element.type.length >= 1) {
    items.push(element.type);
  }

  if (element.datatyps) {
    element.datatyps.forEach(element1 => {
      readType(element1);
    });
  }

  if (element.type.length <= 0 && !element.datatyps) {
    crazyItems.push({ name: element.name, type: element.type, datatyps: element.datatyps });
  }
};

jsonData.forEach(element => {
  readType(element);
});

items = [...new Set(items)];

items = items.sort();

console.log(items);
