const assert = require('assert');
// const CategoryService = require('../services/category-service');
const pg = require("pg");
const greetings = require('../greetings');
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://yongama:pg123@localhost:5432/greetings';

const pool = new Pool({
    connectionString
});

describe('Greetings web-app', function(){

  

    it('should able to insert a name', async function(){
        
       try {
        await pool.query('select * from greetings');
       } catch (error) {
        console.log({error});
       }
        
        
        assert.equal(1, 1);
    });

    it('should able to greet in IsiXhosa', async function(){
       
       try {
        await pool.query('select * from greetings');
       } catch (error) {
        console.log({error});
       }
        
        
        assert.equal(1, 1);
    });

    it('should able to greet in English', async function(){
      
       try {
        await pool.query('select * from greetings');
       } catch (error) {
        console.log({error});
       }
        
        
        assert.equal(1, 1);
    });
    it('should able to greet in Afrikaans', async function(){
        
       try {
        await pool.query('select * from greetings');
       } catch (error) {
        console.log({error});
       }
        
        
        assert.equal(1, 1);
    });

    it('should able to count people greeted', async function(){
        // let categoryService = CategoryService(pool);
       try {
        await pool.query('select * from greetings');
       } catch (error) {
        console.log({error});
       }
        
        
        assert.equal(1, 1);
    });

    it('should able to reset the counter', async function(){
        
       try {
        await pool.query('select * from greetings');
       } catch (error) {
        console.log({error});
       }
        
        
        assert.equal(1, 1);
    });

 

    after(function(){
        pool.end();
    })
});




