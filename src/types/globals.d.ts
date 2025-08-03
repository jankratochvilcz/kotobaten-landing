// Global type declarations

// Image imports
declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

// browser-monads module
declare module "browser-monads" {
  export const window: Window & typeof globalThis;
  export const document: Document;
  export const navigator: Navigator;
  export const location: Location;
}