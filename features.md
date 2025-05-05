### **Voxel Placement & Editing**

- **Single Voxel Placement**  
  Place a voxel at a specific location with the currently selected color/material[3][5].

- **Rectangle/Box Placement (Click & Drag)**  
  Click and drag to fill a rectangular prism area with voxels, using the selected color/material.

- **Extrude/Intrude Faces**

  - Extrude a face: Add a layer of voxels along a selected face.
  - Extrude same-color: Add voxels only to contiguous faces of the same color/material.
  - Intrude a face: Remove a layer of voxels from a selected face.
  - Intrude same-color: Remove voxels only from contiguous faces of the same color/material.

- **Erase Tools**
  - Erase single voxel.
  - Erase multiple voxels (e.g., via drag selection or box tool)[5].

---

### **Selection & Manipulation**

- **Voxel Selection**

  - Select a single voxel.
  - Multi-select: Click and drag to select a group of voxels[5].

- **Move Selection**  
  Move the selected voxels to a new location within the model.

- **Rotate Selection**  
  Rotate the selected voxels around X, Y, or Z axes.

---

### **Color & Material Management**

- **Color/Material Palette**

  - Select a color (default material).
  - When a new color is used, add it to a "document colors" grid for easy reuse.
  - Each color swatch is linked to a material with default settings (roughness, metalness, etc.).

- **Painting & Editing**

  - Paint a voxel with the selected color/material.
  - Apply material to a selection.
  - Adjust color for all voxels of a specific material.
  - Adjust material properties (roughness, metalness, opacity, emissiveness, emissive color, etc.) for all voxels using that color/material.

- **Edit Document Colors/Materials**
  - Select a document color to edit.
  - Change its color and material properties, updating all voxels using it.

---

### **Navigation & Usability**

- **Basic Camera Controls**

  - Orbit, pan, and zoom to navigate the 3D scene[4].

- **Voxel Marker**
  - Visual highlight of the currently hovered or selected voxel for precise editing[5].

---

### **Additional Useful Features**

- **Undo/Redo**  
  Basic undo/redo stack for voxel operations.

- **Save/Load**  
  Save and load voxel models in a simple file format.

---

## **Summary Table**

| Category                 | Feature                                                                                |
| ------------------------ | -------------------------------------------------------------------------------------- |
| Placement & Editing      | Single voxel placement, box/rectangle fill, extrude/intrude (face & same-color), erase |
| Selection & Manipulation | Single/multi-select, move, rotate                                                      |
| Color/Material           | Palette, paint, apply/edit material, document colors/materials management              |
| Usability                | Camera controls, voxel marker, undo/redo, save/load                                    |

---

## **Potential Missing Essentials**

- **Fill Tool**  
  (Flood fill contiguous area with selected color/material)[8].

- **Copy/Paste Selection**  
  Duplicate voxel groups for faster modeling.

- **Basic Export**  
  Export to a simple format (e.g., .vox or .obj) for use in other tools.

---

This outline covers the core features needed for a functional voxel editor MVP. You can prioritize these features to deliver a solid, user-friendly experience before implementing more advanced tools and rendering capabilities[3][5].

Citations:
[1] https://sites.google.com/site/letsmakeavoxelengine/
[2] https://www.reddit.com/r/VoxelGameDev/comments/gqc9ry/looking_for_tutorials_making_a_voxel_editor/
[3] https://ephtracy.github.io
[4] https://www.youtube.com/watch?v=uKOBIHSgIwI
[5] https://www.youtube.com/watch?v=Ab8TOSFfNp4
[6] https://bcmpinc.wordpress.com/2014/12/21/voxel-editor/
[7] https://github.com/JamesRandall/SimpleVoxelEngine
[8] https://talk.codea.io/t/need-help-with-an-improved-voxel-editor/14229
[9] https://discussions.unity.com/t/is-there-a-voxel-based-terrain-implementation-thats-any-good/572299
[10] https://talk.codea.io/t/myamusevoxel-a-voxel-editor-based-on-the-built-in-sample-voxel-editor/16375

---

Answer from Perplexity: pplx.ai/share
