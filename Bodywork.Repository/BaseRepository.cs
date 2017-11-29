using System;
using System.Data;
using System.Data.SqlClient;
//using Microsoft.Extensions.Configuration;

namespace Bodywork.Repository
{
    public class BaseRepository: IDisposable
    {
       protected IDbConnection con;
        public BaseRepository(/*IConfiguration configuration*/)
        {
            //"Data Source=BANKEPC;Initial Catalog=DataManagement;Integrated Security=True";
            string connectionString = "Data Source=VIEWPIT-SERVER\\SQLEXPRESS;Initial Catalog=Bodywork;User ID=xxxxx;Password=xxxxx; Application Name=BodyWork";
            con = new SqlConnection(connectionString);
        }

        public void Dispose()
        {
            //throw new NotImplementedException();
        }
    }
}
