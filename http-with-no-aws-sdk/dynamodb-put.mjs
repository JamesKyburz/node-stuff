import crypto from 'node:crypto'

//function sdk() {}
export const handler = async function () {
  console.time('fn')
  // AWS parameters
  const method = 'POST'
  const service = 'dynamodb'
  const host = `dynamodb.${process.env.AWS_REGION}.amazonaws.com`
  const region = 'eu-west-1'
  const endpoint = `https://${host}/`
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
  const sessionToken = process.env.AWS_SESSION_TOKEN
  const amzTarget = 'DynamoDB_20120810.PutItem'
  const contentType = 'application/x-amz-json-1.0'

  // Request parameters
  const requestPayload = JSON.stringify({
    TableName: process.env.DYNAMODB_TABLE_NAME,
    Item: {
      pk: { S: 'httptest' },
      sk: { S: 'httptest' },
      LastPostDateTime: { S: '201303190422' },
      Tags: { SS: ['Update', 'Multiple Items'] },
      ForumName: { S: 'Amazon DynamoDB' },
      Message: { S: 'I want to update multiple items in a single call' },
      Subject: { S: 'How do I update multiple items?' },
      LastPostedBy: { S: 'fred@example.com' },
    },
  })

  const traceId = process.env._X_AMZN_TRACE_ID

  // TODO xray segments without using third party code

  // Create a date for headers and the credential string
  const amzDate = new Date().toISOString().replace(/[:-]|\.\d{3}/g, '')
  const dateStamp = amzDate.slice(0, 8)

  // Task 1: Create Canonical Request
  const canonicalUri = '/'
  const canonicalQueryString = ''
  const canonicalHeaders = `content-type:${contentType}\nhost:${host}\nx-amz-date:${amzDate}\nx-amz-security-token:${sessionToken}\nx-amz-target:${amzTarget}\n`
  const signedHeaders =
    'content-type;host;x-amz-date;x-amz-security-token;x-amz-target'
  const payloadHash = crypto
    .createHash('sha256')
    .update(requestPayload)
    .digest('hex')
  const canonicalRequest = `${method}\n${canonicalUri}\n${canonicalQueryString}\n${canonicalHeaders}\n${signedHeaders}\n${payloadHash}`

  // Task 2: Create the string to sign
  const algorithm = 'AWS4-HMAC-SHA256'
  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`
  const stringToSign = `${algorithm}\n${amzDate}\n${credentialScope}\n${crypto.createHash('sha256').update(canonicalRequest).digest('hex')}`

  // Task 3: Calculate the signature
  const getSignatureKey = (key, dateStamp, regionName, serviceName) => {
    const kDate = crypto
      .createHmac('sha256', `AWS4${key}`)
      .update(dateStamp)
      .digest()
    const kRegion = crypto
      .createHmac('sha256', kDate)
      .update(regionName)
      .digest()
    const kService = crypto
      .createHmac('sha256', kRegion)
      .update(serviceName)
      .digest()
    const kSigning = crypto
      .createHmac('sha256', kService)
      .update('aws4_request')
      .digest()
    return kSigning
  }

  const signingKey = getSignatureKey(
    secretAccessKey,
    dateStamp,
    region,
    service,
  )
  const signature = crypto
    .createHmac('sha256', signingKey)
    .update(stringToSign)
    .digest('hex')

  // Task 4: Add signing information to the request headers
  const authorizationHeader = `${algorithm} Credential=${accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`

  const headers = {
    'Content-Type': contentType,
    'X-Amz-Date': amzDate,
    'X-Amz-Security-Token': sessionToken,
    'X-Amz-Target': amzTarget,
    Authorization: authorizationHeader,
    ...(traceId && { 'X-Amzn-Trace-Id': traceId }),
  }

  const abortSignal = AbortSignal.timeout(3000)

  console.time('dynamodb put')

  const res = await fetch(endpoint, {
    signal: abortSignal,
    keepalive: true,
    method: 'POST',
    headers,
    body: requestPayload,
  })

  console.timeEnd('dynamodb put')
  console.log(res.status)
  if (res.status !== 200) {
    console.log(await res.text())
  }
  console.timeEnd('fn')
}
