export default ({ title, toc, body, initialState }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
        <link rel="stylesheet" href="/assets/index.css" />
        <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css" />
      </head>
      
      <body>
        <div class="row" style="padding-top: 50px;">
          <div class="col-xs-offset-2 col-xs-2">
            <div id="root">${toc}</div>
          </div>
          <div class="col-xs-6">
            ${body}
          </div>
        </div>
      </body>
      
      <script src="/assets/bundle.js"></script>
      <script src="node_modules/jquery/dist/jquery.min.js"></script>
      <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    </html>
  `;
};
