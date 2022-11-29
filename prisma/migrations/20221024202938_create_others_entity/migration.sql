-- CreateTable
CREATE TABLE `sales_per_table` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `table_id` INTEGER NOT NULL,
    `is_closed` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `consumptions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sales_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `price_product` DECIMAL(10, 2) NOT NULL,
    `amount` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bill_receipt` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sales_id` INTEGER NOT NULL,
    `total_price` DECIMAL(10, 2) NOT NULL,
    `received` DECIMAL(10, 2) NOT NULL,
    `change` DECIMAL(10, 2) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sales_per_table` ADD CONSTRAINT `sales_per_table_table_id_fkey` FOREIGN KEY (`table_id`) REFERENCES `table`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `consumptions` ADD CONSTRAINT `consumptions_sales_id_fkey` FOREIGN KEY (`sales_id`) REFERENCES `sales_per_table`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `consumptions` ADD CONSTRAINT `consumptions_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bill_receipt` ADD CONSTRAINT `bill_receipt_sales_id_fkey` FOREIGN KEY (`sales_id`) REFERENCES `sales_per_table`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
