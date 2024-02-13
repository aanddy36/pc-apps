import { useTranslations } from "../../i18n/utils";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const ContactLocation = ({ lang }: { lang: "en" | "es" }) => {
  const t = useTranslations(lang);

  var greenIcon = L.icon({
    iconUrl: "/src/assets/location-pin.png",
    shadowUrl: "/src/assets/marker-shadow.png",
    iconSize: [38, 38], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [20, 32], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [0, -46], // point from which the popup should open relative to the iconAnchor
  });
  return (
    <section
      className="flex flex-col px-4 laptop:px-8 full:px-16 py-10 items-center order-last 
    laptop:order-first gap-12"
    >
      <div className="w-full flex flex-col gap-8 items-center">
        <h2 className="font-semibold text-2xl laptop:text-3xl">
          {t("contact.locTitle")}
        </h2>

        <li className="flex flex-col gap-1 w-full">
          <div className="font-semibold text-lg flex items-center gap-3">
            <img src="/src/assets/location.svg" alt="Location Ping" />{" "}
            {t("about.locationAddress")}:
          </div>
          <span className="opacity-70">
            7676 NW 186 th St., Suite 214. Miami, Fl. 33015
          </span>
        </li>
        <li className="flex flex-col gap-1 w-full">
          <div className="font-semibold text-lg flex items-center gap-3">
            <img src="/src/assets/phone.svg" alt="Location Ping" />{" "}
            {t("about.locationPhone")}:
          </div>
          <span className="opacity-70">+1 (123) 456-7890</span>
        </li>
        <li className="flex flex-col gap-1 w-full">
          <div className="font-semibold text-lg flex items-center gap-3">
            <img src="/src/assets/email.svg" alt="Location Ping" /> Email:
          </div>
          <span className="opacity-70">info@pcappsint.com</span>
        </li>
      </div>
      <MapContainer
        center={[25.942, -80.324]}
        zoom={16}
        scrollWheelZoom={false}
        style={{ width: "100%" }}
        className="h-[350px] laptop:h-[500px] rounded-lg border"
      >
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[25.942, -80.324]} icon={greenIcon}>
          <Popup className="bg-bg">
            <p className="">{t("about.locationPinMsj")}</p>
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};
