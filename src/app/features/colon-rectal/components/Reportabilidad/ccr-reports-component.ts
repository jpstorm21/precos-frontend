import { AfterViewInit, Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CCRPatientService } from 'src/app/features/colon-rectal/services/ccr-patient/ccr-patient.service';
import { AppConstants } from 'src/app/core/constants/app.constants';
import { Subscription } from 'rxjs';
import { CCRPatientreports } from 'src/app/features/colon-rectal/models/ccr-reports';
import { isThisSecond } from 'date-fns';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-ccr-reports',
  templateUrl: './ccr-reports-component.html',
  styleUrls: ['./ccr-reports-component.css']
})

export class ColonRectalReportsComponent implements AfterViewInit, OnDestroy {
  private sub$ = new Subscription()
  dataSourcereports!: MatTableDataSource<CCRPatientreports>;
  NO_TABLE_DATA = AppConstants.NO_TABLE_DATA
  private NO_DATA = AppConstants.NO_DATA;
  cantpacient!:number;
  checkcolonCountTrue!: number;
  pcloncheck!:number
  countpolyps!:number;
  cantfumadores!:number;
  pfumadores!:number;
  ppolipos!:number;
  pppolipos!:number;
  pneoplastic!:number;
  ppneoplastic!:number;
  pcolonoscopy!:number;
  ppcolonosocpy!:number;
  pmayoranios!:number;
  ppmayoranios!:number;
     // @ViewChild('grid') grid: MatGridList;
  cols = 2;
  gridByBreakpoint = {
  xl: 2,
  lg: 2,
  md: 2,
  sm: 1,
  xs: 1
  }
 
  constructor(private patientService: CCRPatientService) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngAfterViewInit() {
    this.sub$.add(this.patientService.getAllCCRPatientsForReports().subscribe(res => {
      const dataSourcereports = res.data;
      this.cantpacient = dataSourcereports.length;
      this.checkcolonCountTrue = dataSourcereports.filter(d => d.testresultcoloncheck).length
      this.pcloncheck = Math.round((this.checkcolonCountTrue/this.cantpacient)*100);
      this.cantfumadores = dataSourcereports.filter(d => d.smokes).length
      this.pfumadores = Math.round((this.cantfumadores/this.cantpacient)*100);
      this.ppolipos = dataSourcereports.filter(d => d.polyps).length
      this.pppolipos = Math.round((this.ppolipos/this.cantpacient)*100);
      this.pneoplastic = dataSourcereports.filter(d => d.neoplasticlesion).length
      this.ppneoplastic = Math.round((this.pneoplastic/this.cantpacient)*100);
      this.pcolonoscopy = dataSourcereports.filter(d => d.colonoscopy).length
      this.ppcolonosocpy = Math.round((this.pcolonoscopy/this.cantpacient)*100);
      this.pmayoranios = dataSourcereports.filter(d => d.edad == 56).length
      this.ppmayoranios = Math.round((this.pmayoranios/this.cantpacient)*100);
    }, err => {
      this.dataSourcereports = new MatTableDataSource();
      this.NO_TABLE_DATA = AppConstants.NO_TABLE_DATA_ERROR;
    }))
  }


  getporcentajeColoncheck( ) {

  }





}