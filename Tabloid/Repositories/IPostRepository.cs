using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();
        Post GetByPostId(int id);
        List<Post> GetUserPosts(string firebaseUserId);
        void Add(Post post);
        void Delete(int id);
    }
}