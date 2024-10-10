export function transformCloudinaryUrl(url:string) {
  const uploadIndex = url.indexOf("/upload/");

  if (uploadIndex === -1) {
    return url;
  }

  const transformedUrl = url.slice(0, uploadIndex + 8) + "c_crop,g_center,ar_1:1/" + url.slice(uploadIndex + 8);

  return transformedUrl;
}