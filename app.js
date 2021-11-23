var time = require('time');
const mysql = require('mysql');

const database = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const Flask = require('Flask');

app = Flask(__name__);

app.get('/init', (req, res) => {
    const sqlQuery =  'CREATE TABLE IF NOT EXISTS nb_load(id int AUTO_INCREMENT, log DATE_TIME ), PRIMARY KEY(id))';

    database.query(sqlQuery, (err) => {
        if (err) throw err;

        res.send('Table created!')
    });
});

function insert() {

    const sqlQuery = 'INSERT INTO nb_load SET ?';

    database.query(sqlQuery, Date.getTime() , (err, row) => {
        if (err) throw err;

        res.send('loged reload successfully!');
    });
}



function get_hit_count() {
    retries = 5;
    while (true) {
        try {
            return 
       // } catch ( redis.} catch (ions.ConnectionError as exc) {
            if (retries == 0) {
                throw exc;
            retries -= 1;
            time.sleep(0.5);
        }

app.route = app.route('/')(app.route);
function hello() {
    return 'hello to my sample flask app, I have been seen {} times\n'.format(get_hit_count());

}
    }

}
