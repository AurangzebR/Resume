export interface skillsType {
    name:string,
    noYears:number,
    description:string
}

export interface projectType{
companyName:string,
projectName:string,
dateFrom:{
    month:number,
    day:number,
    year:number}
dateTo:{
    month:number,
    day:number,
    year:number},
description:string

}