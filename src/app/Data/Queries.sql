-- Insert fake data into Employees table with random department and position IDs
INSERT INTO Employees (FirstName, LastName, DateOfBirth, DepartmentId, PositionId)
VALUES
    ('John', 'Doe', '1990-05-15', 1, 1),
    ('Jane', 'Smith', '1985-08-20', 2, 2),
    ('Alice', 'Johnson', '1995-02-10', 3, 3),
    ('Bob', 'Williams', '1988-11-30', 1, 2),
    ('Ella', 'Brown', '1993-07-25', 2, 3),
    ('James', 'Davis', '1991-04-05', 3, 1),
    ('Linda', 'Wilson', '1987-09-18', 1, 3),
    ('Michael', 'Lee', '1994-01-08', 2, 1),
    ('Sarah', 'Anderson', '1989-06-12', 3, 2),
    ('William', 'Martin', '1986-12-03', 1, 2);

 INSERT INTO Departments(DepartmentName) VALUES ('HR'), ('IT'), ('Business');

 INSERT INTO Positions(Title) VALUES ('Manager'), ('Staff'), ('Salesman');

 SELECT TOP (1000) [PositionId]
      ,[Title]
  FROM [PerkyAssignment].[dbo].[Positions]

SELECT TOP (1000) [DepartmentId]
      ,[DepartmentName]
  FROM [PerkyAssignment].[dbo].[Departments]

SELECT TOP (1000) [EmployeeId]
      ,[FirstName]
      ,[LastName]
      ,[DateOfBirth]
      ,[DepartmentId]
      ,[PositionId]
  FROM [PerkyAssignment].[dbo].[Employees]

