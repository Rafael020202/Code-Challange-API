import Queue from 'bee-queue';

import { EnqueueProvider } from '@modules/submission/data/protocols';
import { makeDbStartAsyncSubmission, makeDbProcessAsyncSubmission } from '@modules/submission/main/factories/usecases';

const options = {
  removeOnSuccess: true,
  redis: {
    host: 'redis-17489.c15.us-east-1-4.ec2.cloud.redislabs.com',
    port: 17489,
    password: 'u1W8YLUnH0E7v7ggpPE38yxmuc3AuRbR'
  }
};

const startAsyncSubmissionQueue = new Queue('start-async-submission', options);
const processAsyncSubmissionQueue = new Queue('process-async-submission', options);


const queueMap = {
  'start-async-submission': startAsyncSubmissionQueue,
  'process-async-submission': processAsyncSubmissionQueue
};

export class BeeQueueAdapter implements EnqueueProvider {
  public async enqueue(data: EnqueueProvider.Params): Promise<EnqueueProvider.Result> {
    return queueMap[data.topic].createJob(data.data).save();
  }
}

startAsyncSubmissionQueue.process(async (job, done) => {
  console.log('execute startAsyncSubmissionQueue', job.data);

  const dbStartAsyncSubmission = makeDbStartAsyncSubmission();

  const fineshed = await dbStartAsyncSubmission.start(job.data).catch((e) => console.error(e));

  if (fineshed) {
    done();
  }
});

processAsyncSubmissionQueue.process(async (job, done) => {
  console.log('execute processAsyncSubmissionQueue', job.data);

  const dbProcessAsyncSubmission = makeDbProcessAsyncSubmission();

  const fineshed = await dbProcessAsyncSubmission.process(job.data).catch((e) => console.error(e));

  if (fineshed) {
    done();
  }
});

