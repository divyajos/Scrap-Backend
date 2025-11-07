import '../model/connection.js';
import productSchemaModel from '../model/addproductmodel.js';
import url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const save = async (req, res) => {
  try {
    // Auto increment _id
    const productList = await productSchemaModel.find();
    const len = productList.length;
    const _id = len === 0 ? 1 : productList[len - 1]._id + 1;

    let filename = "";
    if (req.files && req.files.producticon) {
      const producticon = req.files.producticon;
      filename = Date.now() + "_" + producticon.name; // unique name
      const fileuploadpath = path.join(
        __dirname,
        "../../myproject/public/assets/upload/producticon",
        filename
      );
      await producticon.mv(fileuploadpath); // file move
    }

    // Save all details
    const productDetail = {
      ...req.body,
      _id: _id,
      info: Date(),
      producticon: filename,
    };

    console.log("✅ Product Detail:", productDetail);

    await productSchemaModel.create(productDetail);

    res.status(201).json({ status: true, msg: "Product saved successfully" });
  } catch (err) {
    console.error("❌ Save Error:", err.message);
    res.status(500).json({ status: false, error: err.message });
  }
};

export const fetch = async (req, res) => {
  try {
    const cate_obj = url.parse(req.url, true).query;
    const catlist = await productSchemaModel.find(cate_obj);

    if (catlist.length !== 0) {
      res.status(200).json(catlist);
    } else {
      res.status(404).json({ msg: "No products found" });
    }
  } catch (err) {
    console.error("❌ Fetch Error:", err.message);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const update = async (req, res) => {
  try {
    const cate_obj = JSON.parse(req.body.cate_obj);
    const content_obj = JSON.parse(req.body.content_obj);

    const user = await productSchemaModel.find(cate_obj);
    if (user.length !== 0) {
      const update_user = await productSchemaModel.updateOne(cate_obj, {
        $set: content_obj,
      });

      if (update_user.modifiedCount > 0) {
        res.status(200).json({ msg: "Product updated successfully" });
      } else {
        res.status(400).json({ msg: "Nothing to update" });
      }
    } else {
      res.status(404).json({ msg: "Resource not available in database" });
    }
  } catch (err) {
    console.error("❌ Update Error:", err.message);
    res.status(500).json({ msg: "Internal server error" });
  }
};
