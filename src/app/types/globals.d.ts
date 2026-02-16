declare module "*.module.css";
declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}
declare module "*.svg" {
    import React from "react";
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";

declare const __IS_DEV__: boolean;
declare const __API__: string;

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
