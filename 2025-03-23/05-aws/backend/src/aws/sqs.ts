import { CreateBucketCommand, S3Client } from "@aws-sdk/client-s3";
import { CreateQueueCommand, SQSClient } from "@aws-sdk/client-sqs";
import config from 'config'

// read the config of s3, and clone it deeply
const sqsConfig = JSON.parse(JSON.stringify(config.get('sqs.connection')))

// if we're NOT running localstack, i.e. we want to run against AWS PRODUCTION servers
// then we MUST delete the `endpoint` property from the config object
if (!config.get<boolean>('sqs.isLocalstack')) delete sqsConfig.endpoint

// init the client
const sqsClient = new SQSClient(sqsConfig)
export let queueUrl = ''

export async function createAppQueueIfNotExist() {
    try {
        const q = await sqsClient.send(
            new CreateQueueCommand({
                QueueName: config.get('sqs.queueName')
            })
        )
        // console.log('Queue created: ', q.QueueUrl)
        queueUrl = q.QueueUrl
    } catch (e) {
        // ignore
        console.log('Queue probably already exist')
    }
}

export default sqsClient