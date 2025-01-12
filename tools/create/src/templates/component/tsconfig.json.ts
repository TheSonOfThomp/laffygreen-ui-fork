export const tsConfig = `{
  "extends": "@lg-tools/build/config/package.tsconfig.json",
   "compilerOptions": {
    "declarationDir": "dist",
    "outDir": "dist",
    "rootDir": "src",
    "baseUrl": ".",
    "paths": {
      "@leafygreen-ui/icon/dist/*": ["../icon/src/generated/*"],
      "@leafygreen-ui/*": ["../*/src"]
    }
  },
  "include": [
    "src/**/*"
  ],
  "exclude": ["**/*.spec.*", "**/*.story.*"],
  "references": [
    {
      "path": "../emotion"
    },
    {
      "path": "../lib"
    }
  ]
}`;
