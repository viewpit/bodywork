--Script to get all users
USE [Bodywork]
GO

/****** Object:  StoredProcedure [dbo].[GetAllUsers]    Script Date: 12/24/2016 8:57:33 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[GetAllUsers]	
AS
BEGIN

	SET NOCOUNT ON;

 select * from Users

END


GO


