require("babel-core/register")
require("chai/register-expect")
require("ignore-styles")
require("jsdom-global/register")

let Enzyme = require("enzyme")
let Adapter = require("enzyme-adapter-react-16")

Enzyme.configure({ adapter: new Adapter() })