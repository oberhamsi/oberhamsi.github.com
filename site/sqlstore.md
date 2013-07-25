# Database model mapping

A lightweight ORM/storage implementation with strong caching. It uses JDBC for communication with databases.

* [Basics](sqlstore/Basics.html)
* [Mapping definition](sqlstore/Mapping.html)
* [Queries](sqlstore/Query.html)
* [Transactions](sqlstore/Transactions.html)
* [Object and query caches](sqlstore/Caches.html)

## Status

Currently supported databases are [H2](http://h2database.com), [MySQL (5.x)](http://mysql.com), [Oracle (XE)](http://www.oracle.com/technetwork/products/express-edition/overview/index.html) and [PostgreSQL (8.x)](http://postgresql.org). H2 is part of the package, so you can start right off using it without the hassle of installing and configuring a database. Current features are:


 * Automatic creation of tables and sequences
 * Transaction support
 * Lazy loading
 * One-to-one, one-to-many and many-to-many mappings
 * Connection pooling
 * Object caching
 * Easy SQL-like querying