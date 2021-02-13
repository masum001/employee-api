using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Configuration;
using System.Web.Http;

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
    }
}
