import { supabase } from '../config.js';

// Function to create a new item
export const createItem = async (itemData) => {
  const { data, error } = await supabase
    .from('items')
    .insert([itemData]);

  if (error) {
    console.error('Error creating item:', error);
    throw error;
  }
  return data;
};

// Function to fetch all items
export const getAllItems = async () => {
  const { data, error } = await supabase
    .from('items')
    .select('*');

  if (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
  return data;
};

// Function to fetch a single item by ID
export const getItemById = async (id) => {
  const { data, error } = await supabase
    .from('items')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching item:', error);
    throw error;
  }
  return data;
};

// Function to update an item by ID
export const updateItem = async (id, updatedData) => {
  const { data, error } = await supabase
    .from('items')
    .update(updatedData)
    .eq('id', id);

  if (error) {
    console.error('Error updating item:', error);
    throw error;
  }
  return data;
};

// Function to delete an item by ID
export const deleteItem = async (id) => {
  const { data, error } = await supabase
    .from('items')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
  return data;
};
