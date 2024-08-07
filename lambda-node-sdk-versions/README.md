# Lambda to get current node version and sdk versions

Running [this code](./index.mjs) with architecture: arm64, runtime: Node.js 20.x, region: us-east-1 on the 31/7/2024 gave the following.

```json
{
  "process": {
    "versions": {
      "node": "20.15.1",
      "acorn": "8.11.3",
      "ada": "2.7.8",
      "ares": "1.28.1",
      "base64": "0.5.2",
      "brotli": "1.1.0",
      "cjs_module_lexer": "1.2.2",
      "cldr": "45.0",
      "icu": "75.1",
      "llhttp": "8.1.2",
      "modules": "115",
      "napi": "9",
      "nghttp2": "1.61.0",
      "openssl": "3.1.5",
      "simdutf": "5.2.8",
      "tz": "2024a",
      "undici": "6.13.0",
      "unicode": "15.1",
      "uv": "1.46.0",
      "uvwasi": "0.0.21",
      "v8": "11.3.244.8-node.23",
      "zlib": "1.3.0.1-motley-7d77fb7"
    }
  },
  "sdk": {
    "3.374.0": [
      "abort-controller",
      "config-resolver",
      "credential-provider-imds",
      "eventstream-codec",
      "eventstream-serde-browser",
      "eventstream-serde-config-resolver",
      "eventstream-serde-node",
      "eventstream-serde-universal",
      "fetch-http-handler",
      "hash-node",
      "hash-stream-node",
      "invalid-dependency",
      "is-array-buffer",
      "md5-js",
      "middleware-apply-body-checksum",
      "middleware-content-length",
      "middleware-endpoint",
      "middleware-retry",
      "middleware-serde",
      "middleware-stack",
      "node-config-provider",
      "node-http-handler",
      "property-provider",
      "protocol-http",
      "querystring-builder",
      "querystring-parser",
      "service-error-classification",
      "shared-ini-file-loader",
      "signature-v4",
      "smithy-client",
      "url-parser",
      "util-base64",
      "util-body-length-node",
      "util-buffer-from",
      "util-config-provider",
      "util-defaults-mode-node",
      "util-hex-encoding",
      "util-middleware",
      "util-retry",
      "util-stream",
      "util-stream-node",
      "util-uri-escape",
      "util-utf8",
      "util-waiter"
    ],
    "3.598.0": [
      "body-checksum-node",
      "client-sso",
      "cloudfront-signer",
      "core",
      "credential-provider-env",
      "credential-provider-http",
      "credential-provider-ini",
      "credential-provider-process",
      "credential-provider-sso",
      "credential-provider-web-identity",
      "middleware-api-key",
      "middleware-bucket-endpoint",
      "middleware-endpoint-discovery",
      "middleware-eventstream",
      "middleware-expect-continue",
      "middleware-flexible-checksums",
      "middleware-host-header",
      "middleware-location-constraint",
      "middleware-logger",
      "middleware-recursion-detection",
      "middleware-sdk-api-gateway",
      "middleware-sdk-ec2",
      "middleware-sdk-glacier",
      "middleware-sdk-machinelearning",
      "middleware-sdk-rds",
      "middleware-sdk-route53",
      "middleware-sdk-s3",
      "middleware-sdk-s3-control",
      "middleware-sdk-sqs",
      "middleware-sdk-sts",
      "middleware-sdk-transcribe-streaming",
      "middleware-signing",
      "middleware-ssec",
      "middleware-token",
      "middleware-user-agent",
      "region-config-resolver",
      "sha256-tree-hash",
      "signature-v4-crt",
      "signature-v4-multi-region",
      "token-providers",
      "types",
      "util-create-request",
      "util-dns",
      "util-endpoints",
      "util-format-url",
      "util-user-agent-node",
      "xhr-http-handler",
      "xml-builder"
    ],
    "3.568.0": [
      "chunked-stream-reader-node",
      "util-arn-parser",
      "util-locate-window"
    ],
    "3.606.0": [
      "client-accessanalyzer",
      "client-account",
      "client-acm",
      "client-amplify",
      "client-amplifybackend",
      "client-amplifyuibuilder",
      "client-apigatewaymanagementapi",
      "client-apigatewayv2",
      "client-app-mesh",
      "client-appconfig",
      "client-appconfigdata",
      "client-appfabric",
      "client-appflow",
      "client-appintegrations",
      "client-application-auto-scaling",
      "client-application-discovery-service",
      "client-application-insights",
      "client-applicationcostprofiler",
      "client-apprunner",
      "client-appstream",
      "client-appsync",
      "client-apptest",
      "client-arc-zonal-shift",
      "client-athena",
      "client-auto-scaling",
      "client-auto-scaling-plans",
      "client-b2bi",
      "client-backup-gateway",
      "client-batch",
      "client-bcm-data-exports",
      "client-bedrock-agent",
      "client-bedrock-agent-runtime",
      "client-bedrock-runtime",
      "client-billingconductor",
      "client-braket",
      "client-budgets",
      "client-chime-sdk-identity",
      "client-chime-sdk-media-pipelines",
      "client-chime-sdk-meetings",
      "client-cleanrooms",
      "client-cleanroomsml",
      "client-cloud9",
      "client-cloudcontrol",
      "client-clouddirectory",
      "client-cloudformation",
      "client-cloudfront",
      "client-cloudfront-keyvaluestore",
      "client-cloudhsm",
      "client-cloudsearch",
      "client-cloudsearch-domain",
      "client-cloudtrail",
      "client-cloudtrail-data",
      "client-cloudwatch",
      "client-cloudwatch-events",
      "client-cloudwatch-logs",
      "client-codeartifact",
      "client-codebuild",
      "client-codecommit",
      "client-codeconnections",
      "client-codedeploy",
      "client-codeguru-reviewer",
      "client-codeguruprofiler",
      "client-codepipeline",
      "client-codestar",
      "client-codestar-connections",
      "client-codestar-notifications",
      "client-cognito-identity",
      "client-cognito-identity-provider",
      "client-cognito-sync",
      "client-comprehend",
      "client-comprehendmedical",
      "client-compute-optimizer",
      "client-config-service",
      "client-connect-contact-lens",
      "client-connectcampaigns",
      "client-connectcases",
      "client-connectparticipant",
      "client-controlcatalog",
      "client-controltower",
      "client-cost-and-usage-report-service",
      "client-cost-explorer",
      "client-cost-optimization-hub",
      "client-customer-profiles",
      "client-data-pipeline",
      "client-database-migration-service",
      "client-databrew",
      "client-dataexchange",
      "client-datasync",
      "client-datazone",
      "client-dax",
      "client-deadline",
      "client-device-farm",
      "client-direct-connect",
      "client-directory-service",
      "client-dlm",
      "client-docdb",
      "client-docdb-elastic",
      "client-dynamodb",
      "client-dynamodb-streams",
      "client-ebs",
      "client-ec2",
      "client-ec2-instance-connect",
      "client-ecr",
      "client-ecr-public",
      "client-ecs",
      "client-efs",
      "client-eks-auth",
      "client-elastic-beanstalk",
      "client-elastic-load-balancing",
      "client-elastic-load-balancing-v2",
      "client-elastic-transcoder",
      "client-elasticache",
      "client-emr-containers",
      "client-emr-serverless",
      "client-entityresolution",
      "client-eventbridge",
      "client-evidently",
      "client-finspace",
      "client-finspace-data",
      "client-firehose",
      "client-fis",
      "client-fms",
      "client-forecast",
      "client-forecastquery",
      "client-frauddetector",
      "client-freetier",
      "client-fsx",
      "client-gamelift",
      "client-glacier",
      "client-global-accelerator",
      "client-grafana",
      "client-groundstation",
      "client-health",
      "client-healthlake",
      "client-iam",
      "client-identitystore",
      "client-imagebuilder",
      "client-inspector",
      "client-inspector-scan",
      "client-internetmonitor",
      "client-iot-1click-devices-service",
      "client-iot-1click-projects",
      "client-iot-data-plane",
      "client-iot-events-data",
      "client-iot-jobs-data-plane",
      "client-iotdeviceadvisor",
      "client-iotfleethub",
      "client-iotfleetwise",
      "client-iotsecuretunneling",
      "client-iotthingsgraph",
      "client-ivs",
      "client-ivs-realtime",
      "client-ivschat",
      "client-kafka",
      "client-kafkaconnect",
      "client-kendra",
      "client-kendra-ranking",
      "client-keyspaces",
      "client-kinesis",
      "client-kinesis-analytics",
      "client-kinesis-video",
      "client-kinesis-video-archived-media",
      "client-kinesis-video-media",
      "client-kinesis-video-signaling",
      "client-kinesis-video-webrtc-storage",
      "client-kms",
      "client-launch-wizard",
      "client-lex-model-building-service",
      "client-lex-runtime-service",
      "client-license-manager",
      "client-license-manager-user-subscriptions",
      "client-lightsail",
      "client-location",
      "client-lookoutequipment",
      "client-lookoutmetrics",
      "client-lookoutvision",
      "client-machine-learning",
      "client-mailmanager",
      "client-managedblockchain",
      "client-managedblockchain-query",
      "client-marketplace-agreement",
      "client-marketplace-catalog",
      "client-marketplace-commerce-analytics",
      "client-marketplace-deployment",
      "client-marketplace-entitlement-service",
      "client-marketplace-metering",
      "client-mediaconnect",
      "client-mediapackage",
      "client-mediapackage-vod",
      "client-mediapackagev2",
      "client-mediastore",
      "client-mediastore-data",
      "client-mediatailor",
      "client-medical-imaging",
      "client-memorydb",
      "client-migration-hub",
      "client-migration-hub-refactor-spaces",
      "client-migrationhub-config",
      "client-migrationhuborchestrator",
      "client-mobile",
      "client-mq",
      "client-mturk",
      "client-mwaa",
      "client-neptune",
      "client-neptune-graph",
      "client-network-firewall",
      "client-networkmanager",
      "client-networkmonitor",
      "client-nimble",
      "client-oam",
      "client-omics",
      "client-opensearchserverless",
      "client-opsworks",
      "client-opsworkscm",
      "client-organizations",
      "client-outposts",
      "client-panorama",
      "client-pca-connector-ad",
      "client-pca-connector-scep",
      "client-personalize",
      "client-personalize-events",
      "client-personalize-runtime",
      "client-pinpoint",
      "client-pinpoint-sms-voice",
      "client-pinpoint-sms-voice-v2",
      "client-pipes",
      "client-polly",
      "client-pricing",
      "client-proton",
      "client-qconnect",
      "client-qldb",
      "client-qldb-session",
      "client-quicksight",
      "client-rbin",
      "client-rds",
      "client-rds-data",
      "client-redshift",
      "client-redshift-data",
      "client-redshift-serverless",
      "client-rekognition",
      "client-repostspace",
      "client-resiliencehub",
      "client-resource-groups-tagging-api",
      "client-robomaker",
      "client-rolesanywhere",
      "client-route-53-domains",
      "client-route53-recovery-cluster",
      "client-route53-recovery-control-config",
      "client-route53-recovery-readiness",
      "client-route53profiles",
      "client-route53resolver",
      "client-rum",
      "client-s3-control",
      "client-s3outposts",
      "client-sagemaker",
      "client-sagemaker-a2i-runtime",
      "client-sagemaker-edge",
      "client-sagemaker-featurestore-runtime",
      "client-sagemaker-geospatial",
      "client-sagemaker-metrics",
      "client-sagemaker-runtime",
      "client-savingsplans",
      "client-scheduler",
      "client-schemas",
      "client-secrets-manager",
      "client-serverlessapplicationrepository",
      "client-service-catalog",
      "client-service-quotas",
      "client-servicediscovery",
      "client-ses",
      "client-sfn",
      "client-shield",
      "client-signer",
      "client-simspaceweaver",
      "client-sms",
      "client-snow-device-management",
      "client-snowball",
      "client-sns",
      "client-sqs",
      "client-ssm",
      "client-ssm-contacts",
      "client-ssm-incidents",
      "client-ssm-sap",
      "client-sso-admin",
      "client-sso-oidc",
      "client-storage-gateway",
      "client-sts",
      "client-supplychain",
      "client-support",
      "client-swf",
      "client-synthetics",
      "client-taxsettings",
      "client-textract",
      "client-timestream-influxdb",
      "client-timestream-query",
      "client-timestream-write",
      "client-tnb",
      "client-transcribe",
      "client-transfer",
      "client-translate",
      "client-trustedadvisor",
      "client-verifiedpermissions",
      "client-voice-id",
      "client-vpc-lattice",
      "client-waf",
      "client-waf-regional",
      "client-wisdom",
      "client-workdocs",
      "client-worklink",
      "client-workmail",
      "client-workmailmessageflow",
      "client-workspaces-thin-client",
      "client-workspaces-web",
      "credential-provider-cognito-identity",
      "credential-providers",
      "ec2-metadata-service",
      "lib-dynamodb",
      "polly-request-presigner",
      "rds-signer",
      "util-dynamodb"
    ],
    "3.607.0": [
      "client-acm-pca",
      "client-cloudhsm-v2",
      "client-emr",
      "client-glue",
      "client-kinesis-analytics-v2",
      "client-opensearch",
      "client-pi",
      "client-workspaces"
    ],
    "3.608.0": [
      "client-amp",
      "client-api-gateway",
      "client-application-signals",
      "client-artifact",
      "client-auditmanager",
      "client-backup",
      "client-bedrock",
      "client-chatbot",
      "client-chime",
      "client-chime-sdk-messaging",
      "client-chime-sdk-voice",
      "client-codecatalyst",
      "client-codeguru-security",
      "client-connect",
      "client-detective",
      "client-devops-guru",
      "client-drs",
      "client-eks",
      "client-elastic-inference",
      "client-elasticsearch-service",
      "client-greengrass",
      "client-greengrassv2",
      "client-guardduty",
      "client-inspector2",
      "client-iot",
      "client-iot-events",
      "client-iot-wireless",
      "client-iotanalytics",
      "client-iotsitewise",
      "client-iottwinmaker",
      "client-lakeformation",
      "client-lambda",
      "client-lex-models-v2",
      "client-lex-runtime-v2",
      "client-license-manager-linux-subscriptions",
      "client-m2",
      "client-macie2",
      "client-mediaconvert",
      "client-medialive",
      "client-mgn",
      "client-migrationhubstrategy",
      "client-neptunedata",
      "client-osis",
      "client-payment-cryptography",
      "client-payment-cryptography-data",
      "client-pinpoint-email",
      "client-privatenetworks",
      "client-qbusiness",
      "client-ram",
      "client-rekognitionstreaming",
      "client-resource-explorer-2",
      "client-resource-groups",
      "client-route-53",
      "client-s3",
      "client-securityhub",
      "client-securitylake",
      "client-service-catalog-appregistry",
      "client-sesv2",
      "client-support-app",
      "client-transcribe-streaming",
      "client-wafv2",
      "client-wellarchitected",
      "client-xray",
      "lib-storage",
      "s3-presigned-post",
      "s3-request-presigner"
    ],
    "3.600.0": [
      "credential-provider-node"
    ],
    "3.572.0": [
      "endpoint-cache"
    ],
    "3.605.0": [
      "eventstream-handler-node",
      "middleware-websocket"
    ],
    "3.193.0": [
      "middleware-sdk-eventbridge"
    ],
    "3.209.0": [
      "util-base64-node"
    ],
    "3.259.0": [
      "util-utf8-browser",
      "util-utf8-node"
    ]
  }
}
```

