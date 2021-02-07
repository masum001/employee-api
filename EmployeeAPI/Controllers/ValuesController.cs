using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeAPI.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public HttpResponseMessage Get()
        {
           DataTable aDataTable = new DataTable();
           aDataTable.Columns.Add("DeptID");
           aDataTable.Columns.Add("DeptName");

           aDataTable.Rows.Add(1, "Support");
           aDataTable.Rows.Add(2,"HR");



           return Request.CreateResponse(HttpStatusCode.OK, aDataTable);

        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
