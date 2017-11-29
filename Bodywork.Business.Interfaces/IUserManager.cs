using Bodywork.Entities;
using System.Collections.Generic;

namespace Bodywork.Business.Interfaces
{
    public interface IUserManager
    {
        bool AddUser(User user);

        bool UpdateUser(User user);

        bool DeleteUser(int userId);

        IList<User> GetAllUser();

        User GetUserById(int userId);
    }
}
