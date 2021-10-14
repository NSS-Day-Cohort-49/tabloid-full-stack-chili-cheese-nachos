using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tabloid.Repositories;
using Tabloid.Models;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IPostRepository _postRepository;

        public CategoryController(ICategoryRepository categoryRepository, IPostRepository postRepository)
        {
            _categoryRepository = categoryRepository;
            _postRepository = postRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_categoryRepository.GetAll());
        }

        [HttpPost]
        public IActionResult Post(Category category)
        {
            _categoryRepository.AddCategory(category);
            return CreatedAtAction("Get", new { id = category.Id }, category);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _categoryRepository.DeleteCategory(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound();
            }
            
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_categoryRepository.GetCategoryById(id));
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Category category)
        {

            if (id != category.Id)
            {
                return BadRequest();
            }

            _categoryRepository.UpdateCategory(category);
            return Ok();
        }
    }
}
