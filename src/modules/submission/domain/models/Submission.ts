export type Submission = {
  id: number;
  status: string;
  owner: string;
  problem_id: string;
  source_code: string;
  time: number;
  memory: number;
  message: string;
  created_at: Date;
  updated_at: Date;
};
