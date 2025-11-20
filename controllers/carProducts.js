import pool from "../config/db.js";
export const getCarProducts = async (req, res) => {
  try {
    let query = "SELECT * FROM carproducts";
    const carDetails = await pool.query(query);
    res.status(200).json({
      success: true,
      message: "Data Fetch successfully!",
      data: carDetails.rows,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Could not fetch!" });
  }
};
