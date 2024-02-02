import axios from "axios";
import { SafeUser } from "../types";
import { useRouter } from "next/navigation";
import useLoginModal from "./useLoginModal";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();

  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (!currentUser) return loginModal.onOpen();

      try {
        let request;
        let favorite = null;
        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
          favorite = false;
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
          favorite = true;
        }
        await request();

        router.refresh();
        if (favorite) {
          toast.success("Added to your favorite list");
        } else {
          toast.success("Removed from your favorite list");
        }
      } catch (error) {
        toast.error("Something went wrong!");
      }
    },
    [currentUser, hasFavorited, listingId, loginModal, router]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
