using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Wizzer.Data;
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

            services.AddDbContext<WizzerContext>(config => {
                config.UseSqlServer(_configuration.GetConnectionString("WizzerConnection"));
            });
            services.AddTransient<IMailService, NullMailService>();
            services.AddTransient<WizzerSeeder>();

            services.AddScoped<IWizzerRepository, WizzerRepository>();
            services.AddMvc();


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else {
                app.UseExceptionHandler("/error");
            }

            app.UseStaticFiles();
            app.UseMvc(config => {
                config.MapRoute("Default", "{controller}/{action}/{id?}", new { controller = "App", Action = "Index" });
            });

            if (env.IsDevelopment()) {
                using (var scope = app.ApplicationServices.CreateScope()) {
                    var seeder = scope.ServiceProvider.GetService<WizzerSeeder>();
                    seeder.Seed();
                }
            }

        }
    }
}
