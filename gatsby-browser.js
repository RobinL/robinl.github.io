import './src/styles/global.css'
import './src/styles/prism-atom-dark.css'

import { Prism } from "prism-react-renderer";

(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-python");
