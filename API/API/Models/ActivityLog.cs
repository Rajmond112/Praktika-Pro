namespace API.Models
{
    public class ActivityLog
    {
        public int Id { get; set; }
        public DateTime? Timestamp { get; set; }
        public string? Status { get; set; }
        public string? Dc_name { get; set; }
        public string? Steam_name { get; set; }
        public int UserId { get; set; }

        public ActivityLog ( int id, DateTime? timestamp, string? status, string? dc_name, string? steam_name, int userId)
        {
            Id = id;
            Timestamp = timestamp;
            Status = status;
            Dc_name = dc_name;
            Steam_name = steam_name;
            UserId = userId;
        }

        public ActivityLog()
        {

        }
    }
}
