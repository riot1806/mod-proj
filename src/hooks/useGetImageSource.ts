import { Media } from '@/interfaces/Media';

export const useGetImageSource = (media: Media) => {
  const mediaId = media?.id.toString().split('')!;
  const joinedId = mediaId?.join('/');

  const mediaUrl = `https://media.modmall.uz/media/${media?.collection}/${joinedId}/${media?.filename}`;

  return mediaUrl;
};
