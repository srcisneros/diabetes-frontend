import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendServiceService } from 'src/app/services/backend-service.service';

@Component({
  selector: 'app-crea-data',
  templateUrl: './crea-data.component.html',
  styleUrls: ['./crea-data.component.css']
})
export class CreaDataComponent {

  datos: any = {};

  constructor(private fb: FormBuilder, private backendService: BackendServiceService){
  }

  form: FormGroup = this.fb.group({
    hcl: ['', [Validators.required]],
    genero: ['', [Validators.required]],
    edad: ['', [Validators.required]],
    urea: ['', [Validators.required]],
    creatinina: ['', [Validators.required]],
    hba1c: ['', [Validators.required]],
    colesterol: ['', [Validators.required]],
    trigliceridos: ['', [Validators.required]],
    hdl: ['', [Validators.required]],
    ldl: ['', [Validators.required]],
    vldl: ['', [Validators.required]],
    imc: ['', [Validators.required]],

  })

  // preventSpecialCharacters(event: KeyboardEvent) {
  //   // Regular expression to allow digits, periods, and minus signs (for negative numbers)
  //   const allowedChars = /[0-9.-b]/;
  
  //   if (!allowedChars.test(event.key)) {
  //     event.preventDefault();
  //   } else if (event.key === ".") {
  //     // Allow only a single decimal point
  //     const input = event.target as HTMLInputElement;
  //     if (input.value.includes(".")) {
  //       event.preventDefault();
  //     }
  //   }
  // }

  preventSpecialCharacters(event: KeyboardEvent) {
    // Regular expression to allow only digits
    const allowedChars = /[0-9.-b]/;
  
    if (!allowedChars.test(event.key)) {
      event.preventDefault();
    }
}


  onSubmit(){

    // console.log(this.form);

    // if (this.form.invalid) {
    //   return
    // }

    // console.log(this.form.value);
    this.backendService.ingresarDatos(this.datos).subscribe(
      (response) => {
        console.log('Data ingresada correctamente: ', response);
      },
      (error) => {
        console.error('Error al ingresar datos: ', error);
        
      }
    );
  }
  
  
}
