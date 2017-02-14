import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';
import template from './template';
import Fs from 'fs';
import Remarkable from 'remarkable';
import Toc from 'markdown-toc';

let tc = new Remarkable();
let md = new Remarkable()
let ptoc, pcontent;

Fs.readFile('readme.md', (err, data) => {
    var temp;

    if (err) throw err;
    data = data.toString();
    
    temp= tc.use(Toc.plugin()).render(data).content;

    ptoc = md.render(temp);
    pcontent = md.render(data);
});

const server = express();

server.use('/assets', express.static('assets'));
server.use('/node_modules', express.static('../node_modules'));

server.get('/', (req, res) => {
  const initialState = { toc: ptoc };
  const toc = renderToString(<App {...initialState} />);

  res.send(template({
    title: 'MDreader(Simple)',
    toc: toc,
    body: pcontent,
    initialState: JSON.stringify(initialState)
  }));
});

server.listen(8080);
console.log('listening');
