//deal controllers
import Deal from "../models/Deals.models.js";

// Create a new deal
export const createDeal = async (req, res) => {
  const { title, description, discount, startDate, endDate, isActive } =
    req.body;
  if (!title || !description || !discount || !startDate || !endDate) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const deal = await Deal.create({
      title,
      description,
      discount,
      startDate,
      endDate,
      isActive,
    });
    res.status(201).json(deal);
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

// Get all deals
export const getDeals = async (req, res) => {
  try {
    const deals = await Deal.find({});
    res.status(200).json(deals);
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

// Update a deal
export const updateDeal = async (req, res) => {
  const { dealid } = req.params;
  const { title, description, discount, startDate, endDate, isActive } =
    req.body;
  if (!title || !description || !discount || !startDate || !endDate) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const deal = await Deal.findById(dealid);
    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }
    deal.title = title;
    deal.description = description;
    deal.discount = discount;
    deal.startDate = startDate;
    deal.endDate = endDate;
    deal.isActive = isActive;
    await deal.save();
    res.status(200).json({ deal });
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

// Delete a deal

export const deleteDeal = async (req, res) => {
  const { dealid } = req.params;
  try {
    const deal = await Deal.findByIdAndDelete(dealid);
    res.status(200).json({ message: "Deal deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};
