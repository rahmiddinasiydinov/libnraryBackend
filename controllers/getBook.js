
const {Pool} = require('pg');
const pool  =new Pool({
    connectionString: 'postgres://hswuriyx:jM-c7ihzrPuuz58CINO44JqYSsbVwkB9@satao.db.elephantsql.com/hswuriyx'
})

module.exports = async ( req, res)=>{
    try{
        const {order, page} = req.body;
        const client = await pool.connect();
        const {rows:data} =await client.query('SELECT * FROM books ORDER BY book_title OFFSET 0 LIMIT 3;');
        client.release();
        console.log(data)
        res.send(data);

    }catch(e) {
       console.log(e.message);
       res.status(500).send('Internat error')
    }
}