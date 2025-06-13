import { useRouter } from "next/router";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import PropertyDetail from "@/components/property/PropertyDetail";
import { PropertyProps } from "@/interfaces/index";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property: PropertyProps | undefined = PROPERTYLISTINGSAMPLE.find(
    (item) => item.name === id
  );

  if (!property) return <p>Property not found</p>;

  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  );
}
