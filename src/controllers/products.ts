import { Request, Response } from "express";
import { Product } from "../models/products";
import { Op } from "sequelize";
import { Brand } from "../models/brands";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.query;

    const filterOptions = {
      where: {} as any,
      include: [Brand],
    };

    if (name) {
      filterOptions.where.name = { [Op.like]: `%${name}%` };
    }

    if (description) {
      filterOptions.where.description = { [Op.like]: `%${description}%` };
    }

    const listProducts = await Product.findAll(filterOptions);
    res.json(listProducts);
  } catch (error) {
    res.status(500).json({ error: "Error when obtaining products" });
  }
};

export const getProductsById = async (req: Request, res: Response) => {
  const productId = req.params.id;
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ error: "Error when obtaining the product" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, description, image_url, price, brandId } = req.body;
  try {
    const newProduct = await Product.create({
      name,
      description,
      image_url,
      price,
      brandId,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: "Error when creating new product" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const { name, description, image_url, price } = req.body;
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      await product.update({ name, description, image_url, price });
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ error: "Error when updating the product" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      await product.destroy();
      res.json({ message: "Product deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error when deleting the product" });
  }
};
