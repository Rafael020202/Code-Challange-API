export interface EnqueueProvider {
  enqueue(data: EnqueueProvider.Params): Promise<EnqueueProvider.Result>;
};

export namespace EnqueueProvider {
  export type Params = {
    topic: string;
    data: any
  };

  export type Result = any;
};
