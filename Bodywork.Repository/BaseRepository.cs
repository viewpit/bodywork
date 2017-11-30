using System;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;


namespace Bodywork.Repository
{
    public class BaseRepository: IDisposable
    {
       protected IDbConnection con;
        public BaseRepository(IConfigurationRoot configuration)
        {
            var config = configuration["ConnectionStrings:MyConnection"];
            string connectionString = (string.IsNullOrEmpty(config)) ? "Data Source=BANKEPC;Initial Catalog=DataManagement;Integrated Security=True" : config;            
            con = new SqlConnection(connectionString);
        }

        public void Dispose()
        {
            //throw new NotImplementedException();
        }
    }
}
