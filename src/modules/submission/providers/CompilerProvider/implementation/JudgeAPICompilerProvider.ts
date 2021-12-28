import { injectable } from "tsyringe";
import axios from 'axios';
import ICompilerProvider from "../models/IComplierProvider";

interface ISubmissionStatus {
  stdout: string;
  time: number;
  memory: number;
  compile_output: string;
  message: string;
}

interface ISubmit {
  source_code: string;
  stdin: string;
}

interface IResponse {
  token: string;
}

@injectable()
export default class JudgeAPICompilerProvider implements ICompilerProvider  {
  
  public async submit({source_code, stdin}: ISubmit): Promise<IResponse> {

    const response = await axios.post(`${process.env.JudgeAPIHost}/submissions/?base64_encoded=true`,{
      source_code,
      language_id: 52,
      stdin
    },{
      headers: {
        'X-RapidAPI-Key': `${process.env.XRapidAPIKey}` 
      }
    });   

    return response.data;
  }

  public async getSubmissionStatus(id: string): Promise<ISubmissionStatus> {
    const response = await axios.get(`${process.env.JudgeAPIHost}/submissions/${id}`, {
      headers: {
        'X-RapidAPI-Key': `${process.env.XRapidAPIKey}` 
      }
    });
    
    return response.data;
  }

}