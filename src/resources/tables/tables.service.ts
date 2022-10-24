import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/core/database/database.service';
import { CreateTableDto } from './dto/create-table.dto';

@Injectable()
export class TablesService {
  constructor(private readonly databaseService: DatabaseService) { }

  async createTables(createTableDto: CreateTableDto) {
    try {

      for (let i = 0; i < 61; i++) {
        await this.databaseService.table.create({
          data: {
            name: `mesa ${i + 1}`
          }
        });
      }
      return "Mesas criadas com sucesso!";
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    try {

      const tables = await this.databaseService.table.findMany();
      return tables;

    } catch (error) {
      throw new Error(error);
    }
  }

}
