import axios from 'axios';
import {
  CodeSubmitPovider,
  CheckSubmissionStatusProvider
} from '@modules/submission/data/protocols';

export class Judge0Adapter
  implements CodeSubmitPovider, CheckSubmissionStatusProvider {
  public async submit(
    data: CodeSubmitPovider.Params
  ): Promise<CodeSubmitPovider.Result> {
    const languageMapper = {
      1: 52,
      2: 52,
      3: 51,
      4: 77,
      5: 90,
      6: 60,
      7: 91,
      8: 93,
      9: 92
    };

    const response = await axios.post(
      `${process.env.JudgeAPIHost}/submissions/?base64_encoded=true`,
      {
        source_code: data.source_code,
        stdin: data.stdin,
        language_id: languageMapper[data.language]
      },
      {
        headers: {
          'X-RapidAPI-Key': `${process.env.XRapidAPIKey}`
        }
      }
    );

    return response.data;
  }

  public async checkStatus(
    id: string
  ): Promise<CheckSubmissionStatusProvider.Result> {
    const response = await axios.get(
      `${process.env.JudgeAPIHost}/submissions/${id}`,
      {
        headers: {
          'X-RapidAPI-Key': `${process.env.XRapidAPIKey}`
        }
      }
    );

    return response.data;
  }
}
