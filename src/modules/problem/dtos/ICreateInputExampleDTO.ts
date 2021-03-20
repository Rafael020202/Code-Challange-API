export default interface ICreateInputExampleDTO{
    value: string;
    problem_id: string;

    output: { value: string; input_example_id: string; }
}