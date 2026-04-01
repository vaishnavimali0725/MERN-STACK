## SQL (Sequrl / relation) Datebase

# User Tables
id(PK), name, surname, emailID, issuedBook(FK -> BOOK.id)
1
2
3
4

# Book Table
id(PK), title, author, gerne, price, publisher
1
2
3
4


SELECT * FROM User

## NoSQL Database / Non-Relational DB (MongoDB)
>>Collections>>Douments

Synatx
    Doc1:{
        key:value
    }
    //BSON: Binary srcipt object notation

# User Collection
    Doc1:{
        "_id":ObjectID('acet12345),
        "name":"Vaishnavi",
        "surname":"Mali",
        "emailId":"vaishnavimali@gmail.com"
    }

    DOc2:{

    }

    Doc3:{

    }

# Book Colloection

Doc1{
    "_id":ObjectID("xyz12345"),
    title:"asc",
    "author":""vm
}
DOc2:{

    }

    Doc3:{

    }
