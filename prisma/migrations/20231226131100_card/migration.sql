-- CreateTable
CREATE TABLE `Card` (
    `card_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_email` VARCHAR(255) NOT NULL,
    `title` TEXT NULL,
    `front` TEXT NULL,
    `back` TEXT NULL,
    `tags` JSON NOT NULL,
    `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified_date` DATETIME(3) NOT NULL,
    `recalled_first_date` DATETIME(3) NOT NULL,
    `recalled_second_date` DATETIME(3) NOT NULL,
    `recalled_third_date` DATETIME(3) NOT NULL,
    `recalled_fourth_date` DATETIME(3) NOT NULL,
    `recalled_fifth_date` DATETIME(3) NOT NULL,
    `recalled_first_score` INTEGER NOT NULL,
    `recalled_second_score` INTEGER NOT NULL,
    `recalled_third_score` INTEGER NOT NULL,
    `recalled_fourth_score` INTEGER NOT NULL,
    `recalled_fifth_score` INTEGER NOT NULL,

    UNIQUE INDEX `Card_user_email_key`(`user_email`),
    PRIMARY KEY (`card_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
