"use client";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import React from "react";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
}

const Map = dynamic(() => import("../Map"), { ssr: false });

const ListingInfo: React.FC<ListingInfoProps> = ({ user, description, guestCount, roomCount, bathroomCount, category, locationValue }) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
          <p>Hosted by {user?.name}</p>
          <Avatar src={user?.image} />
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
        <span>{guestCount} guest</span>
        <span>{roomCount} rooms</span>
        <span>{bathroomCount} bathrooms</span>
      </div>
      <hr />
      {category && <ListingCategory icon={category.icon} label={category?.label} description={category?.description} />}
      <hr />
      <p className="text-lg font-light text-neutral-500">{description}</p>
      <hr />
      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;
