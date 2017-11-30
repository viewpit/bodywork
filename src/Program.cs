using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;

namespace Bodywork
{
  public class Program
  {
    public static IConfigurationRoot Configuration { get; set; }

    public static void Main(string[] args)
    {
      BuildWebHost(args).Run();
    }

    public static IWebHost BuildWebHost(string[] args) =>
        WebHost.CreateDefaultBuilder(args)
            .UseStartup<Startup>()
            .ConfigureAppConfiguration((hostingContext, config) =>
            {
              var env = hostingContext.HostingEnvironment;

              config.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true, reloadOnChange: true);

              if (env.IsDevelopment())
              {
                var appAssembly = Assembly.Load(new AssemblyName(env.ApplicationName));
                if (appAssembly != null)
                {
                  config.AddUserSecrets(appAssembly, optional: true);
                }
              }

              config.AddEnvironmentVariables();

              if (args != null)
              {
                config.AddCommandLine(args);
              }
              Configuration = config.Build();
            })
          .ConfigureLogging((hostingContext, logging) =>  
          {
            logging.AddConfiguration(hostingContext.Configuration.GetSection("Logging"));
            logging.AddConsole();
            logging.AddDebug();
          }).ConfigureServices((configurService) =>
          {
            configurService.TryAddSingleton(Configuration);
          })
          .Build();
  }
}
