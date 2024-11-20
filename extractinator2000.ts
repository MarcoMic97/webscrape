import * as Cheerio from 'cheerio';
import fs from 'node:fs';

const data = fs.readFileSync('xd.html')

const $ = Cheerio.load(data);
const xd = $('div.as-table-well');
const table = $(xd[0]).find('table');
const rows = $(table).find('tbody > tr');
const specs: Record<string, string> = {};
rows.each((_, element) => {
    const elements = $(element).children();
    const first = elements.first();
    const last = elements.last();
    specs[first.text().trim()] = last.text().trim();
});
console.log(specs);