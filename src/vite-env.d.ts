/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_SCRIPT_URL?: string;
  readonly VITE_GOOGLE_SCRIPT_URL_ENGAGEMENT?: string;
  readonly VITE_GOOGLE_SCRIPT_URL_WEDDING?: string;
  readonly VITE_GOOGLE_SCRIPT_URL_WEDDING_ONLY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.JPG' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
