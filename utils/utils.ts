import fs from 'fs'
import { UserModel } from '../models/user.model';
export function genearateRandomNumber(min: number, max: number): number {
  const randomNumber = Math.random() * (max - min) + min;
  return Math.floor(randomNumber);
}

export function saveJsonData(jsonObject:object, fileUrl:string){
  let dataArray:object[] = []
  if(fs.existsSync(fileUrl)){
    const fileContent =  fs.readFileSync(fileUrl,"utf-8"); //readJSON  //existsSync = if file is not exists then it will create, if exists, then it will read existing file to proceed next work
    dataArray =  JSON.parse(fileContent);

  }
  dataArray.push(jsonObject)
  fs.writeFileSync(fileUrl, JSON.stringify(dataArray,null,2)) //null,2 is just for formatting

}

export function lastuserData(fileUrl:string):UserModel{
  const dataContent = fs.readFileSync(fileUrl,"utf-8");
  let dataArray =  JSON.parse(dataContent)
  return dataArray[dataArray.length - 1]
}