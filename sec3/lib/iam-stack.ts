import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam';

export class IAMStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    // Create role
    const exampleLambdaRole = new iam.Role(this, 'ExampleLambdaRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      description: 'This role enables Lambda Function to access S3',
      roleName: 'example-lambda-role'
    });
    
    // Create policy
    exampleLambdaRole.attachInlinePolicy(new iam.Policy(this, 'ExampleLambdaPolicy', {
      statements: [new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['s3:GetObject', 's3:PutObject'],
        resources: ['arn:aws:s3:::${aws:username}-bucket/*'],
      })],
    }));

  
  }
}
