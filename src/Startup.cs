using System.Collections.Generic;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Bodywork.Business.Interfaces;
using Bodywork.Repository.Interfaces;
using Bodywork.Business;
using Bodywork.Repository;
using Bodywork.Entities;

namespace Bodywork
{
  public class Startup
  {

    public Startup(IConfiguration configuration)
    {      
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      // Add framework services.      
      services.AddMvc();
      services.AddTransient<IUserManager, UserManager>();
      services.AddTransient<IUserRepository, UserRepository>();
      services.AddTransient<IRepository<Customer>, CustomerRepository>();

      services.AddTransient<IRepository<Product>, ProductRepository>();

      services.Configure<GzipCompressionProviderOptions>(options => options.Level = System.IO.Compression.CompressionLevel.Optimal);
      services.AddResponseCompression();

      services.AddAuthentication()
        .AddFacebook(options =>
        {
          options.AppId = Configuration["Authentication:Facebook:AppId"];
          options.AppSecret = Configuration["Authentication:Facebook:AppSecret"];
        });

      //services.AddIdentity<ApplicationUser, IdentityRole>()
      //  .AddEntityFrameworkStores<ApplicationDbContext>()
      //  .AddDefaultTokenProviders();

      //services.AddAuthentication().AddFacebook(facebookOptions =>
      //{
      //  facebookOptions.AppId = Configuration["Authentication:Facebook:AppId"];
      //  facebookOptions.AppSecret = Configuration["Authentication:Facebook:AppSecret"];
      //});

    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
    {
      app.UseResponseCompression();
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
        app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
        {
          HotModuleReplacement = true,
          ConfigFile = "webpack.netcore.config.js",
          HotModuleReplacementClientOptions = new Dictionary<string, string>{
                    {"reload", "true"}
                  }
        });
      }
      else
      {
        app.UseExceptionHandler("/Home/Error");
      }

      app.UseStaticFiles();

      app.UseAuthentication();

      app.UseMvc(routes =>
      {
        routes.MapRoute(
                  name: "default",
                  template: "{controller=Home}/{action=Index}/{id?}");

        routes.MapSpaFallbackRoute(
                  name: "spa-fallback",
                  defaults: new { controller = "Home", action = "Index" });
      });
    }
  }
}
