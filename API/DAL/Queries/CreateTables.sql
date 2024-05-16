IF EXISTS(SELECT *
          FROM   dbo.[User])
  DROP TABLE dbo.[User]

CREATE TABLE [User]
(
Id INT NOT NULL,
Name VARCHAR(50),
Username NVARCHAR(50),
Dc_name NVARCHAR(50),
Steam_name NVARCHAR(50),
PRIMARY KEY (Id)

);

