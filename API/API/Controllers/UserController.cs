using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections;
using System.Collections.Generic;


namespace API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly ApplicationContext _context;

        public UserController(ApplicationContext context)
        {
            _context = context;
        }

        [HttpGet(Name = "GetUser")]
        public User GetUser()
        {

            User user = new User();
            user.Id = 1;
            user.Name = "Test user name";

            var usr = _context.Users.First( x => x.Id == user.Id );

            //where, any, select, order by

            List<User> usrs = _context.Users.Where(x => x.Username == "Peti").ToList();

            List<ActivityLog> actLog = _context.ActLog.Where(f => f.Steam_name == "ferigaming05").ToList();

            bool userExists = _context.Users.Any(c => c.Dc_name == "Terminator");


            List<ActivityLog> activityLogs = _context.ActLog.Where(h => h.Steam_name == "ferigaming05")
                .Select(h => new ActivityLog { 
                    Id = h.Id, 
                    Timestamp = h.Timestamp, 
                    Status = h.Status, 
                    Dc_name = h.Dc_name,
                    Steam_name = h.Steam_name, 
                    UserId = h.UserId }).ToList();

            List<ActivityLog> activityLogsWithParam = _context.ActLog.Where(h => h.Steam_name == "ferigaming05")
                    .Select(h => new ActivityLog(h.Id, h.Timestamp, h.Status, h.Dc_name, h.Steam_name, h.UserId)).ToList();

            List<ActivityLog> orderedActivityLogs = _context.ActLog.OrderBy(al => al.Timestamp).ToList();

            int? totalFriends = _context.FriendsNumb.Sum(j => j.Number);

            DateTime? earliestBuyDate = _context.Vehicles.Min(v => v.Buy);

            DateTime? latestBuyDate = _context.Vehicles.Max(v => v.Buy);






            return user;
        }

        [HttpGet(Name = "GetAllUsers")]
        public User[] GetAllUsers()
        {
            User[] users = _context.Users.ToArray();

            return users;
        }

        private User[] GetAllUsersInternal()
        {
            User[] users = _context.Users.ToArray();

            return users;
        }

        [HttpGet(Name = "GetParameterizedUser")]
        public User GetParameterizedUser(int id, string name)
        {

            User user = new User();
            user.Id = id;
            user.Name = name;

            return user;
        }

        [HttpGet(Name = "GetInt")]
        public int GetInt()
        {

            return 10;
        }

        [HttpGet(Name = "GetString")]
        public String GetString(string first)
        {
            
            return JsonConvert.ToString(first); 
        }

        [HttpGet(Name = "GetStrings")]
        public String GetStrings(string firstname, string secondname)
        {

            String c = firstname + " " + secondname;
            return JsonConvert.ToString(c);
        }

        [HttpGet(Name = "GetInts")]
        public int GetInts(int a,int b)
        {

            int c = a + b;
            return c;
        }

        [HttpGet(Name = "GetArray")]
        public int[] GetArray(int a, int b)
        {

            int[] c = new int[2];
            c[0] = a;
            c[1] = b;
        
            return c;
        }

        [HttpGet(Name = "NumberList")]
        public List<int> GetNumberList()
        {
            List<int> numberList = new List<int>();
            numberList.Add(32);
            numberList.Add(21);
            numberList.Add(45);
            numberList.Add(11);
            numberList.Add(89);

            return numberList;
        }

        [HttpGet(Name = "Authors")]
        public List<string> GetAuthors()
        {
            List<string> authors = new List<string>();
            authors.Add("Mahesh Chand");
            authors.Add("Chris Love");
            authors.Add("Allen O'neill");
            authors.Add("Naveen Sharma");
            authors.Add("Monica Rathbun");
            authors.Add("David McCarter");


            authors = authors.OrderBy(x => x).ToList();

            int cnt = authors.Count;

            //List<User> users = new List<User>
            //{
            //    new User { Id = 1, Name = "Horvath Peter", Email = "nemtomi@yahoo.com", Password = "valamai" },
            //    new User { Id = 2, Name = "Dan Dovanovics", Email = "szermiszegetuza@gmail.com", Password = "szerusz" },
            //    new User { Id = 3, Name = "Szep Robert", Email = "ezisjolesz@gmail.com", Password = "ingnem" },
            //    new User { Id = 4, Name = "Szekely Istvan", Email = "igenismegnemis@gmail.com", Password = "iegnis" },
            //    new User { Id = 5, Name = "Kis Erzsebet", Email = "nemtomi1212@yahoo.com", Password = "semmi2" }
            //};

            //var selectedName = users.Where(u => u.Name == "Szep Robert").Where(n => n.Name.Contains("e")).ToList();

            //var count = users.Where(x => x.Name.Contains("a")).ToList().Count;

            //var growUp = users.Where(t => t.Name == "Szekely Istvan").Select(ty => ty.Name.ToUpper()).ToList();

            //List<User> users2 = new List<User>
            ////add elements
            //{
            //    new User { Id = 6, Name = "Szabo Demeter", Email = "lotopoto@yahoo.com", Password = "irodaimunkas1" },
            //    new User { Id = 7, Name = "Kocsis Tamas", Email = "hoppamiaz@gmail.com", Password = "tekes254" },
            //    new User { Id = 8, Name = "Varga Izabella", Email = "leszezmegigyse@gmail.com", Password = "igen7878" },
            //};

            //3rd user list, merge/concatenate users with users2
            //List<User> users3 = new List<User>();
            //users3.AddRange(users);
            //users3.AddRange(users2);

            //List<User> users4 = new List<User>();
            //foreach (var collectednames in users)
            //{
            //    users4.Add(collectednames);
            //}
            //foreach (var collectednames in users2)
            //{
            //    users4.Add(collectednames);
            //}
            //bool result = users3.Any(x => x.Name == "Kis Erzsebet");







                return authors;
        }
    }
}
