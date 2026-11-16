import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import { Parkolo_interface } from './Models/Interfaces/Parkolo.interface.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render("index")
  async getHello() {
    const parkolok:Parkolo_interface[] = await this.appService.getAllParkolasok()
    parkolok.sort((a,b)=> a.idotartam - b.idotartam)
    console.log(parkolok);
    return {parkolok:parkolok}
  }
}
