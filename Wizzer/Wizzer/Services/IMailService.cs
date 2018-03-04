namespace Wizzer.Services
{
    public interface IMailService
    {
        void SendMessage(string to, string sub, string body);
    }
}