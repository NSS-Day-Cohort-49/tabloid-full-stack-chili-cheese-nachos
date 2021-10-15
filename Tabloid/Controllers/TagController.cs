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
    public class TagController : ControllerBase
    {
        private readonly ITagRepository _tagRepo;

        public TagController(ITagRepository tagRepository)
        {
            _tagRepo = tagRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_tagRepo.GetAllTags());
        }

        [HttpPost]
       
        public IActionResult Create(Tag tag)
        {
            List<Tag> tags = _tagRepo.GetAllTags();
            if (tags.Any(t => t.Name == tag.Name))
            {
                ModelState.AddModelError("", "Tag already exists.");
                return BadRequest();
            }
            else
            {
                _tagRepo.AddTag(tag);
                return CreatedAtAction("Get", new { id = tag.Id }, tag);

            }

        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _tagRepo.DeleteTag(id);
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
            return Ok(_tagRepo.GetTagById(id));
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Tag tag)
        {
            if (id != tag.Id)
            {
                return BadRequest();
            }

            _tagRepo.UpdateTag(tag);
            return Ok();
        }
        
    }
}
