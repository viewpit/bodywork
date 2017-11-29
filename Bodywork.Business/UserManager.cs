using Bodywork.Business.Interfaces;
using Bodywork.Entities;
using Bodywork.Repository.Interfaces;
using System.Collections.Generic;

namespace Bodywork.Business
{
    public class UserManager : IUserManager
    {
        IUserRepository _userRepository;
        public UserManager(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public bool AddUser(User user)
        {
            return _userRepository.AddUser(user);
        }

        public bool DeleteUser(int userId)
        {
            return _userRepository.DeleteUser(userId);
        }

        public IList<User> GetAllUser()
        {
            return _userRepository.GetAllUser();
        }

        public User GetUserById(int userId)
        {
            return _userRepository.GetUserById(userId);
        }

        public bool UpdateUser(User user)
        {
            return _userRepository.UpdateUser(user);
        }
    }
}
