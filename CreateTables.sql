USE [Praktika]
GO

DROP TABLE IF EXISTS dbo.ActivityLog;
DROP TABLE IF EXISTS dbo.[User];
GO

CREATE TABLE [User]
(
    Id INT NOT NULL PRIMARY KEY,
    Name VARCHAR(50),
    Username NVARCHAR(50) NOT NULL,
    Dc_name NVARCHAR(50) NOT NULL,
    Steam_name NVARCHAR(50) NOT NULL,
	UNIQUE (Username, Dc_name, Steam_name)
);
GO

CREATE TABLE ActivityLog
(
    Id INT NOT NULL PRIMARY KEY,
    Timestamp DATE,
    Status NVARCHAR(50),
    Dc_name NVARCHAR(50),
    Steam_name NVARCHAR(50),
	UserId INT,
    FOREIGN KEY (UserId) REFERENCES [User](Id)
);
GO