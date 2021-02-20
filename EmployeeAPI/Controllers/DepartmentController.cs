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
using EmployeeAPI.Models;


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

        public string Post(Department aDepartment)
        {
            try
            {
                /*DataTable aDataTable = new DataTable();*/
                string query = @"insert into Department values ('" + aDepartment.DepartmentName + @"')";

                /*  using (var connection = new SqlConnection(WebConfigurationManager.ConnectionStrings["EmployeeDB"].ConnectionString))
                  using (var command = new SqlCommand(query, connection))
                  using (var dataAdapter = new SqlDataAdapter(command))
                  {
                      command.CommandType = CommandType.Text;
                      dataAdapter.Fill(aDataTable);
                  }*/

                SqlConnection connection = new SqlConnection(WebConfigurationManager.ConnectionStrings["EmployeeDB"].ConnectionString);

                SqlCommand command = new SqlCommand(query, connection);
                connection.Open();
                command.ExecuteNonQuery();
                connection.Close();

                return "Department Saved Successfully" ;
                

                
            }
            catch (Exception e)
            {
                return  ("Operation Failed");
               
            }

          

        }

        public string Put(Department aDepartment)
        {
            try
            {
                string query = @"update Department set DepartmentName = ('" + aDepartment.DepartmentName + @"') where DepartmentID = '"+aDepartment.DepartmentID+"'";

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

        public string Delete(int id)
        {
            try
            {
                string query = $"delete from Department where DepartmentID = " + id;

                SqlConnection connection = new SqlConnection(WebConfigurationManager.ConnectionStrings["EmployeeDB"].ConnectionString);

                SqlCommand command  = new SqlCommand(query, connection);

                connection.Open();
                command.ExecuteNonQuery();
                connection.Close();

                return "Row Deleted";

            }
            catch (Exception e)
            {
                return $"Operation Failed {e}";
            }
        }
    }
}
