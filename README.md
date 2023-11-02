# Node.js + Typescript + Mysql + Sequelize

Features: all CRUD operations, sort by name or description, association between products and brand, (login/register to protect routes but didn't have time to implement it in the frontend).

Endpoints: 
/api/products/ (getting all products or creating a new one)

/api/products/:id (getting product by id, deleting product by id, updating product by id)

/api/products/?name= (sorting products by name)

/api/products/?description= (sorting products by description)

Remote run (dev):

modify .env to match your mysql configuration.

npm install

npm run type

npm run dev (in a new terminal)

I had a problem deploying the proyect but I can get it to work in these days.
