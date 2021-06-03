# webpack

### commonJS, ESM 표준 사용 sample

- commonJS

```
// commonJS 설치
npm install esm

// commonJS 실행 (/commonJS_MODULE 폴더경로로 이동 후 실행)
node index.js
```

- ESM

```
// ESM 설치
npm install esm

// ESM 실행 (/ESM_MODULE 폴더경로로 이동 후 실행)
node -r esm index.js
```

- Module 종류

1. Built-in Core Module (예 : Node.js module)
2. Community-based Module (예: NPM)
   - npm CLI를 사용해야 한다 (예: npm install ModuleName)
3. Local Module (특정 프로젝트에 정의된 모듈)
