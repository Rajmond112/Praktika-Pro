

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ActivityLog]') AND type in (N'U'))
DROP TABLE [dbo].[ActivityLog]
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[User]') AND type in (N'U'))
DROP TABLE [dbo].[User]
GO

CREATE TABLE [User]
(
Id INT NOT NULL IDENTITY(1,1),
Name VARCHAR(50),
Username NVARCHAR(50),
Dc_name NVARCHAR(50),
Steam_name NVARCHAR(50),
PRIMARY KEY (Id)

);

CREATE TABLE [dbo].[ActivityLog](
	[Id] [int] NOT NULL,
	[Timestamp] [date] NULL,
	[Status] [nvarchar](50) NULL,
	[Dc_name] [nvarchar](50) NULL,
	[Steam_name] [nvarchar](50) NULL,
	[UserId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
));
GO


FOREIGN KEY (UserId) REFERENCES [User](Id)
GO


