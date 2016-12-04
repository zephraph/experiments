import Vue from 'vue'
import app from './app'

import { createRenderer } from 'vue-server-renderer';

const renderer = createRenderer();

renderer.renderToString(app, (err, html) => {
  if (err) throw err;
  console.log(html);
});


// the default export should be a function
// which will receive the context of the render call
export default context => {
  console.log(context);
}
