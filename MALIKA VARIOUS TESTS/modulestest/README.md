1. Create 1 HTML file and 3 JS files, add.js, sub.js, and calculate.js

2. add export inside add.js and sub.js
const firstFunction = () => console.log('THIS IS MY FIRST FUNCTION!')
export { firstFunction }

3. Create import in calculate.js to link it to add.js and sub.js. 
import { firstFunction } from './firstFunction'


// HTML file will not understand this link connection, so we need to pass it through a transpiler (called webpack) to translate this code and give only one js file that will contain all 3 files to look like ES5(old way).

4. On the terminal type npm init -y to install package.json

5. On the terminal type npm i webpack to install webpack. This will install a node_modules library and package-lock.json

6. Create a webpack file named webpack.config.js

// To tell the webpack which file we want to transpile and what we want as an output, we enter this code into webpack.config.js

module.exports = {
    entry: "./calculate.js",
    output: {
        filename: "main.js",  //this "main.js" can be any name
    },
};

7. Add a script to the package.json file under "scripts"- "webpack": "webpack"

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "webpack": "webpack"
  },

8. In terminal type npm run webpack
// click yes when prompted
// after running the webpack, a dist folder is automatically created which automatically creates our "main.js" file which is pulled from our webpack.config.js

9. Connect the<script scr = "./dist/main.js"></script> to your HTML file