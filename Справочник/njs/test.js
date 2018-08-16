const mongoClient = require("mongodb").MongoClient;

let usrs = [{name: "Artesm", sName: "Mikhadalev", number: "+79992287asd870", address: "Gagarina 13-978"}, {name: "Disama", sName: "Denomdy", number: "+7839876", address: "Pushkina 13-78"}];

const url = "mongodb://localhost:27017/";
mongoClient.connect(url, (err, client) => {
    const db =client.db("usersdb");
    const collection = db.collection("users");
    // collection.insertMany(usrs, (err, result) => {
    //     if (err) {
    //         return console.log(err);
    //     }

    //     console.log(result.ops);
    //     client.close();
    // });

    if (err) return console.log(err);

    collection.find().toArray((err, results) => {
        console.log(results);
        client.close();
    });
});