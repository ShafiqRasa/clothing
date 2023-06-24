/**
 * To import an svg icon as a ReactComponent in typescript got below error.
 * TypeScript is unable to find the module for the SVG file you're trying to import.
 * Therefore, this module is going to modify Typescript to be able to find module for the SVG
 * and include the file inside tsconfig.json in order to work properly!
 *  */
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
