import { Injectable } from '@nestjs/common';
import { createPool, Pool } from 'mysql2/promise';
import { Parkolo_interface } from './Models/Interfaces/Parkolo.interface.js';

@Injectable()
export class AppService {
  databasePool: Pool;
  constructor() {
    this.databasePool = createPool({
      host: "127.0.0.1",
      port: 1113,
      database: "db",
      user: "root",
      password: "root"
    })
  }
  async getAllParkolasok() {
    const [response] = await this.databasePool.execute("SELECT * FROM parkolas");
    const data = response as Parkolo_interface[];
    return data;
  };

  async insertNewParkolas(rendszam:string, tulajdonos:string, idotartam:number, fizetve:boolean) {
    const [response] = await this.databasePool.execute("INSERT INTO parkolas (rendszam,tulajdonos,idotartam,fizetve) VALUES (?,?,?,?)", [rendszam, tulajdonos, idotartam, fizetve]);
    console.log(response)
  };

  getHello(): string {
    return 'Hello World!';
  }
}
