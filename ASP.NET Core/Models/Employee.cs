using System;

namespace ASP_NET_Core.Models {
    public class Employee {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime HireDate { get; set; }
        public string Address { get; set; }
    }

    public class Item {
        public string Text { get; set; }
        public string Value { get; set; }
    }
}
