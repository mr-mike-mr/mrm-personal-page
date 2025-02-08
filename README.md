# MRM Personal page

## SQL

```sql
CREATE TABLE projects
(
    id INT NOT NULL AUTO_INCREMENT,
    image VARCHAR(250) NOT NULL,
    heading VARCHAR(250) NOT NULL,
    links VARCHAR(250) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE blog
(
    id INT NOT NULL AUTO_INCREMENT,
    thumbnail VARCHAR(250) NOT NULL,
    title VARCHAR(250) NOT NULL,
    head VARCHAR(250) NOT NULL,
    body VARCHAR(250) NOT NULL,
    foot VARCHAR(250) NOT NULL,
    PRIMARY KEY (id)
);
```
