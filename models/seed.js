import { Schema, model, models } from "mongoose";

const SeedCollectionSchema = new Schema ({
    id: {
        type: String,
        required: [true, 'Seed ID is required']
    },
    species_name: {
        type: String,
        required: [true, 'Species name is required']
    }
});

const SeedCollection = models.SeedCollection || model('SeedCollection', SeedCollectionSchema);

export default SeedCollection;