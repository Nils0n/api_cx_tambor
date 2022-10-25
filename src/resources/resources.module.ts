import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TablesModule } from './tables/tables.module';
import { SalesModule } from './sales/sales.module';


@Module({
    imports: [
        ProductsModule,
        TablesModule,
        SalesModule
    ],
})
export class ResourcesModule { }
