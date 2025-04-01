import express from 'express';
import { supabase } from './config.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Get all items
app.get("/item", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('items')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    return res.json({ data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Add new item
app.post("/item", async (req, res) => {
  try {
    const { name, email, phoneno, title, description, image } = req.body;
    
    const { data, error } = await supabase
      .from('items')
      .insert([
        { name, email, phoneno, title, description, image }
      ])
      .select();
    
    if (error) throw error;
    
    return res.status(201).json(data[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Delete item
app.delete("/item/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    const { error } = await supabase
      .from('items')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    
    return res.json({ message: "Item deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Get single item
app.get("/item/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    const { data, error } = await supabase
      .from('items')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    if (!data) {
      return res.status(404).json({ message: "Item not found" });
    }
    
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// File upload endpoint
app.post("/upload", async (req, res) => {
  try {
    const file = req.files.file;
    const fileName = `${Date.now()}_${file.name}`;
    
    const { error } = await supabase.storage
      .from('items-bucket')  // Create this bucket in Supabase
      .upload(fileName, file.data);
    
    if (error) throw error;
    
    const { data } = supabase.storage
      .from('items-bucket')
      .getPublicUrl(fileName);
      
    return res.json({ url: data.publicUrl });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
