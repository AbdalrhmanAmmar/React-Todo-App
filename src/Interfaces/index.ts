export interface ITask {
  YourTask: string;
  Date: string;
  Time: string;
}

type TformatnameInput =  'YourTask' | 'Date'|'Time'

export interface IFormInput{
        
        type: string,
        id: string,
         name:TformatnameInput
        placeholder:string
   
}