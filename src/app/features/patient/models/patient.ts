export interface Patient {
    rut:string;
    name?:string;
    lastName?:string;
    lastName2?:string;
    state?:string;
    sex?:string;
    nationality?:string;
    birthday?:string;
    region?:string;
    previousRegion?:string;
    commune?:string;
    medicalFacility?:string;
    cesfam?:string;
    address?:string;
    village?:string;
    residenceTime?:boolean;
    cellphone?:number;
    maritalState?:string;
    emergencyPhone?:number;
    deceased?:boolean;
    deceasedByCancer?:boolean;
    cancerDetectionDate?:Date;
    fonasa?:string;
    volunteerAgreement?:boolean;
    mail?:string;
    idPatient:number;
    age?:number
    deceaseDate?:Date;
}

export interface CancerCheck{
    ccr?:number,
    cbp?:number,
    idPatient:number,
  }
