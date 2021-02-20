using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Configuration;
using System.Web.Http;
using EmployeeAPI.Models;

namespace EmployeeAPI.Controllers
{
    public class EmployeeController : ApiController
    {
        public HttpResponseMessage Get()
        {
            DataTable aDataTable = new DataTable();

            string query = @"SELECT * FROM Employees";

            SqlConnection connection = new SqlConnection(WebConfigurationManager.ConnectionStrings["EmployeeDB"].ConnectionString);

            SqlCommand command = new SqlCommand(query, connection);

            connection.Open();
            aDataTable.Load(command.ExecuteReader());
            connection.Close();

            return Request.CreateResponse(HttpStatusCode.OK, aDataTable);
        }

        public string Post(Employee anEmployee)
        {
            try
            {
                string query = $@"insert into Employees(EmployeeName, Department, MailID, DOJ) 
                                             values('{anEmployee.EmployeeName}','{anEmployee.Department}','{anEmployee.MailID}','{anEmployee.DOJ}')";

                SqlConnection connection = new SqlConnection(WebConfigurationManager.ConnectionStrings["EmployeeDB"].ConnectionString);

                SqlCommand command = new SqlCommand(query, connection);

                connection.Open();
                command.ExecuteNonQuery();
                connection.Close();

                return "Operation Successful";
            }
            catch (Exception e)
            {
                return $"Sorry Operation failed Error {e}";
            }
        }

        public string Put(Employee anEmployee)
        {
            try
            {
                string query = "update Employees set EmployeeName = '" + anEmployee.EmployeeName + "'," +
                               " Department = '" + anEmployee.Department + "', " +
                               "MailID = '" + anEmployee.MailID + "'," +
                               "DOJ = '" + anEmployee.DOJ + "' where EmployeeID = '"+anEmployee.EmployeeID+"'";

                SqlConnection connection = new SqlConnection(WebConfigurationManager.ConnectionStrings["EmployeeDB"].ConnectionString);

                SqlCommand command = new SqlCommand(query, connection);

                connection.Open();
                command.ExecuteNonQuery();
                connection.Close();

                return "Operation Successful";
            }
            catch (Exception e)
            {
                return $"Operation Failed {e}";
            }
        }
    }
}
