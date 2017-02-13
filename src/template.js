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

export default ({ body, title, initialState }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
        <!--link rel="stylesheet" href="/assets/index.css" /-->
        <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"/>
      </head>
      
      <body>
        <div class="row">
          <div class="col-xs-3">
            <div id="root">${body}</div>
          </div>
          <div class="col-xs-9">
            ${pcontent}
          </div>
        </div>
      </body>
      
      <script src="/assets/bundle.js"></script>
      <script src="node_modules/jquery/dist/jquery.min.js"></script>
      <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    </html>
  `;
};
