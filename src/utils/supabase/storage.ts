// This function handles the uploading of file files to Supabase storage from the client side.
// It is done through client side securely to overcome 4.5 mb file transfer limit by vercel over the network.

// Before starting up, do the following;
// 1. Create a bucket in the supabase storage
// 2. Assign policies to the bucket (permissions: read, write)
// 3. For policies: click on ne policy, add custom policy, select a name for the policy, select SELECT & INSERT operation, and save

// USAGE
// - upload(file: File): Promise<{ filepath: string }>
// - getSignedUrl(filepath: string): Promise<{ signedUrl: string }>
// - getPublicUrl(filepath: string): Promise<{ publicUrl: string }>

import { supabaseBrowserClient } from './client';

const bucketName = 'storage';

// Upload the file to the Supabase storage bucket.
export async function upload(file: File): Promise<{ filepath: string }> {
  // Using browserclient to upload file from client side securely.
  const supabase = supabaseBrowserClient();

  if (file == null) {
    throw new Error('File does not exist.');
  }

  // Create a unique key for the file file.
  const key = `${Date.now()}-${file.name}`;

  // Upload the file file to the Supabase storage bucket.
  const { error } = await supabase.storage.from(bucketName).upload(key, file);

  if (error) {
    throw new Error(error.message);
  }

  return { filepath: key };
}

// Get a signed URL (valid for 60 seconds) of the file from the Supabase storage using the filepath.
export async function getSignedUrl(filepath: string): Promise<{ signedUrl: string }> {
  const supabase = supabaseBrowserClient();

  // To increase or decrease the time limit of the signed URL, change the time limit by changing the value of the second argument in the createSignedUrl function.
  const { data, error } = await supabase.storage.from(bucketName).createSignedUrl(filepath, 60);

  if (error || !data) {
    throw new Error(error?.message ?? 'File not found');
  }

  return { signedUrl: data?.signedUrl };
}

// Get the public URL of the file from the Supabase storage using the filepath.
export async function getPublicUrl(filepath: string): Promise<{ publicUrl: string }> {
  const supabase = supabaseBrowserClient();

  const { data } = await supabase.storage.from(bucketName).getPublicUrl(filepath);

  if (!data) {
    throw new Error('File not found');
  }

  return { publicUrl: data.publicUrl };
}

// You can do more with the storage API. Check out the official documentation for more details.
// https://supabase.com/docs/guides/storage/quickstart?queryGroups=language&language=javascript
