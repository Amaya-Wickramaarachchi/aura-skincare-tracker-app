# How-to: Add a New Product
   This guide explains how to add a new skincare product to the AURA Skincare Tracker.

## Steps

Navigate to Products:
From the navigation bar, click Products (/products).


Enter Product Details:
In the form, type the product name (e.g., "Night Cream") in the text field.


Save the Product:
Click Add Product.


Verify:
The product should appear in the "Available Products" table below the form.



## Notes

Product names must be non-empty.
Products are stored in LocalStorage as skincareProducts with { id, name, status }.
To delete a product, click Delete next to it in the table (sets status: "deleted").

## Troubleshooting

Product not appearing? Check LocalStorage (F12 → Application → LocalStorage → skincareProducts).
See docs/playbooks/data-loss.md for data issues.

