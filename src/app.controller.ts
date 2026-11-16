import { Controller, Get, Render, Post, Body } from '@nestjs/common';
import { AppService } from './app.service.js';
import { Parkolo_interface } from './Models/Interfaces/Parkolo.interface.js';
import { Parkolo_DTO } from './Models/DTOs/Parkolo.dto.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render("index")
  async getIndex() {
    const parkolok: Parkolo_interface[] = await this.appService.getAllParkolasok()
    parkolok.sort((a, b) => a.idotartam - b.idotartam)
    console.log(parkolok);
    return { parkolok: parkolok }
  }

  @Get("new-parkolo")
  @Render("newParkolo")
  async getNewParkolo() {
    return {
      err: null,
      rendszamErr: null,
      tulajdonosErr: null,
      idotartamErr: null
    }

  }

  @Post("new-parkolo")
  @Render("newParkolo")
  async postNewParkolo(@Body() parkoloDTO: Parkolo_DTO) {
    let isErr = false;
    const errMess = "Problema merult fel, ellenorizd az adatokat."
    let isRendszamErr = false;
    const rendszamErrMess = "A rendszamnak megkell felelni a magyar formatumnak."
    let isTulajdonosErr = false;
    const tulajdonosErrMess = "A tulajdonos neve legalabb 6 karakter legyen"
    let isIdotartamErr = false;
    const idotartamErrMess = "Az idotartam pozitiv egesz szam lehet es maximum 24 oran keresztul tarthat"
    let isFizetveErr = false;
    const fizetveErrMess = "A fizetve csak logikai ertek lehet"

    const rendszamRegex = new RegExp(/[a-z]{2} [a-z]{2}-\d{3}/i)
    if (!rendszamRegex.test(parkoloDTO.rendszam)) {
      isRendszamErr = true;
      isErr = true;
    };

    if (parkoloDTO.tulajdonos.trim().length < 6) {
      isTulajdonosErr = true;
      isErr = true;
    };

    if (Number(parkoloDTO.idotartam) < 0 || Number(parkoloDTO.idotartam) > 24 || Number(parkoloDTO.idotartam) == null || Number.isNaN(Number(parkoloDTO.idotartam))) {
      isIdotartamErr = true;
      isErr = true;
    }

    console.log(parkoloDTO)

    return {
      err: isErr ? errMess : null,
      rendszamErr: isRendszamErr ? rendszamErrMess : null,
      tulajdonosErr: isTulajdonosErr ? tulajdonosErrMess : null,
      idotartamErr: isIdotartamErr ? idotartamErrMess : null
    }
  }

}
