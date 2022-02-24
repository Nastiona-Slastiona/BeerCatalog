namespace beer_catalog.backend.BusinessLogic
{
    public class UserRelatedService
    {
        private readonly UserRepository userRepository;

        public UserRelatedService(
        UserRepository repository)
        {
            userRepository = repository;
        }

        public User GettingUser(string email)
        {
            return userRepository.GetByEmail(email);
        }

        public User CreateUserFromDto(UserDto userDto)
        {
            if (userDto == null)
            {
                return null;
            }

            var user = new User
            {
                Password = BCrypt.Net.BCrypt.HashPassword(userDto.Password),
                Name = userDto.Name,
                BirthDate = userDto.BirthDate,
                Email = userDto.Email
            };

            if (userDto.Image != null)
            {
                byte[]? imageData = null;

                using (var binaryReader = new BinaryReader(userDto.Image.OpenReadStream()))
                {
                    imageData = binaryReader.ReadBytes((int)userDto.Image.Length);
                }

                user.Image = imageData;
            }

            return user;
        }

        public object Create(User user)
        {
            return userRepository.Create(user);
        }


        public UserDto CreateUserDtoFromUser(User user)
        {
            var userDto = new UserDto
            {
                Name = user.Name,
                Password = user.Password,
                BirthDate = user.BirthDate,
                Email = user.Email,
                Image = null
            };

            return userDto;
        }

        public byte[] GetImage(int userId)
        {
            User user = userRepository.GetById(userId);

            if (user.Image != null)
            {
                return user.Image;
            }

            return new byte[0];
        }

        public UserDto GetUserById(int id) => this.CreateUserDtoFromUser(userRepository.GetById(id));
    }
}
