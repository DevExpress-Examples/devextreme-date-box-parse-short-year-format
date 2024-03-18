using ASP_NET_Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP_NET_Core.Models {
    static class SampleData {
        public static List<Employee> Employees = new List<Employee>() {
            new Employee {
                ID = 1,
                FirstName = "John",
                LastName = "Heart",
                HireDate = new DateTime(2011, 3, 4),
            },
            new Employee {
                ID = 2,
                FirstName = "Olivia",
                LastName = "Peyton",
                HireDate = new DateTime(2022, 9, 7),
            }
        };
        
        public static List<Item> Items = new List<Item>() {
            new Item {
                Text = "Century cuts off at 50 years",
                Value = "javascript",
            },
            new Item {
                Text = "Century cuts off after current decade",
                Value = "excel",
            },
            new Item {
                Text = "Century cuts off at current year",
                Value = "past",
            },
            new Item {
                Text = "No century cut-off",
                Value = "nocutoff",
            },
        };
    }
}
