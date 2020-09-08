# React SPA template
ReactでSPAを構築するためのテンプレートリポジトリです。


## storybookの導入
### 1. storybookのコマンドラインツールを導入する。  
```$ yarn add -D @storybook/cli```  

### 2. storybook対応したいプロジェクトフォルダ直下で、storybookの初期化処理を実行する。
```$ sb init```

### 3. Typescript対応
カタログ用コンポーネントをTypeScriptに対応する場合、下記プリセットを導入する。  
```$ yarn add @storybook/preset-typescript```  
[preset-typescript](https://github.com/storybookjs/presets/tree/master/packages/preset-typescript)  
  
次に、設定ファイル```.storybook/main.js```の対象コンポーネントとaddon定義を変更する。  
```javascript
stories: ['../stories/**/*.stories.js', '../stories/**/*.stories.tsx'],
addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/preset-typescript']
```

### 4. カタログ用コンポーネントの作成
```stories```ディレクトリ配下にコンポーネントを定義する。  
（Typescriptの場合、tsxで作成する。）

### 5. storybookを起動
下記コマンドでstorybookを起動し、ブラウザからカタログを確認できる。  
```$ yarn run start-storybook -p 6006```
