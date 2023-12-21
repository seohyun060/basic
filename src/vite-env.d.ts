/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_API_HOST: string;
  // readonly VITE_API_S3: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
