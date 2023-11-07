# CDK の基礎

1. [Getting started with the AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)
   * `app` がアプリケーションで複数の `stack` から構成される。 `stack` はプログラムのクラスと一致し、 `construct` を使って組み立てる。 
   * `constructs` は L1 / L2 / L3 の 3 つのレベル (Construct) で抽象化されている。 L1 は CloudFormation と等価。
2. [Working with the AWS CDK in TypeScript](https://docs.aws.amazon.com/cdk/v2/guide/work-with-cdk-typescript.html)
   * Construct は scope / id / props を引数にとる。
   * TypeScript のコンパイル (tsc) は CDK が自動でやってくれる。
3. [AWS CDK Reference](https://docs.aws.amazon.com/cdk/api/v2/)
   * リファレンスを参照しながら `lib` 内のファイルを編集。
   * `cdk synth` で CloudFormation を生成する。
   * `cdk deploy` でデプロイ。初回実行前に `cdk bootstrap aws://ACCOUNT-NUMBER/REGION` が必要。
   * `cdk destroy` で削除。
 