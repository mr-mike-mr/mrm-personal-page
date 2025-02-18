# MRM Personal page

## SQL

```sql
CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `heading` varchar(255) NOT NULL,
  `description_en` varchar(255) NOT NULL,
  `description_sk` varchar(255) NOT NULL,
  `links` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci

CREATE TABLE `blog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `thumbnail` varchar(255) NOT NULL,
  `title_en` varchar(255) NOT NULL,
  `title_sk` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `description_en` varchar(255) NOT NULL,
  `description_sk` varchar(255) NOT NULL,
  `body_en` varchar(255) NOT NULL,
  `body_sk` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
```
