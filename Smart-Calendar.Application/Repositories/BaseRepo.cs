﻿using Microsoft.EntityFrameworkCore;
using Smart_Calendar.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Smart_Calendar.Application.Repositories
{
    public class BaseRepo<TEntity> : IBaseRepo<TEntity> where TEntity : class
    {
        private readonly SmartCalendarDbContext _dbContext;

        public BaseRepo(SmartCalendarDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task CreateAsync(TEntity entity)
        {
            await _dbContext.Set<TEntity>().AddAsync(entity);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<bool> DeleteAsync(Expression<Func<TEntity, bool>> predicate)
        {
            var entity = await _dbContext.Set<TEntity>().Where(predicate).FirstOrDefaultAsync();
            if (entity == null)
                return  false;

            _dbContext.Set<TEntity>().Remove(entity);
            return await _dbContext.SaveChangesAsync() > 0;
        }

        public IQueryable<TEntity> Get(Expression<Func<TEntity, bool>> predicate)
        {
            return  _dbContext.Set<TEntity>().Where(predicate).AsQueryable();
        }
        public async Task<List<TEntity>> GetAllAsync()
        {
            return await _dbContext.Set<TEntity>().ToListAsync();
        }

        public async Task<bool> UpdateAsync(TEntity entity)
        {
            try
            {
                _dbContext.Set<TEntity>().Update(entity);
                return await _dbContext.SaveChangesAsync() > 0;
            }
            catch (System.Exception e)
            {
                Console.WriteLine(string.Format("Error occurs during db update: [{0}]", e));
                return false;
            }
        }
    }
}
