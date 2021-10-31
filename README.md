# ProShop

This is an eCommerce platform for buying and selling products. Here we are providing a very simple user interface for a good user experience. You can checkout the developed website by going [here](https://proshop-0.herokuapp.com/)

# Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

# Technology Stack Used

- Backend:

  1. Node.js
  1. Express.js
  1. MongoDB

- Frontend:

  1. React.js
  1. Redux (for state management)

# Usage

### ES Modules in Node

We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### How to run the project

1. First clone this repo into your local system
2. Create a .env file and add the following:

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

3. Install the dependencies

```
npm install
cd frontend
npm install
```

4. Run the code

```
# The following command will run both frontend (port:- 3000) and backend (port:- 5000)

npm run dev

# Run backend only
npm run server
```

### Seed Database

You can seed the database with sample products and users by using the following commands

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
# Sample user logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```
