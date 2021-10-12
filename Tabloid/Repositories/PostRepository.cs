using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tabloid.Models;
using Tabloid.Utils;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;


namespace Tabloid.Repositories
{
    public class PostRepository : BaseRepository, IPostRepository
    {
        public PostRepository(IConfiguration config) : base(config) { }
        public List<Post> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT p.Id, p.Title, p.Content,
		                                p.CreateDateTime, p.PublishDateTime, p.IsApproved,
		                                p.CategoryId, p.UserProfileId, 
		                                c.[Name] AS CategoryName,
		                                u.FirstName, u.LastName, u.DisplayName
                                FROM Post p
                                        LEFT JOIN Category c ON p.CategoryId = c.id
                                        LEFT JOIN UserProfile u ON p.UserProfileId = u.id
                                WHERE IsApproved = 1 AND PublishDateTime < SYSDATETIME()
                                ORDER BY p.PublishDateTime DESC";
                    var reader = cmd.ExecuteReader();
                    var posts = new List<Post>();
                    while (reader.Read())
                    {
                        posts.Add(new Post()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Content = DbUtils.GetString(reader, "Content"),
                            PublishDateTime = DbUtils.GetDateTime(reader, "PublishDateTime"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                            CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                            UserProfile = new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "UserProfileId"),
                                DisplayName = DbUtils.GetString(reader, "DisplayName")
                            },
                            Category = new Category()
                            {
                                Id = DbUtils.GetInt(reader, "CategoryId"),
                                Name = DbUtils.GetString(reader, "CategoryName")
                            },
                        });
                    }
                    reader.Close();

                    return posts;

                }
            }
        }
    }
}
