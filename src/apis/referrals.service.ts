import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Load environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string;

// Create Supabase client
if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase URL and Key must be defined in your environment variables"
  );
}
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

// Service for referrals
const ReferralsService = {
  /**
   * Uploads an avatar to Supabase storage
   * @param file - The file to upload
   * @returns The public URL of the uploaded avatar
   */
  uploadAvatar: async (file: File): Promise<string> => {
    const fileName = `${Date.now()}.${file.name.split(".").pop()}`;
    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(fileName, file);

    if (error) {
      console.error("Error uploading avatar:", error);
      throw error;
    }

    // Get the public URL of the uploaded file
    const res = supabase.storage.from("avatars").getPublicUrl(data.path);

    return res.data.publicUrl;
  },

  /**
   * Deletes a referral's avatar from Supabase storage.
   * @param avatarUrl - The public URL of the avatar to delete.
   */
  deleteAvatar: async (avatarUrl: string) => {
    try {
      // Extract the path from the public URL (everything after the bucket name)
      const path = avatarUrl.split("/storage/v1/object/public/avatars/")[1];
      if (!path) throw new Error("Invalid avatar URL");

      const { error } = await supabase.storage.from("avatars").remove([path]);
      if (error) {
        console.error("Error deleting avatar from storage:", error);
        throw error;
      }
    } catch (err) {
      console.error("Error deleting avatar:", err);
      throw err;
    }
  },

  /**
   * Create a new referral
   * @param referral - Object containing referral data (e.g., { name, email })
   * @returns Promise resolving to the created referral or an error
   */
  createReferral: async (referral: any) => {
    const { data, error } = await supabase.from("referrals").insert([referral]);

    if (error) {
      console.error("Error creating referral:", error);
      throw error;
    }
    return data;
  },

  /**
   * Fetch all referrals
   * @returns Promise resolving to the list of referrals or an error
   */
  getReferrals: async () => {
    const { data, error } = await supabase
      .from("referrals")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error fetching referrals:", error);
      throw error;
    }
    return data;
  },

  /**
   * Update an existing referral
   * @param id - ID of the referral to update
   * @param updates - Object containing fields to update
   * @returns Promise resolving to the updated referral or an error
   */
  updateReferral: async (
    id: number,
    updates: Partial<{ name: string; email: string }>
  ) => {
    const { data, error } = await supabase
      .from("referrals")
      .update(updates)
      .eq("id", id);

    if (error) {
      console.error("Error updating referral:", error);
      throw error;
    }
    return data;
  },

  /**
   * Delete a referral
   * @param id - ID of the referral to delete
   * @returns Promise resolving to the deleted referral or an error
   */
  deleteReferral: async (id: number) => {
    const { data, error } = await supabase
      .from("referrals")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting referral:", error);
      throw error;
    }
    return data;
  },

  /**
   * Deletes a referral and its associated avatar.
   * @param id - The ID of the referral to delete.
   * @param avatarUrl - The public URL of the avatar (optional).
   */
  deleteReferralWithAvatar: async (id: number, avatarUrl?: string) => {
    try {
      // Step 1: Delete the avatar from storage (if exists)
      if (avatarUrl) {
        await ReferralsService.deleteAvatar(avatarUrl);
      }

      // Step 2: Delete the referral row from the table
      await ReferralsService.deleteReferral(id);

      console.log(
        `Referral with ID ${id} and associated avatar deleted successfully.`
      );
    } catch (err) {
      console.error("Error deleting referral and avatar:", err);
      throw err;
    }
  },
};

export default ReferralsService;
