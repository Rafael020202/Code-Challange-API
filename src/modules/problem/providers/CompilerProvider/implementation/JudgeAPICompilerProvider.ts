import { inject, injectable } from "tsyringe";
import axios from 'axios';
import ICompilerProvider from "../models/IComplierProvider";

interface IResponse {
  stdout: string;
  time: number;
  memory: number;
  compile_output: string;
  message: string;
}

@injectable()
export default class JudgeAPICompilerProvider implements ICompilerProvider  {
  
  constructor(
    /*@inject('ICompilerProvider')
    private judgeAPICompilerProvider: ICompilerProvider
    */
  ) {}

  public async submit(source_code: string): Promise<IResponse> {
    const response = await axios.post('https://judge0-ce.p.rapidapi.com/submissions/?base64_encoded=true',{
      source_code: "I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbigpIHsKCWludCBpLCBudW07CgkKCWZvcihpPTA7IGkgPCAyOyBpKyspIHsKCQlzY2FuZigiJWQiLCAmbnVtKTsKCQlwcmludGYoIiVkXG4iLCBudW0pOwoJfQoJCglyZXR1cm4gMDsKfQ==",
      language_id: 48,
      stdin: "MSAx"
    },{
      headers: {
        'X-RapidAPI-Key': '71d2871ddbmsh46410df080512eap12fbd7jsn38b22ce12877' 
      }
    }) as IResponse;   

    console.log(response);

    return response;
  }

}