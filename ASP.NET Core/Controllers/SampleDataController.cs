using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.Json;
using ASP_NET_Core.Models;
using ASP_NET_Core.Utils;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace ASP_NET_Core.Controllers {

    [Route("api/[controller]/[action]")]
    public class SampleDataController : Controller {

        [HttpGet]
        public object GetSelectBoxItems(DataSourceLoadOptions loadOptions)
        {
            return DataSourceLoader.Load(SampleData.Items, loadOptions);
        }

        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {

            return DataSourceLoader.Load(SampleData.Employees, loadOptions);
        }

        [HttpPut]
        public IActionResult Put(int key, string values)
        {
            var item = SampleData.Employees.First(e => e.ID == key);

            item.PopulateFromJson(values);

            if (!TryValidateModel(item))
                return BadRequest(ModelState);

            return Ok(item);
        }

    }
}
