namespace API.Models
{
    public class Vehicle
    {
        public int Id { get; set; }
        public DateTime? Buy { get; set; }
        public int? Status { get; set; }
        public string? Plate { get; set; }
        public int UserId { get; set; }
    }
}
