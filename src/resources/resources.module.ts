import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TablesModule } from './tables/tables.module';
import { SalesModule } from './sales/sales.module';
import { BillReceiptsModule } from './bill-receipts/bill-receipts.module';


@Module({
    imports: [
        ProductsModule,
        TablesModule,
        SalesModule,
        BillReceiptsModule
    ],
})
export class ResourcesModule { }
