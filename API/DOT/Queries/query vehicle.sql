CREATE TABLE Vehicle
(
    Id INT NOT NULL PRIMARY KEY,
    Buy DATE,
    Status bit,
    Plate NVARCHAR(50),
	UserId INT,
    FOREIGN KEY (UserId) REFERENCES [User](Id)
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

CREATE TABLE Friends
(
    UserId INT NOT NULL PRIMARY KEY,
	Number INT,
	FOREIGN KEY (UserId) REFERENCES [User](Id)
);
GO


