﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Smart_Calendar.Application.Repositories
{
    public interface IBaseRepo<TEntity> where TEntity : class
    {
        Task<List<TEntity>> GetAllAsync();

        IQueryable<TEntity> Get(Expression<Func<TEntity, bool>> predicate);

        Task CreateAsync(TEntity entity);

        Task<bool> UpdateAsync(TEntity entity);

        Task<bool> DeleteAsync(Expression<Func<TEntity, bool>> predicate);
    }
}
