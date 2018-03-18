﻿using System.Collections.Generic;
using Wizzer.Data.Entities;

namespace Wizzer.Data.Repositories {
    public interface ICategoryRepository {
        List<Category> GetAllCategories();
    }
}