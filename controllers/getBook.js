
const {Pool} = require('pg');
const pool  =new Pool({
    connectionString: 'postgres://hswuriyx:jM-c7ihzrPuuz58CINO44JqYSsbVwkB9@satao.db.elephantsql.com/hswuriyx'
})

module.exports = async ( req, res)=>{
    try{
        const {limit, page , sort} = req.query;
        console.log(page, limit);
        let numLimit = parseInt(limit);
        let numPage = parseInt(page);
        let sortType = sort=='name'?"book_title":sort=='price'?"book_price":"book_author";
        const client = await pool.connect();
        const {rows:data} =await client.query('SELECT * FROM books ORDER BY $1 OFFSET $2 LIMIT $3', [sortType, (numPage-1)*numLimit, numLimit]);

        
        const{rows:[{count}]} = await client.query('SELECT COUNT(book_id) FROM books;');
        client.release();
        let length = Math.ceil(parseInt(count)/numLimit);
        let arr = []
        for(let i =0; i<length; i++){
            arr.push(i+1);
        }
        console.log(arr);
        console.log(data);
        res.send({
            data, 
            pageNum:arr

        });

    }catch(e) {
       console.log(e.message);
       res.status(500).send('Internat error')
    }
}