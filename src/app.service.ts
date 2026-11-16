import { Injectable } from '@nestjs/common';
import { createPool, QueryResult } from 'mysql2/promise';
import { Parkolo_interface } from './Models/Interfaces/Parkolo.interface.js';

@Injectable()
export class AppService {
  databasePool;
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
    const response = await this.databasePool.execute("SELECT * FROM parkolasok") as QueryResult;
    const data = response as Parkolo_interface[];
    return data;
  };

  getHello(): string {
    return 'Hello World!';
  }
}
