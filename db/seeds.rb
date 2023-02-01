user = User.create(email: 'user@email.com', password: 'password', password_confirmation: 'password')
user.products.create([{ title: "title 1", price: 7.99}, { title: "title 2", price: 7.77}])

