import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TablesModule } from './tables/tables.module';


@Module({
    imports: [
        ProductsModule,
        TablesModule
    ],
})
export class ResourcesModule { }
