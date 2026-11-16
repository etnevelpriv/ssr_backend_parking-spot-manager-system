import { Injectable } from '@nestjs/common';
import { createPool } from 'mysql2/promise';

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
  getAllParkolasok() {
    const response = this.databasePool.execute("SELECT * FROM parkolasok");
  };

  getHello(): string {
    return 'Hello World!';
  }
}
