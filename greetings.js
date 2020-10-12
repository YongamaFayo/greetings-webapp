module.exports = function Greetings(pool) {

    var list = {};


    async function greetings(name) {

        const INSERT_QUERY = "insert into greetings (name, counter) values ($1, $2)";
        await pool.query(INSERT_QUERY, [name, 1]);

    }

    async function nameCheck(name) {

        var check = await pool.query('select name from greetings where name =$1', [name]);

        return check;

    }

    // async function countUpdate(update){
    //     var count = await pool.query('update greetings set counter=counter+1 where name=$1', [update])
    //     counsole.log(count)
    //     return count.rowCount;
    // }


    function choice(Greet, name) {


        if (Greet === "IsiXhosa") {
            return "molo , " + name;

        }
        else if (Greet === "English") {
            return "hello , " + name;
        }

        else if (Greet === "Afrikaans") {
            return "hallo , " + name;
        }

    }


    async function setName(name) {
        // const results = await pool.query(`insert into greetings (name, counter)  
        // values ($1, 1)
        // returning id, name`, [name]);
        // return results.rows[0]
        const item = await pool.query(`select id from greetings where name=$1`, [name]);
        if (item.rowCount === 0) {
    
            await pool.query(`insert into greetings(name, counter) values ($1, 0)`, [name]);
        }
    
        await pool.query(`update greetings set counter = counter+1 where name = $1`, [name]);
    }


    async function counter() {

        const results = await pool.query('SELECT count(*) FROM greetings')
        if (results.rows.length > 0) {
            return results.rows[0].count;
        }
        return 0;
    }

    async function namesGreeted() {
        let greetings = await pool.query('SELECT * from greetings');
        return greetings.rows;
    }

    // return list


    async function userCounter(name) {

        const results = await pool.query('SELECT count(*) as counter FROM greetings where name =$1', [name]);
        // for (const key in list) {
        // if (key === name) {
        //     var value = list[key];
        // }

        // return value;
        return results.rows[0].counter;
    }
    async function reset() {

        await pool.query('delete from greetings')
        // list = {}

    }



    function noName() {
        if (name === "") {
            message1.innerHTML = "Please enter name";
            return;
        }
    }


    return {

        nameCheck,
        // countUpdate,
        greetings,
        choice,
        setName,
        counter,
        namesGreeted,
        userCounter,
        reset,
        noName

        // setSettings,
        // getSettings

    };

}   