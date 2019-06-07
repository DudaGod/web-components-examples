# Web components examples

HTML Imports basically can’t import resources from other origins. For example, you can’t import an HTML file at http://example.com/ from http://webcomponents.org/.
To avoid this restriction, use CORS (Cross Origin Resource Sharing).

You will need to use a web server to run the examples.
Trying to open the files directly will generate an error.

One easy solution is to use [http-server](https://www.npmjs.com/package/http-server).
