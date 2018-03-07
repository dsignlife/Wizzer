using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Wizzer.Data;
using Wizzer.Data.Identities;
using Wizzer.Data.Repositories;
using Wizzer.Data.Seeders;
using Wizzer.Services;

namespace Wizzer
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {


            services.AddIdentity<User, IdentityRole>(config =>
            {
                config.User.RequireUniqueEmail = true;
            }).AddEntityFrameworkStores<WizzerContext>();
            services.AddDbContext<WizzerContext>(config =>
            {
                config.UseSqlServer(_configuration.GetConnectionString("WizzerConnection"));
            });
            //Add Nuget Package
            services.AddAutoMapper();
            services.AddTransient<IMailService, NullMailService>();
            services.AddTransient<WizzerSeeder>();

            services.AddScoped<IWizzerRepository, WizzerRepository>();
            services.AddMvc()
                .AddJsonOptions(option => option.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/error");
            }

            app.UseStaticFiles();

            app.UseMvc(config =>
            {
                config.MapRoute("Default", "{controller}/{action}/{id?}", new { controller = "App", Action = "Index" });
            });

            app.UseAuthentication();

            if (!env.IsDevelopment())
                return;
            using (var scope = app.ApplicationServices.CreateScope())
            {
                var seeder = scope.ServiceProvider.GetService<WizzerSeeder>();
                seeder.Seed().Wait();
            }
        }
    }
}
