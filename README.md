# Shopping-Cart

https://ngvuong.github.io/Shopping-Cart/

A simple shopping cart shop app that lets you browse and add various shopping carts to your shopping cart.

## Technologies and key concepts

App created using React with react-router-dom to facilitate client-side routing. Session storage was used for data persistence. Shopping cart heavily relies on use of state and ref hooks for keeping track of item quantities and current items in cart. Main difficulties were in the final stages where a bug was introduced only in production which allowed duplicated items to be added to the cart. The bug was finally resolved after moving the piece of code responsible for updating state and storage into the updater function for another state containing current items in cart.
