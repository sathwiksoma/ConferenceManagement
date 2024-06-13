using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ConferenceManagement.Models
{
    public class Conference
    {
        [Key]
        public int ConferenceID { get; set; }

        [Required]
        [MaxLength(100)]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        [MaxLength(100)]
        public string Location { get; set; }

        [ForeignKey("User")]
        public int OrganizerID { get; set; }
        public User Organizer { get; set; }
    }
}
