using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Net.Http;
using System.Web.Configuration;


namespace EmployeeAPI.Controllers
{
    public class DepartmentController : ApiController
    {
        public HttpResponseMessage Get()
        {
            DataTable aDataTable = new DataTable();

            string query = @"SELECT * FROM Department";

            SqlConnection connection = new SqlConnection(WebConfigurationManager.ConnectionStrings["EmployeeDB"].ConnectionString);

            SqlCommand command =new SqlCommand(query, connection);

            connection.Open();
            aDataTable.Load(command.ExecuteReader());
            connection.Close();

            return Request.CreateResponse(HttpStatusCode.OK, aDataTable);
        }
    }
}
